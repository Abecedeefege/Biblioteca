/* My library (C) service worker — network-first with cache fallback, so the
   catalog keeps working offline and the app is installable. Scoped to /C/. */
const CACHE = 'my-library-v2';

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE).then((c) => c.addAll(['./'])).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    fetch(e.request)
      .then((res) => {
        if (res.ok && new URL(e.request.url).origin === self.location.origin) {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(e.request, copy));
        }
        return res;
      })
      .catch(() => caches.match(e.request))
  );
});

/* Web Push — receives pushes even with the app closed and deep-links on tap.
   Paths resolve relative to this SW (…/Biblioteca/C/sw.js), so the GitHub
   Pages base path is handled automatically. Icon PNGs are shared with the
   parent site (payload can override). */
self.addEventListener('push', (event) => {
  let data = {};
  try { data = event.data ? event.data.json() : {}; } catch (e) {}
  event.waitUntil(self.registration.showNotification(data.title || 'My library', {
    body: data.body || '',
    icon: data.icon || '../notification-icon.png',
    // Android badge uses only the alpha channel: monochrome silhouette PNG.
    badge: data.badge || '../notification-badge.png',
    tag: data.nid || 'my-library',              // collapses retries of the same id
    data: { url: data.url || './', nid: data.nid || '' },
  }));
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const d = event.notification.data || {};
  let url;
  try { url = new URL(d.url || './', self.location.href); }
  catch (e) { url = new URL('./', self.location.href); }
  if (d.nid) {                                  // lets engage.js log the click on open
    url.searchParams.set('nid', d.nid);
    url.searchParams.set('src', 'push');
  }
  event.waitUntil(clients.openWindow(url.href));
});
