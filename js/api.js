// =====================================================
// API CLIENT — fetch ke Google Apps Script (REST JSON)
// POST WAJIB Content-Type text/plain agar tidak memicu
// CORS preflight (GAS tidak menjawab OPTIONS).
// =====================================================
(function () {
  'use strict';
  const TIMEOUT = 60000;
  const fatal = (m) => Object.assign(new Error(m), { fatal: true });

  function url() {
    const u = window.APP_CONFIG && window.APP_CONFIG.GAS_URL;
    if (!u || /XXXX/.test(u)) throw fatal('GAS_URL belum diisi. Buka js/config.js lalu tempel URL /exec dari Apps Script.');
    return u;
  }
  function parse(txt) {
    try { return JSON.parse(txt); }
    catch (e) { throw fatal('Backend tidak mengembalikan JSON. Pastikan Web App di-deploy: Execute as "Me", akses "Anyone", dan URL berakhiran /exec.'); }
  }
  function withTimeout(opts) {
    const ctl = new AbortController(), t = setTimeout(() => ctl.abort(), TIMEOUT);
    opts.signal = ctl.signal;
    return { opts, done: () => clearTimeout(t) };
  }
  function post(body) {
    let u; try { u = url(); } catch (e) { return Promise.reject(e); }
    const w = withTimeout({ method: 'POST', redirect: 'follow', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify(body) });
    return fetch(u, w.opts).then(r => r.text()).then(t => { w.done(); return parse(t); }).catch(e => { w.done(); throw e; });
  }
  function get(action) {
    let u; try { u = url(); } catch (e) { return Promise.reject(e); }
    const w = withTimeout({ method: 'GET', redirect: 'follow' });
    return fetch(u + '?action=' + encodeURIComponent(action), w.opts).then(r => r.text()).then(t => { w.done(); return parse(t); }).catch(e => { w.done(); throw e; });
  }

  window.API = {
    public: () => get('public'),
    health: () => get('health'),
    /** Pemetaan nama fungsi lama -> endpoint REST (app.js tidak perlu tahu detail HTTP). */
    call(fn, a) {
      switch (fn) {
        case 'apiLogin':  return post({ action: 'login', username: a[0], password: a[1], role: a[2] });
        case 'apiLogout': return post({ action: 'logout', token: a[0] });
        case 'apiPing':   return post({ action: 'ping', token: a[0], ver: a[1] });
        case 'apiCall':   return post({ action: 'call', token: a[0], op: a[1], data: a[2], cid: a[3] });
      }
      return Promise.reject(new Error('Fungsi API tidak dikenal: ' + fn));
    }
  };
})();
