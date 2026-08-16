/* Bibliotequeando service worker — offline-first (stale-while-revalidate):
   sirve al instante la copia guardada en el dispositivo, revalida en segundo
   plano, y les avisa a las páginas abiertas cuando bajó contenido nuevo para
   que ofrezcan recargar. Así la app abre sin esperar la red (o sin red), y
   solo pide actualizar cuando de verdad hay novedades. */
const CACHE = 'bibliotequeando-v1';

/* Cascarón + datos para que la app abra completa sin red desde la instalación.
   index.html (el catálogo canónico, ~5MB con fotos) se baja una sola vez y se
   guarda bajo sus dos claves — './' e './index.html' — porque las páginas lo
   piden de las dos formas y para la caché son URLs distintas. */
const SHELL = [
  './manifest.json',
  './icon-192.png',
  './apple-touch-icon.png',
  './concepts/fichero.html',
  './concepts/index.html',
  './concepts/editorial.json',
  './concepts/collections.json',
  './data/enrichment.json',
];

self.addEventListener('install', (e) => {
  e.waitUntil((async () => {
    const c = await caches.open(CACHE);
    /* tolerante por ítem: un 404 en un archivo del shell no aborta el resto */
    await Promise.all(SHELL.map((u) => c.add(u).catch(() => {})));
    try {
      const res = await fetch('./index.html');
      if (res.ok) { await c.put('./', res.clone()); await c.put('./index.html', res); }
    } catch (err) {}
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

/* La clave de caché ignora el query string: en un sitio estático el mismo
   path devuelve siempre el mismo archivo, y los deep-links de los pushes
   (?nid=…&src=push) o cache-busters (?_=…) no deben multiplicar entradas. */
const keyFor = (req) => req.url.split(/[?#]/)[0];

/* ¿La respuesta nueva trae contenido distinto al guardado? Compara el primer
   par de headers de versión presente en ambas; sin evidencia, no avisa. */
const changed = (oldRes, newRes) => {
  for (const h of ['etag', 'last-modified', 'content-length']) {
    const a = oldRes.headers.get(h), b = newRes.headers.get(h);
    if (a && b) return a !== b;
  }
  return false;
};

const notifyFresh = async (url) => {
  const cs = await self.clients.matchAll({ includeUncontrolled: true });
  cs.forEach((c) => c.postMessage({ type: 'fresh-content', url }));
};

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  /* cross-origin (fonts, Supabase, GitHub API) queda en manos del browser */
  if (new URL(req.url).origin !== self.location.origin) return;

  const key = keyFor(req);
  /* 'no-store' (la Mesa de Fichado exige datos frescos) y el hard-reload
     ('reload') van a la red primero; la caché queda solo de paracaídas. */
  const wantsFresh = req.cache === 'no-store' || req.cache === 'reload';

  const revalidate = async (cached) => {
    const res = await fetch(req);
    if (res.ok) {
      const copy = res.clone();
      const c = await caches.open(CACHE);
      await c.put(key, copy);   /* si la descarga se corta a mitad, el put falla y la copia vieja sobrevive */
      if (cached && changed(cached, res)) await notifyFresh(key);
    }
    return res;
  };

  e.respondWith((async () => {
    const cached = await caches.match(key);
    if (wantsFresh || !cached) {
      try { return await revalidate(cached); }
      catch (err) { if (cached) return cached; throw err; }
    }
    /* copia local al instante; la red corre de fondo y avisa si hay novedades */
    e.waitUntil(revalidate(cached).catch(() => {}));
    return cached;
  })());
});

/* Web Push — receives pushes even with the app closed and deep-links on tap.
   All paths resolve relative to this SW's location (…/Biblioteca/sw.js), so
   the /Biblioteca/ base path on GitHub Pages is handled automatically. */
self.addEventListener('push', (event) => {
  let data = {};
  try { data = event.data ? event.data.json() : {}; } catch (e) {}
  event.waitUntil(self.registration.showNotification(data.title || 'Bibliotequeando', {
    body: data.body || '',
    // Los paths por default pueden pisarse desde el payload del push, así un
    // cambio de ícono no exige esperar la actualización del service worker.
    icon: data.icon || './notification-icon.png',
    // El badge Android usa solo el canal alfa: tiene que ser una silueta
    // monocroma sobre transparente, no el ícono a color (se ve un cuadrado).
    badge: data.badge || './notification-badge.png',
    tag: data.nid || 'biblioteca',            // collapses retries of the same id
    data: { url: data.url || './', nid: data.nid || '' },
  }));
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const d = event.notification.data || {};
  let url;
  try { url = new URL(d.url || './', self.location.href); }
  catch (e) { url = new URL('./', self.location.href); }
  if (d.nid) {                                // lets engage.js log the click on open
    url.searchParams.set('nid', d.nid);
    url.searchParams.set('src', 'push');
  }
  event.waitUntil(clients.openWindow(url.href));
});
