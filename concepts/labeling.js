/* labeling.js — capa de datos de la Mesa de Fichado (concepts/labeling.html).
   Tareas de fichado: cada libro sin identificar o sin foto de su cara es un
   módulo del feed; acá viven el catálogo derivado, el outbox y los backends.

   Patrón no negociable (heredado de engage.js): OUTBOX. Cada acción se
   guarda local SINCRÓNICO antes de intentar la red; los bytes de las fotos
   van a IndexedDB (localStorage no aguanta JPEGs). Flush al cargar, al
   volver a foco y al recuperar red, con dedup por id. Badge honesto.

   Dos backends, pipe separado del de engagement a propósito:
   - con PAT (localStorage biblioteca_gh_pat): fotos como archivos nuevos en
     data/labeling/fotos/ + un solo commit por lote a data/labeling.json.
   - sin PAT: fotos al bucket público 'labeling' de Supabase + filas en la
     tabla biblioteca_labeling (insert-only anónimo, RLS). Las ingiere el
     agente /labeling — no el workflow de push, que es de otro pipe.

   Ownership: este archivo solo escribe data/labeling.json y
   data/labeling/fotos/. sync/, notifications/, recs/ son de otros actores. */
(function () {
  'use strict';

  var REPO = 'Abecedeefege/Biblioteca';
  var BRANCH = 'main';
  var DATA_PATH = 'data/labeling.json';
  var FOTOS_PREFIX = 'data/labeling/';          // + 'fotos/<BOOKID>-<uid>.jpg'
  var SUPA = 'https://jhdwpxttgnravhlnmdgg.supabase.co';
  var SUPA_KEY = 'sb_publishable_phJdQOO7PUdidexaeUI4vQ_WJpKOgDM';
  var BUCKET = 'labeling';

  var K = {
    pat: 'biblioteca_gh_pat',
    device: 'biblioteca_device_name',
    outbox: 'biblioteca_labeling_outbox',
    applied: 'biblioteca_labeling_applied',
  };
  var DB_NAME = 'bibliotequeando-labeling', DB_VER = 1;
  var ST_OUT = 'outbox', ST_CACHE = 'cache';
  var MAX_EDGE = 1400, QUALITY = 0.82;
  var APPLIED_MAX = 200, CACHE_MAX = 80;

  /* ---------- utilidades ---------- */
  function now() { return new Date().toISOString(); }
  /* sin guiones: el uid entra en nombres de archivo con forma vigilada por RLS */
  function uid() { return Date.now().toString(36) + Math.random().toString(36).slice(2, 8); }
  function device() { return localStorage.getItem(K.device) || 'sin-nombre'; }
  function readLS(key, fb) {
    try { var v = localStorage.getItem(key); return v ? JSON.parse(v) : fb; } catch (e) { return fb; }
  }
  function writeLS(key, v) {
    try { localStorage.setItem(key, JSON.stringify(v)); return true; } catch (e) { return false; }
  }

  /* ---------- IndexedDB: bytes de fotos (outbox) + revelado local (cache) ---------- */
  var dbp = null;
  function openDB() {
    if (dbp) return dbp;
    dbp = new Promise(function (res, rej) {
      var rq;
      try { rq = indexedDB.open(DB_NAME, DB_VER); } catch (e) { return rej(e); }
      rq.onupgradeneeded = function () {
        var d = rq.result;
        if (!d.objectStoreNames.contains(ST_OUT)) d.createObjectStore(ST_OUT);
        if (!d.objectStoreNames.contains(ST_CACHE)) d.createObjectStore(ST_CACHE);
      };
      rq.onsuccess = function () { res(rq.result); };
      rq.onerror = function () { rej(rq.error || new Error('IndexedDB')); };
      rq.onblocked = function () { rej(new Error('IndexedDB bloqueado')); };
    });
    dbp.catch(function () { dbp = null; });
    return dbp;
  }
  function idbGet(store, k) {
    return openDB().then(function (d) {
      return new Promise(function (res, rej) {
        var r = d.transaction(store, 'readonly').objectStore(store).get(k);
        r.onsuccess = function () { res(r.result || null); };
        r.onerror = function () { rej(r.error); };
      });
    });
  }
  function idbPut(store, k, v) {
    return openDB().then(function (d) {
      return new Promise(function (res, rej) {
        var t = d.transaction(store, 'readwrite');
        t.objectStore(store).put(v, k);
        t.oncomplete = function () { res(); };
        t.onerror = t.onabort = function () { rej(t.error || new Error('no se pudo guardar')); };
      });
    });
  }
  function idbDel(store, k) {
    return openDB().then(function (d) {
      return new Promise(function (res, rej) {
        var t = d.transaction(store, 'readwrite');
        t.objectStore(store).delete(k);
        t.oncomplete = function () { res(); };
        t.onerror = t.onabort = function () { rej(t.error); };
      });
    });
  }
  function idbEntries(store) {
    return openDB().then(function (d) {
      return new Promise(function (res, rej) {
        var out = [], os = d.transaction(store, 'readonly').objectStore(store);
        var r = os.openCursor();
        r.onsuccess = function () {
          var c = r.result;
          if (!c) return res(out);
          out.push({ key: c.key, value: c.value });
          c.continue();
        };
        r.onerror = function () { rej(r.error); };
      });
    });
  }
  /* el cache es un revelado local, no un archivo: si crece, caen los más viejos */
  function cachePhoto(repoPath, b64) {
    return idbPut(ST_CACHE, repoPath, { b64: b64, ts: now() }).then(function () {
      CACHE[repoPath] = b64;
      return idbEntries(ST_CACHE).then(function (all) {
        if (all.length <= CACHE_MAX) return;
        all.sort(function (a, b) { return (a.value.ts || '') < (b.value.ts || '') ? -1 : 1; });
        return Promise.all(all.slice(0, all.length - CACHE_MAX).map(function (e) {
          delete CACHE[e.key];
          return idbDel(ST_CACHE, e.key);
        }));
      });
    }).catch(function () {});
  }

  /* ---------- revelado (mismo pipeline que polaroids.js) ---------- */
  function viaImg(file) {
    return new Promise(function (res, rej) {
      var url = URL.createObjectURL(file), im = new Image();
      im.onload = function () { URL.revokeObjectURL(url); res(im); };
      im.onerror = function () { URL.revokeObjectURL(url); rej(new Error('no pude leer la imagen')); };
      im.src = url;
    });
  }
  function toDrawable(file) {
    if (window.createImageBitmap) {
      /* from-image: respeta el EXIF de las fotos de teléfono (verticales) */
      return createImageBitmap(file, { imageOrientation: 'from-image' }).catch(function () { return viaImg(file); });
    }
    return viaImg(file);
  }
  function shrink(file) {
    return toDrawable(file).then(function (src) {
      var w0 = src.width || src.naturalWidth, h0 = src.height || src.naturalHeight;
      if (!w0 || !h0) throw new Error('imagen vacía');
      var k = Math.min(1, MAX_EDGE / Math.max(w0, h0));
      var w = Math.max(1, Math.round(w0 * k)), h = Math.max(1, Math.round(h0 * k));
      var cv = document.createElement('canvas');
      cv.width = w; cv.height = h;
      cv.getContext('2d').drawImage(src, 0, 0, w, h);
      if (src.close) src.close();
      return cv.toDataURL('image/jpeg', QUALITY);
    });
  }

  /* ---------- badge de sync honesto (propio: este pipe no es el de engage) ---------- */
  var badge = null, badgeTimer = null;
  function ensureBadge() {
    if (badge || !document.body) return;
    badge = document.createElement('div');
    badge.setAttribute('style',
      'position:fixed;left:.5rem;bottom:.5rem;z-index:9999;font:italic .72rem Georgia,serif;' +
      'padding:.2rem .55rem;border-radius:9px;background:rgba(42,31,18,.85);color:#f1e8d4;' +
      'pointer-events:none;transition:opacity .4s;opacity:0;');
    document.body.appendChild(badge);
  }
  function setBadge(text, sticky) {
    ensureBadge(); if (!badge) return;
    clearTimeout(badgeTimer);
    badge.textContent = text;
    badge.style.opacity = text ? '1' : '0';
    if (!sticky && text) badgeTimer = setTimeout(function () { badge.style.opacity = '0'; }, 4000);
  }
  function refreshBadge(state) {
    var n = outbox().length;
    if (state === 'error') setBadge('⚠️ No se pudo guardar (' + n + ' pendientes — reintenta solo)', true);
    else if (state === 'mem') setBadge('⚠️ Almacenamiento lleno: ' + n + ' en memoria — no cierres aún', true);
    else if (n > 0) setBadge('⏳ Sincronizando ' + n + '…', true);
    else setBadge('✓ Sincronizado');
  }

  /* ---------- outbox ---------- */
  var memBox = [];                               // respaldo si localStorage falla (cuota)
  function outbox() { return readLS(K.outbox, []).concat(memBox); }
  function saveOutbox(list) {
    if (writeLS(K.outbox, list)) { memBox = []; return true; }
    var ls = readLS(K.outbox, []), seen = {};
    ls.forEach(function (e) { seen[e.id] = 1; });
    memBox = list.filter(function (e) { return !seen[e.id]; });
    return false;
  }
  function applied() { return readLS(K.applied, []); }
  function markApplied(evs) {
    var all = applied().concat(evs);
    if (all.length > APPLIED_MAX) all = all.slice(all.length - APPLIED_MAX);
    writeLS(K.applied, all);
  }
  function record(kind, book, fields) {
    var ev = { id: uid(), kind: kind, book: book, ts: now(), device: device() };
    for (var k in fields) if (fields[k] !== undefined) ev[k] = fields[k];
    var box = outbox(); box.push(ev);
    var saved = saveOutbox(box);                 // sincrónico, ANTES de red
    refreshBadge(saved ? undefined : 'mem');
    notify();
    flushSoon();
    return ev;
  }

  /* ---------- backend GitHub (PAT solo en localStorage) ---------- */
  function ghHeaders() {
    var t = localStorage.getItem(K.pat);
    if (!t) return null;
    return { Authorization: 'Bearer ' + t, Accept: 'application/vnd.github+json' };
  }
  function b64encodeUtf8(s) { return btoa(unescape(encodeURIComponent(s))); }
  function b64decodeUtf8(s) { return decodeURIComponent(escape(atob(s.replace(/\n/g, '')))); }

  /* archivo binario NUEVO: sin sha; 422 en reintento = ya estaba subido = éxito */
  function ghPutFile(path, b64, message) {
    var api = 'https://api.github.com/repos/' + REPO + '/contents/' + path;
    return fetch(api, {
      method: 'PUT',
      headers: Object.assign({ 'Content-Type': 'application/json' }, ghHeaders()),
      body: JSON.stringify({ message: message, branch: BRANCH, content: b64 }),
    }).then(function (r) {
      if (r.status === 422) return 'ya-existe';
      if (!r.ok) throw new Error('PUT ' + path + ': HTTP ' + r.status);
      return 'ok';
    });
  }
  function ghGetJson(path) {
    var api = 'https://api.github.com/repos/' + REPO + '/contents/' + path
      + '?ref=' + BRANCH + '&_=' + Date.now();
    return fetch(api, { cache: 'no-store', headers: ghHeaders() }).then(function (r) {
      if (r.status === 404) return { obj: null, sha: null };
      if (!r.ok) throw new Error('GET ' + path + ': HTTP ' + r.status);
      return r.json().then(function (doc) {
        return { obj: JSON.parse(b64decodeUtf8(doc.content)), sha: doc.sha };
      });
    });
  }
  function ghPutJson(path, obj, message, sha) {
    var body = { message: message, branch: BRANCH,
                 content: b64encodeUtf8(JSON.stringify(obj, null, 2) + '\n') };
    if (sha) body.sha = sha;
    return fetch('https://api.github.com/repos/' + REPO + '/contents/' + path, {
      method: 'PUT',
      headers: Object.assign({ 'Content-Type': 'application/json' }, ghHeaders()),
      body: JSON.stringify(body),
    }).then(function (r) { if (!r.ok) throw new Error('PUT ' + path + ': HTTP ' + r.status); });
  }
  /* read-modify-write con un reintento si otro actor tocó el archivo (409/422) */
  function ghUpdateJson(path, mutate, message, attempt) {
    attempt = attempt || 0;
    return ghGetJson(path).then(function (cur) {
      return ghPutJson(path, mutate(cur.obj), message, cur.sha).catch(function (e) {
        if (attempt < 1 && /409|422/.test(e.message)) return ghUpdateJson(path, mutate, message, attempt + 1);
        throw e;
      });
    });
  }

  /* pliegue idempotente del lote de eventos sobre data/labeling.json */
  function fold(evs) {
    return function (doc) {
      doc = doc || {};
      doc._comment = doc._comment || 'Tareas de fichado (concepts/labeling.html). Escriben: el browser con PAT (concepts/labeling.js) y el agente /labeling al ingerir el relay. /engagement y /recomendacion no tocan este archivo ni data/labeling/.';
      doc._ingest = doc._ingest || { supabase_last_created_at: null };
      doc.tasks = doc.tasks || {};
      evs.forEach(function (ev) {
        var t = doc.tasks[ev.book] || (doc.tasks[ev.book] = {});
        if (ev.kind === 'estado') {
          if (!t.status_ts || ev.ts > t.status_ts) {
            t.status = ev.value; t.status_ts = ev.ts; t.status_device = ev.device;
          }
        } else if (ev.kind === 'nota') {
          t.notas = t.notas || [];
          if (!t.notas.some(function (n) { return n.id === ev.id; }))
            t.notas.push({ id: ev.id, texto: ev.texto, ts: ev.ts, device: ev.device });
        } else if (ev.kind === 'foto') {
          t.fotos = t.fotos || [];
          var repoPath = FOTOS_PREFIX + ev.path;
          if (!t.fotos.some(function (f) { return f.path === repoPath; }))
            t.fotos.push({ path: repoPath, ts: ev.ts, device: ev.device, via: 'github' });
        }
      });
      doc._updated_at = now();
      doc.device_last = device();
      return doc;
    };
  }

  /* ---------- backend Supabase (sin PAT: relay público, insert-only) ---------- */
  function b64toBlob(b64) {
    var s = atob(b64), u = new Uint8Array(s.length);
    for (var i = 0; i < s.length; i++) u[i] = s.charCodeAt(i);
    return new Blob([u], { type: 'image/jpeg' });
  }
  function supaUpload(path, b64) {
    return fetch(SUPA + '/storage/v1/object/' + BUCKET + '/' + path, {
      method: 'POST',
      headers: { apikey: SUPA_KEY, Authorization: 'Bearer ' + SUPA_KEY,
                 'Content-Type': 'image/jpeg', 'x-upsert': 'false' },
      body: b64toBlob(b64),
    }).then(function (r) {
      if (r.status === 409) return 'ya-existe';      // reintento de una subida que sí llegó
      if (!r.ok) throw new Error('storage ' + path + ': HTTP ' + r.status);
      return 'ok';
    });
  }
  function supaRows(evs) {
    return fetch(SUPA + '/rest/v1/biblioteca_labeling', {
      method: 'POST',
      headers: { apikey: SUPA_KEY, Authorization: 'Bearer ' + SUPA_KEY,
                 'Content-Type': 'application/json',
                 Prefer: 'resolution=ignore-duplicates,return=minimal' },
      body: JSON.stringify(evs.map(function (e) {
        return { id: e.id, book_id: e.book, kind: e.kind, payload: e };
      })),
    }).then(function (r) {
      if (!r.ok && r.status !== 409) throw new Error('rest: HTTP ' + r.status);
    });
  }

  /* ---------- flush (single-flight; fotos primero, después los eventos) ---------- */
  var flushing = false, flushAgain = false, flushTimer = null;
  function flushSoon() { clearTimeout(flushTimer); flushTimer = setTimeout(flush, 400); }

  function fotoBytes(ev) {
    return idbGet(ST_OUT, 'foto:' + ev.id).then(function (rec) { return rec && rec.b64; });
  }
  function releaseFoto(ev, b64) {
    /* el blob pasa del outbox al revelado local; la vista no parpadea */
    return cachePhoto(FOTOS_PREFIX + ev.path, b64).then(function () {
      return idbDel(ST_OUT, 'foto:' + ev.id);
    }).catch(function () {});
  }
  function uploadFotos(evs, put) {
    /* secuencial a propósito: JPEGs grandes en paralelo ahogan el uplink móvil */
    var fotos = evs.filter(function (e) { return e.kind === 'foto'; });
    var chain = Promise.resolve(), perdidas = [];
    fotos.forEach(function (ev) {
      chain = chain.then(function () {
        return fotoBytes(ev).then(function (b64) {
          if (!b64) { perdidas.push(ev.id); return; }   // IDB perdió el blob: no bloquear el resto
          return put(ev, b64).then(function () { return releaseFoto(ev, b64); });
        });
      });
    });
    return chain.then(function () { return perdidas; });
  }

  function flush() {
    if (flushing) { flushAgain = true; return; }
    var box = outbox();
    if (!box.length) { refreshBadge(); return; }
    flushing = true;
    refreshBadge();
    var withPat = !!ghHeaders();

    var work = withPat
      ? uploadFotos(box, function (ev, b64) {
          return ghPutFile(FOTOS_PREFIX + ev.path, b64, 'labeling: foto ' + ev.book);
        }).then(function (perdidas) {
          var evs = box.filter(function (e) { return perdidas.indexOf(e.id) < 0; });
          if (!evs.length) return perdidas;
          return ghUpdateJson(DATA_PATH, fold(evs), 'labeling: ' + evs.length + ' cambio(s)')
            .then(function () { return perdidas; });
        })
      : uploadFotos(box, function (ev, b64) {
          return supaUpload(ev.path, b64);
        }).then(function (perdidas) {
          var evs = box.filter(function (e) { return perdidas.indexOf(e.id) < 0; });
          if (!evs.length) return perdidas;
          return supaRows(evs).then(function () { return perdidas; });
        });

    work.then(function (perdidas) {
      var done = {};
      box.forEach(function (e) { done[e.id] = 1; });
      markApplied(box.filter(function (e) { return perdidas.indexOf(e.id) < 0; }));
      saveOutbox(outbox().filter(function (e) { return !done[e.id]; }));
      flushing = false;
      refreshBadge();
      notify();
      if (flushAgain || outbox().length) { flushAgain = false; flushSoon(); }
    }).catch(function () {
      flushing = false; flushAgain = false;
      refreshBadge('error');
      setTimeout(flush, 30000);
    });
  }

  /* ---------- catálogo + estado derivado ---------- */
  var CAT = null, PHOTOS = {}, LAB = { tasks: {} }, CACHE = {};
  var BOOKS = [], BY_ID = {}, SHELVES = [];

  function loadAll() {
    return fetch('../index.html').then(function (res) {
      if (!res.ok) throw new Error('No pude leer index.html');
      return res.text();
    }).then(function (html) {
      CAT = JSON.parse(html.match(/<script id="inline-catalog"[^>]*>([\s\S]*?)<\/script>/)[1]);
      var pm = html.match(/<script id="inline-photos">window\.PHOTOS\s*=\s*([\s\S]*?)<\/script>/);
      if (pm) { try { PHOTOS = JSON.parse(pm[1].trim().replace(/;\s*$/, '')); } catch (e) {} }
      return fetch('../' + DATA_PATH + '?_=' + Date.now(), { cache: 'no-store' })
        .then(function (r) { return r.ok ? r.json() : null; })
        .catch(function () { return null; });
    }).then(function (lab) {
      if (lab && lab.tasks) LAB = lab;
      CAT.shelves.forEach(function (s) {
        SHELVES.push(s);
        s.books.forEach(function (b, i) {
          b._shelf = s.id; b._idx = i; b._n = s.books.length;
          BOOKS.push(b); BY_ID[b.id] = b;
        });
      });
      return idbEntries(ST_CACHE).then(function (all) {
        all.forEach(function (e) { CACHE[e.key] = e.value.b64; });
      }).catch(function () {});
    });
  }

  /* módulos del feed: primero lo que pide identificación, después el resto
     (todo libro sin foto de su cara es una tarea) */
  var ORDEN = { unknown: 0, low: 1, medium: 2, high: 3 };
  function rango(b) { return ORDEN.hasOwnProperty(b.confidence) ? ORDEN[b.confidence] : 3; }
  function feed() {
    var idx = {};
    BOOKS.forEach(function (b, i) { idx[b.id] = i; });
    return BOOKS.slice().sort(function (a, b) {
      var d = rango(a) - rango(b);
      return d !== 0 ? d : (idx[a.id] - idx[b.id]);
    });
  }

  function localEvents(id) {
    return outbox().concat(applied()).filter(function (e) { return e.book === id; });
  }
  function estado(id) {
    var last = null;
    localEvents(id).forEach(function (e) {
      if (e.kind === 'estado' && (!last || e.ts > last.ts)) last = e;
    });
    if (last) return last.value;                  // 1) acción local, sincronizada o no
    var t = LAB.tasks[id];
    if (t && t.status) return t.status;           // 2) data/labeling.json del repo
    return 'pendiente';                           // 3) default derivado
  }
  function fotosDe(id) {
    var t = LAB.tasks[id], out = [], seen = {};
    (t && t.fotos || []).forEach(function (f) { seen[f.path] = 1; out.push(f); });
    localEvents(id).forEach(function (e) {
      if (e.kind !== 'foto') return;
      var p = FOTOS_PREFIX + e.path;
      if (!seen[p]) { seen[p] = 1; out.push({ path: p, ts: e.ts, device: e.device, via: 'local' }); }
    });
    return out;
  }
  function notasDe(id) {
    var t = LAB.tasks[id], out = [], seen = {};
    (t && t.notas || []).forEach(function (n) { seen[n.id] = 1; out.push(n); });
    localEvents(id).forEach(function (e) {
      if (e.kind === 'nota' && !seen[e.id]) { seen[e.id] = 1; out.push({ id: e.id, texto: e.texto, ts: e.ts, device: e.device }); }
    });
    return out;
  }
  function fotoSrc(f) {
    if (CACHE[f.path]) return 'data:image/jpeg;base64,' + CACHE[f.path];
    if (f.origen) return f.origen;                // ingerida del relay: URL pública
    if (f.via === 'local') return null;           // pendiente y sin cache: placeholder
    return '../' + f.path;                        // ya commiteada: la sirve Pages
  }
  function pendientesDe(id) {
    return outbox().filter(function (e) { return e.book === id; }).length;
  }

  /* ---------- acciones ---------- */
  function addFoto(id, file) {
    return shrink(file).then(function (dataURL) {
      var b64 = dataURL.slice(dataURL.indexOf(',') + 1);
      var fid = uid();
      var path = 'fotos/' + id + '-' + fid + '.jpg';
      /* bytes a IDB ANTES del evento: si algo corta, el evento sin blob se descarta solo */
      return idbPut(ST_OUT, 'foto:' + fid, { b64: b64, book: id, path: path }).then(function () {
        return cachePhoto(FOTOS_PREFIX + path, b64);
      }).then(function () {
        var box = outbox(); // el id del evento ES el id del archivo (dedup end-to-end)
        var ev = { id: fid, kind: 'foto', book: id, ts: now(), device: device(), path: path };
        box.push(ev);
        refreshBadge(saveOutbox(box) ? undefined : 'mem');
        notify();
        flushSoon();
        return ev;
      });
    });
  }
  function addNota(id, texto) {
    texto = (texto || '').trim();
    if (!texto) return null;
    return record('nota', id, { texto: texto.slice(0, 1200) });
  }
  function setEstado(id, value) {
    return record('estado', id, { value: value === 'hecho' ? 'hecho' : 'pendiente' });
  }

  /* ---------- cambios → la página re-pinta lo suyo ---------- */
  var listeners = [];
  function notify() { listeners.forEach(function (fn) { try { fn(); } catch (e) {} }); }

  /* ---------- ciclo de vida ---------- */
  window.addEventListener('focus', flushSoon);
  window.addEventListener('online', flushSoon);
  document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === 'visible') flushSoon();
  });

  window.Labeling = {
    init: function () { return loadAll().then(function () { flushSoon(); }); },
    feed: feed,
    byId: function (id) { return BY_ID[id]; },
    shelves: function () { return SHELVES; },
    photos: function () { return PHOTOS; },
    estado: estado,
    fotosDe: fotosDe,
    notasDe: notasDe,
    fotoSrc: fotoSrc,
    pendientesDe: pendientesDe,
    addFoto: addFoto,
    addNota: addNota,
    setEstado: setEstado,
    hasPat: function () { return !!localStorage.getItem(K.pat); },
    onChange: function (fn) { listeners.push(fn); },
    flushNow: flushSoon,
  };
})();
