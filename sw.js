/* Service worker Putri Bali POS — syarat agar aplikasi bisa di-install.
   Strategi: jaringan dulu (selalu versi terbaru), cache hanya cadangan saat offline.
   Permintaan ke server Google Apps Script (beda domain) tidak pernah di-cache. */
const CACHE = 'pbpos-v3.5';
self.addEventListener('install', e => { self.skipWaiting(); e.waitUntil(caches.open(CACHE).then(c => c.addAll(['./', 'index.html', 'css/style.css?v=3.5', 'js/app.js?v=3.5', 'img/logo-putri-bali.png']).catch(() => {}))); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(k => Promise.all(k.filter(n => n !== CACHE).map(n => caches.delete(n)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  const r = e.request, u = new URL(r.url);
  if (r.method !== 'GET' || u.origin !== self.location.origin) return;
  e.respondWith(fetch(r).then(res => { if (res.ok) { const c = res.clone(); caches.open(CACHE).then(x => x.put(r, c)); } return res; })
    .catch(() => caches.match(r).then(m => m || caches.match('index.html'))));
});
