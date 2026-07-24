/* Polaroids — fotos propias pinchadas a la ficha del libro.
   Cada ficha guarda su propio mazo: se eligen del carrete o se sacan en el
   momento (accept="image/*"), se achican a MAX_EDGE px y se guardan en el
   IndexedDB de este dispositivo (localStorage si IndexedDB no abre). No hay
   servidor detrás: como los sellos, las fotos no viajan a otro teléfono.
   Uso: Polaroids.mount(book, containerElement)
   El host estiliza las clases .pola-* / .pin / .lb-* ; este módulo solo pone
   estructura y guarda los datos. */
(function () {
  'use strict';

  const DB_NAME = 'bibliotequeando-fotos', STORE = 'fichas', DB_VER = 1;
  const LS_KEY = 'fichero-fotos-v1';
  const MAX_EDGE = 1400, QUALITY = 0.82, MAX_FOTOS = 12;
  const PINS = ['#b3372e', '#c9a227', '#2b4a8a', '#2e6b45'];

  const esc = s => String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  function hsh(s) { let h = 5381; for (let i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) | 0; return Math.abs(h); }
  const fecha = ts => { try { return new Date(ts).toLocaleDateString('es-UY', { day: '2-digit', month: 'long', year: 'numeric' }); } catch (e) { return ''; } };

  /* ================= depósito ================= */
  let dbp = null, backend = null;
  function openDB() {
    if (dbp) return dbp;
    dbp = new Promise((res, rej) => {
      let rq;
      try { rq = indexedDB.open(DB_NAME, DB_VER); } catch (e) { return rej(e); }
      rq.onupgradeneeded = () => {
        const d = rq.result;
        if (!d.objectStoreNames.contains(STORE)) d.createObjectStore(STORE);
      };
      rq.onsuccess = () => res(rq.result);
      rq.onerror = () => rej(rq.error || new Error('IndexedDB'));
      rq.onblocked = () => rej(new Error('IndexedDB bloqueado'));
    });
    dbp.catch(() => { dbp = null; });
    return dbp;
  }
  function idbGet(k) {
    return openDB().then(d => new Promise((res, rej) => {
      const r = d.transaction(STORE, 'readonly').objectStore(STORE).get(k);
      r.onsuccess = () => res(r.result || []);
      r.onerror = () => rej(r.error);
    }));
  }
  function idbPut(k, v) {
    return openDB().then(d => new Promise((res, rej) => {
      const t = d.transaction(STORE, 'readwrite');
      t.objectStore(STORE).put(v, k);
      t.oncomplete = () => res();
      t.onerror = t.onabort = () => rej(t.error || new Error('no se pudo guardar'));
    }));
  }
  const lsAll = () => { try { return JSON.parse(localStorage.getItem(LS_KEY) || '{}'); } catch (e) { return {}; } };

  /* Un solo depósito por sesión: si se eligiera IndexedDB para leer y
     localStorage para escribir, las fotos nuevas quedarían invisibles. */
  async function pickBackend() {
    if (backend) return backend;
    try { await openDB(); backend = 'idb'; } catch (e) { backend = 'ls'; }
    return backend;
  }
  async function getFotos(id) {
    if (await pickBackend() === 'idb') {
      try { return await idbGet(id); } catch (e) { return []; }
    }
    return lsAll()[id] || [];
  }
  async function setFotos(id, list) {
    if (await pickBackend() === 'idb') { await idbPut(id, list); return; }
    const all = lsAll();
    if (list.length) all[id] = list; else delete all[id];
    localStorage.setItem(LS_KEY, JSON.stringify(all));   /* si no entra, tira QuotaExceededError */
  }

  /* ================= revelado ================= */
  function viaImg(file) {
    return new Promise((res, rej) => {
      const url = URL.createObjectURL(file), im = new Image();
      im.onload = () => { URL.revokeObjectURL(url); res(im); };
      im.onerror = () => { URL.revokeObjectURL(url); rej(new Error('no pude leer la imagen')); };
      im.src = url;
    });
  }
  function toDrawable(file) {
    if (window.createImageBitmap) {
      /* from-image: respeta el EXIF de las fotos de teléfono (verticales) */
      return createImageBitmap(file, { imageOrientation: 'from-image' }).catch(() => viaImg(file));
    }
    return viaImg(file);
  }
  async function shrink(file) {
    const src = await toDrawable(file);
    const w0 = src.width || src.naturalWidth, h0 = src.height || src.naturalHeight;
    if (!w0 || !h0) throw new Error('imagen vacía');
    const k = Math.min(1, MAX_EDGE / Math.max(w0, h0));
    const w = Math.max(1, Math.round(w0 * k)), h = Math.max(1, Math.round(h0 * k));
    const cv = document.createElement('canvas');
    cv.width = w; cv.height = h;
    cv.getContext('2d').drawImage(src, 0, 0, w, h);
    if (src.close) src.close();
    return cv.toDataURL('image/jpeg', QUALITY);
  }

  /* ================= estructura ================= */
  const CAMARA = '<svg class="pola-cam" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true">'
    + '<path d="M3 8.5h3.2l1.4-2h7.8l1.4 2H20a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1z"/>'
    + '<circle cx="11.5" cy="13.5" r="3.4"/></svg>';

  function polaHTML(p) {
    const pin = PINS[hsh(p.id) % PINS.length];
    return '<figure class="pola" data-pid="' + esc(p.id) + '" tabindex="0" role="button"'
      + ' aria-label="Ampliar la foto' + (p.caption ? ': ' + esc(p.caption) : '') + '"'
      + ' style="--rot:' + p.rot + 'deg;--pin:' + pin + '">'
      + '<span class="pin" aria-hidden="true"></span>'
      + '<button type="button" class="pola-x" data-act="del" aria-label="Despinchar esta foto" title="Despinchar">&times;</button>'
      + '<img src="' + p.src + '" alt="' + (p.caption ? esc(p.caption) : 'Foto pinchada a la ficha') + '" loading="lazy">'
      + '<figcaption class="pola-cap">' + esc(p.caption || '') + '</figcaption>'
      + '</figure>';
  }
  function addHTML(n) {
    if (n >= MAX_FOTOS) return '<p class="pola-msg">Ficha completa: ' + MAX_FOTOS + ' fotos pinchadas.</p>';
    return '<button type="button" class="pola-add" data-act="add">' + CAMARA
      + '<span>' + (n ? 'Pinchar otra' : 'Pinchar una foto') + '</span></button>';
  }

  /* ================= visor (la foto en grande) ================= */
  let lbEl = null, lbEsc = null;
  function closeLB() {
    if (!lbEl) return;
    lbEl.remove(); lbEl = null;
    if (lbEsc) { document.removeEventListener('keydown', lbEsc); lbEsc = null; }
  }
  function openLB(p, onCaption, onDelete) {
    closeLB();
    lbEl = document.createElement('div');
    lbEl.className = 'lb';
    lbEl.innerHTML = '<div class="lb-inner" role="dialog" aria-modal="true" aria-label="Foto de la ficha">'
      + '<img src="' + p.src + '" alt="' + (p.caption ? esc(p.caption) : 'Foto pinchada a la ficha') + '">'
      + '<input class="lb-cap" type="text" maxlength="120" placeholder="Escribir al dorso…" value="' + esc(p.caption || '') + '">'
      + '<div class="lb-bar"><span class="lb-date">Pinchada el ' + esc(fecha(p.ts)) + '</span>'
      + '<span class="lb-acts"><button type="button" class="lb-btn" data-act="del">Despinchar</button>'
      + '<button type="button" class="lb-btn" data-act="close">Cerrar</button></span></div></div>';
    document.body.appendChild(lbEl);

    const cap = lbEl.querySelector('.lb-cap');
    const guardar = () => { const v = cap.value.trim(); if (v !== (p.caption || '')) onCaption(v); };
    cap.addEventListener('change', guardar);
    cap.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); guardar(); cap.blur(); } });
    lbEl.addEventListener('click', e => {
      const b = e.target.closest('[data-act]');
      if (!b) { if (e.target === lbEl) { guardar(); closeLB(); } return; }
      if (b.dataset.act === 'close') { guardar(); closeLB(); }
      if (b.dataset.act === 'del') onDelete();
    });
    lbEsc = e => { if (e.key === 'Escape') { guardar(); closeLB(); } };
    document.addEventListener('keydown', lbEsc);
  }

  /* ================= montaje ================= */
  function mount(book, el) {
    if (!el || !book) return;
    closeLB();
    const id = book.id;
    el.innerHTML = '<div class="fotos-tit" data-role="tit">Fotos de la ficha</div>'
      + '<div class="pola-board" data-role="board"><p class="pola-msg">abriendo el sobre…</p></div>'
      + '<p class="fotos-foot" data-role="foot">Del carrete o sacadas ahora. Quedan en este dispositivo.</p>'
      + '<input type="file" accept="image/*" multiple hidden data-role="file">';

    const board = el.querySelector('[data-role="board"]');
    const tit = el.querySelector('[data-role="tit"]');
    const foot = el.querySelector('[data-role="foot"]');
    const file = el.querySelector('[data-role="file"]');
    let list = [], aviso = '';

    const paint = () => {
      tit.textContent = list.length ? 'Fotos de la ficha · ' + list.length : 'Fotos de la ficha';
      board.innerHTML = list.map(polaHTML).join('') + addHTML(list.length)
        + (aviso ? '<p class="pola-msg pola-err">' + esc(aviso) + '</p>' : '');
      el.classList.toggle('has-fotos', list.length > 0);
    };
    const guardar = async () => {
      try { await setFotos(id, list); return true; } catch (e) {
        aviso = /quota|space/i.test(e && e.name || '') || /quota/i.test(e && e.message || '')
          ? 'No entran más fotos: el álbum de este dispositivo está lleno.'
          : 'No pude guardar la foto en este dispositivo.';
        return false;
      }
    };

    getFotos(id).then(f => { list = Array.isArray(f) ? f : []; paint(); });

    el.addEventListener('click', e => {
      const act = e.target.closest('[data-act]');
      if (act && act.dataset.act === 'add') { aviso = ''; file.click(); return; }
      if (act && act.dataset.act === 'del') {
        e.stopPropagation();
        const pid = act.closest('.pola').dataset.pid;
        borrar(pid);
        return;
      }
      const pola = e.target.closest('.pola');
      if (pola) abrir(pola.dataset.pid);
    });
    el.addEventListener('keydown', e => {
      const pola = e.target.closest('.pola');
      if (pola && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); abrir(pola.dataset.pid); }
    });

    function abrir(pid) {
      const p = list.find(x => x.id === pid);
      if (!p) return;
      openLB(p,
        async cap => { p.caption = cap; await guardar(); paint(); },
        async () => {
          if (!confirm('¿Despinchar esta foto de la ficha? No se puede deshacer.')) return;
          list = list.filter(x => x.id !== pid);
          await guardar(); closeLB(); paint();
        });
    }
    async function borrar(pid) {
      if (!confirm('¿Despinchar esta foto de la ficha? No se puede deshacer.')) return;
      list = list.filter(x => x.id !== pid);
      await guardar(); paint();
    }

    file.addEventListener('change', async () => {
      const files = Array.from(file.files || []).filter(f => /^image\//.test(f.type));
      file.value = '';
      if (!files.length) return;
      const libres = MAX_FOTOS - list.length;
      if (libres <= 0) { aviso = 'La ficha ya tiene ' + MAX_FOTOS + ' fotos.'; paint(); return; }
      const lote = files.slice(0, libres);
      aviso = lote.length < files.length ? 'Entraron ' + lote.length + ' de ' + files.length + ': la ficha admite ' + MAX_FOTOS + '.' : '';
      el.classList.add('revelando');
      foot.textContent = 'Revelando…';
      for (const f of lote) {
        try {
          const src = await shrink(f);
          const pid = 'f' + Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
          list.push({ id: pid, src, caption: '', ts: Date.now(), rot: +((hsh(pid) % 700) / 100 - 3.5).toFixed(2) });
          if (!await guardar()) { list.pop(); break; }
        } catch (err) {
          aviso = 'Una de las fotos no se pudo revelar.';
        }
      }
      el.classList.remove('revelando');
      foot.textContent = 'Del carrete o sacadas ahora. Quedan en este dispositivo.';
      paint();
    });
  }

  window.Polaroids = { mount, get: getFotos };
})();
