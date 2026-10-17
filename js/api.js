// =====================================================
// API CLIENT PRO — fetch ke Google Apps Script (REST JSON)
// Pola gas-instant-ux-pro:
//  • POST Content-Type text/plain (tanpa CORS preflight)
//  • Timeout per jenis aksi (baca cepat pulih dari cold start)
//  • Baca di-retry 3× dengan jeda bertahap; tulis aman di-retry
//    karena membawa ID permintaan (cid) yang idempoten di server
//  • Tunggu online saat HP putus sinyal
//  • Warm-up server saat aplikasi dibuka / kembali dari latar
//  • Pengukur: ketik Perf.table() di Console untuk melihat waktu
// =====================================================
(function () {
  'use strict';
  const fatal = (m) => Object.assign(new Error(m), { fatal: true });
  const READ_OPS = /^(sync|trxRange|statusSistem|auditList|notifConfig|notifQueue|waDevice|waAudience|waBlastList|crmList|crmStats|crmDetail|crmExport|migrasiPindai)$/;

  function url() {
    const u = window.APP_CONFIG && window.APP_CONFIG.GAS_URL;
    if (!u || /XXXX/.test(u)) throw fatal('GAS_URL belum diisi. Buka js/config.js lalu tempel URL /exec dari Apps Script.');
    return u;
  }

  const Perf = window.Perf = {
    rows: [],
    add(aksi, total, server) {
      this.rows.push({ aksi, total, server: server == null ? null : server, jaringan: server != null ? total - server : null, jam: new Date().toLocaleTimeString('id-ID') });
      if (this.rows.length > 200) this.rows.shift();
    },
    table() { console.table(this.rows.slice(-30)); }
  };

  function waitOnline(ms) {
    return new Promise(r => {
      if (navigator.onLine !== false) return r();
      const t = setTimeout(done, ms);
      function done() { clearTimeout(t); removeEventListener('online', done); r(); }
      addEventListener('online', done);
    });
  }

  async function once(method, body, timeout, label) {
    const u = url();
    const ctl = new AbortController(), timer = setTimeout(() => ctl.abort(), timeout), t0 = performance.now();
    try {
      const opts = method === 'GET'
        ? { method: 'GET', redirect: 'follow', cache: 'no-store', signal: ctl.signal }
        : { method: 'POST', redirect: 'follow', cache: 'no-store', signal: ctl.signal, headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify(body) };
      const res = await fetch(method === 'GET' ? u + '?action=' + encodeURIComponent(body.action) : u, opts);
      const text = await res.text();
      try {
        const j = JSON.parse(text);
        Perf.add(label, Math.round(performance.now() - t0), j.ms);
        return j;
      } catch (e) {
        if (res.ok && /<html/i.test(text)) throw fatal('Backend tidak mengembalikan JSON. Pastikan Web App di-deploy: Execute as "Me", akses "Anyone", dan URL berakhiran /exec.');
        return { success: false, network: true, retryable: true, message: 'Server membalas HTTP ' + res.status + ' (bukan JSON).' };
      }
    } catch (err) {
      if (err && err.fatal) throw err;
      return { success: false, network: true, retryable: true, message: err && err.name === 'AbortError' ? 'Server terlalu lama merespons.' : 'Koneksi terputus.' };
    } finally { clearTimeout(timer); }
  }

  /** baca: 3× (25 dtk lalu 40 dtk). tulis: 2× (90 dtk) — aman karena cid idempoten. */
  async function request(method, body, isRead, label) {
    const tries = isRead ? 3 : 2;
    let res;
    for (let i = 0; i < tries; i++) {
      if (i) { await new Promise(r => setTimeout(r, 1200 * i)); await waitOnline(15000); }
      res = await once(method, body, isRead ? (i ? 40000 : 25000) : 90000, label);
      if (res.success || !res.retryable) break;
    }
    if (!res.success && res.network) { const e = new Error(res.message); e.network = true; throw e; }
    return res;
  }

  let lastWarm = 0;
  function warmUp() {
    try {
      if (Date.now() - lastWarm < 120000) return;
      lastWarm = Date.now();
      fetch(url() + '?ping=' + Date.now(), { mode: 'no-cors', cache: 'no-store' }).catch(() => {});
    } catch (e) { /* GAS_URL belum diisi */ }
  }
  warmUp();
  document.addEventListener('visibilitychange', () => { if (!document.hidden) warmUp(); });

  window.API = {
    public: () => request('GET', { action: 'public' }, true, 'public'),
    health: () => request('GET', { action: 'health' }, true, 'health'),
    warmUp: warmUp,
    /** Pemetaan nama fungsi → endpoint REST (app.js tidak perlu tahu detail HTTP). */
    call(fn, a) {
      try {
        switch (fn) {
          case 'apiLogin':  return request('POST', { action: 'login', username: a[0], password: a[1], role: a[2], appUrl: a[3] || '' }, false, 'login');
          case 'apiLogout': return request('POST', { action: 'logout', token: a[0] }, true, 'logout');
          case 'apiPing':   return request('POST', { action: 'ping', token: a[0], ver: a[1] }, true, 'ping');
          case 'apiCall':   return request('POST', { action: 'call', token: a[0], op: a[1], data: a[2], cid: a[3] }, READ_OPS.test(a[1]), a[1]);
        }
      } catch (e) { return Promise.reject(e); }
      return Promise.reject(new Error('Fungsi API tidak dikenal: ' + fn));
    }
  };
})();
