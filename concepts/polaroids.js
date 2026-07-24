/* Polaroids — fotos propias pinchadas a la ficha del libro, con dorso escribible.
   Cada ficha guarda su propio mazo: se eligen del carrete o se sacan en el
   momento (accept="image/*"), se achican a MAX_EDGE px y se guardan en el
   IndexedDB de este dispositivo (localStorage si IndexedDB no abre). No hay
   servidor detrás: como los sellos, las fotos no viajan a otro teléfono.
   Al dorso de cada polaroid está la reseña del libro: puntaje propio, texto
   libre, los puntajes de las plataformas de afuera (vía ExtReviews) y un dato.
   Uso: Polaroids.mount(book, containerElement, {fact})
   El host estiliza las clases .pola-* / .pin / .lb-* / .dorso-* ; este módulo
   solo pone estructura y guarda los datos. */
(function () {
  'use strict';

  const DB_NAME = 'bibliotequeando-fotos', STORE = 'fichas', DB_VER = 1;
  const LS_KEY = 'fichero-fotos-v1', LS_REV = 'fichero-resenas-v1';
  const MAX_EDGE = 1400, QUALITY = 0.82, MAX_FOTOS = 12;
  const PINS = ['#b3372e', '#c9a227', '#2b4a8a', '#2e6b45'];
  const STAR_LBL = { 1: 'No era para mí', 2: 'Se deja leer', 3: 'Me gustó', 4: 'Muy bueno', 5: 'De los que quedan' };
  const GUARDA = 'Se guarda solo, en este dispositivo.';

  const esc = s => String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  function hsh(s) { let h = 5381; for (let i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) | 0; return Math.abs(h); }
  const fecha = ts => { try { return new Date(ts).toLocaleDateString('es-UY', { day: '2-digit', month: 'long', year: 'numeric' }); } catch (e) { return ''; } };
  const starRow = n => '★★★★★'.slice(0, n) + '☆☆☆☆☆'.slice(0, 5 - n);

  /* ================= depósito de fotos ================= */
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

  /* ================= reseñas (texto corto: alcanza localStorage) ================= */
  const allRev = () => { try { return JSON.parse(localStorage.getItem(LS_REV) || '{}'); } catch (e) { return {}; } };
  function getRev(id) { const r = allRev()[id] || {}; return { stars: r.stars || 0, text: r.text || '' }; }
  function setRev(id, r) {
    const all = allRev(), text = (r.text || '').trim();
    if (r.stars || text) all[id] = { stars: r.stars || 0, text, ts: Date.now() };
    else delete all[id];
    try { localStorage.setItem(LS_REV, JSON.stringify(all)); } catch (e) {}
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

  /* ================= estructura del mazo ================= */
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

  /* ================= visor: la foto y su dorso ================= */
  let lbEl = null, lbEsc = null, lbSave = null, lbClosed = null;

  function closeLB() {
    if (!lbEl) return;
    if (lbSave) { try { lbSave(); } catch (e) {} lbSave = null; }
    lbEl.remove(); lbEl = null;
    if (lbEsc) { document.removeEventListener('keydown', lbEsc); lbEsc = null; }
    const cb = lbClosed; lbClosed = null;
    if (cb) cb();
  }

  function faceFront(p) {
    return '<img class="lb-foto" src="' + p.src + '" alt="' + (p.caption ? esc(p.caption) : 'Foto pinchada a la ficha') + '">'
      + '<input class="lb-cap" type="text" maxlength="120" placeholder="Un epígrafe para la foto…" value="' + esc(p.caption || '') + '">'
      + '<div class="lb-bar"><span class="lb-date">Pinchada el ' + esc(fecha(p.ts)) + '</span>'
      + '<span class="lb-acts"><button type="button" class="lb-btn" data-act="del">Despinchar</button>'
      + '<button type="button" class="lb-btn" data-act="flip">Dar vuelta ↻</button>'
      + '<button type="button" class="lb-btn" data-act="close">Cerrar</button></span></div>';
  }

  function faceBack(book, fact, hayFoto) {
    const r = getRev(book.id);
    let h = '<div class="dorso">'
      + '<div class="dorso-head"><span class="dorso-cn">DORSO / ' + esc(book.id) + '</span>'
      + '<h4>' + esc(book.title || 'Ficha') + '</h4>'
      + (book.author ? '<div class="dorso-au">' + esc(book.author) + '</div>' : '')
      + '</div>'
      + '<div class="dorso-sec"><div class="dorso-tit">Tu puntaje</div><div class="dorso-stars" role="group" aria-label="Tu puntaje">';
    for (let i = 1; i <= 5; i++) {
      h += '<button type="button" class="star' + (i <= r.stars ? ' on' : '') + '" data-star="' + i + '"'
        + ' aria-pressed="' + (i <= r.stars) + '" aria-label="' + i + ' de 5">★</button>';
    }
    h += '<span class="dorso-lbl">' + (r.stars ? esc(STAR_LBL[r.stars]) : 'Sin puntaje') + '</span></div>'
      + '<div class="dorso-tit" style="margin-top:12px">Tu reseña</div>'
      + '<textarea class="dorso-ta" rows="5" maxlength="2000" placeholder="Lo que te dejó este libro…">' + esc(r.text) + '</textarea>'
      + '<div class="dorso-note" data-role="saved">' + GUARDA + '</div></div>'
      + '<div class="dorso-sec"><div class="dorso-tit">Puntajes de afuera</div><div data-role="xr"></div></div>'
      + (fact ? '<div class="dorso-sec dorso-fact"><div class="dorso-tit">Dato</div><p>' + esc(fact) + '</p></div>' : '')
      + '<div class="lb-bar"><span class="lb-date" data-role="bar">' + (r.stars ? starRow(r.stars) : 'Sin puntaje todavía') + '</span>'
      + '<span class="lb-acts">'
      + (hayFoto ? '<button type="button" class="lb-btn" data-act="flip">Ver la foto ↺</button>' : '')
      + '<button type="button" class="lb-btn" data-act="close">Cerrar</button></span></div></div>';
    return h;
  }

  /* Devuelve la función que persiste lo escrito, para correrla también al cerrar. */
  function wireBack(book) {
    const ta = lbEl.querySelector('.dorso-ta');
    const lbl = lbEl.querySelector('.dorso-lbl');
    const bar = lbEl.querySelector('[data-role="bar"]');
    const nota = lbEl.querySelector('[data-role="saved"]');
    const rev = getRev(book.id);
    let tFlash = 0, tType = 0;
    const flash = () => {
      if (!nota) return;
      nota.textContent = 'Guardado.';
      clearTimeout(tFlash);
      tFlash = setTimeout(() => { nota.textContent = GUARDA; }, 1600);
    };
    const save = () => { if (ta) rev.text = ta.value; setRev(book.id, rev); };

    lbEl.querySelectorAll('[data-star]').forEach(b => b.addEventListener('click', () => {
      const v = +b.dataset.star;
      rev.stars = rev.stars === v ? 0 : v;      /* volver a tocar la misma estrella lo borra */
      lbEl.querySelectorAll('[data-star]').forEach(x => {
        const on = +x.dataset.star <= rev.stars;
        x.classList.toggle('on', on);
        x.setAttribute('aria-pressed', on);
      });
      if (lbl) lbl.textContent = rev.stars ? STAR_LBL[rev.stars] : 'Sin puntaje';
      if (bar) bar.textContent = rev.stars ? starRow(rev.stars) : 'Sin puntaje todavía';
      save(); flash();
    }));
    if (ta) {
      ta.addEventListener('input', () => { clearTimeout(tType); tType = setTimeout(() => { save(); flash(); }, 600); });
      ta.addEventListener('blur', save);
    }

    const xr = lbEl.querySelector('[data-role="xr"]');
    if (xr && window.ExtReviews && book.title) ExtReviews.render(book, xr);
    else if (xr) xr.innerHTML = '<div class="xr"><div class="xr-row"><span class="xr-none">sin puntajes a mano</span></div></div>';
    return save;
  }

  function wireFront(o) {
    const cap = lbEl.querySelector('.lb-cap');
    if (!cap) return null;
    const save = () => {
      const v = cap.value.trim();
      if (v !== (o.photo.caption || '')) o.onCaption(v);
    };
    cap.addEventListener('change', save);
    cap.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); save(); cap.blur(); } });
    return save;
  }

  function openLB(o) {
    closeLB();
    lbEl = document.createElement('div');
    lbEl.className = 'lb';
    lbEl.innerHTML = '<div class="lb-inner" role="dialog" aria-modal="true" aria-label="'
      + (o.photo ? 'Foto de la ficha' : 'Dorso de la ficha') + '"></div>';
    document.body.appendChild(lbEl);
    lbClosed = o.onClose || null;

    const inner = lbEl.querySelector('.lb-inner');
    let cara = o.photo ? 'front' : 'back';

    function draw() {
      if (lbSave) { try { lbSave(); } catch (e) {} lbSave = null; }
      inner.innerHTML = cara === 'front' ? faceFront(o.photo) : faceBack(o.book, o.fact, !!o.photo);
      lbSave = cara === 'front' ? wireFront(o) : wireBack(o.book);
    }
    function flip() {
      cara = cara === 'front' ? 'back' : 'front';
      if (matchMedia('(prefers-reduced-motion: reduce)').matches) { draw(); inner.scrollTop = 0; return; }
      inner.classList.add('flip-out');
      setTimeout(() => {
        draw();
        inner.scrollTop = 0;
        inner.classList.remove('flip-out');
        inner.classList.add('flip-in');                  /* del otro lado, sin transición */
        requestAnimationFrame(() => requestAnimationFrame(() => inner.classList.remove('flip-in')));
      }, 170);
    }
    draw();

    lbEl.addEventListener('click', e => {
      const b = e.target.closest('[data-act]');
      if (!b) { if (e.target === lbEl) closeLB(); return; }
      const a = b.dataset.act;
      if (a === 'close') closeLB();
      else if (a === 'flip') flip();
      else if (a === 'del') o.onDelete();
    });
    lbEsc = e => { if (e.key === 'Escape') closeLB(); };
    document.addEventListener('keydown', lbEsc);
  }

  /* ================= montaje ================= */
  function mount(book, el, opts) {
    if (!el || !book) return;
    closeLB();
    const id = book.id, fact = (opts && opts.fact) || '';
    el.innerHTML = '<div class="fotos-tit" data-role="tit">Fotos de la ficha</div>'
      + '<div class="pola-board" data-role="board"><p class="pola-msg">abriendo el sobre…</p></div>'
      + '<button type="button" class="dorso-link" data-act="dorso"></button>'
      + '<p class="fotos-foot" data-role="foot">Del carrete o sacadas ahora. Quedan en este dispositivo.</p>'
      + '<input type="file" accept="image/*" multiple hidden data-role="file">';

    const board = el.querySelector('[data-role="board"]');
    const tit = el.querySelector('[data-role="tit"]');
    const foot = el.querySelector('[data-role="foot"]');
    const file = el.querySelector('[data-role="file"]');
    const link = el.querySelector('.dorso-link');
    let list = [], aviso = '';

    const paintLink = () => {
      const r = getRev(id);
      link.innerHTML = r.stars
        ? 'Al dorso · <span class="dl-stars">' + starRow(r.stars) + '</span>'
        : (r.text ? 'Al dorso · reseña escrita' : 'Escribir al dorso');
    };
    const paint = () => {
      tit.textContent = list.length ? 'Fotos de la ficha · ' + list.length : 'Fotos de la ficha';
      board.innerHTML = list.map(polaHTML).join('') + addHTML(list.length)
        + (aviso ? '<p class="pola-msg pola-err">' + esc(aviso) + '</p>' : '');
      el.classList.toggle('has-fotos', list.length > 0);
    };
    const guardar = async () => {
      try { await setFotos(id, list); return true; } catch (e) {
        aviso = /quota|space/i.test((e && e.name) || '') || /quota/i.test((e && e.message) || '')
          ? 'No entran más fotos: el álbum de este dispositivo está lleno.'
          : 'No pude guardar la foto en este dispositivo.';
        return false;
      }
    };

    paintLink();
    getFotos(id).then(f => { list = Array.isArray(f) ? f : []; paint(); });

    el.addEventListener('click', e => {
      const act = e.target.closest('[data-act]');
      if (act && act.dataset.act === 'add') { aviso = ''; file.click(); return; }
      if (act && act.dataset.act === 'dorso') { verDorso(null); return; }
      if (act && act.dataset.act === 'del') {
        e.stopPropagation();
        borrar(act.closest('.pola').dataset.pid);
        return;
      }
      const pola = e.target.closest('.pola');
      if (pola) verDorso(pola.dataset.pid);
    });
    el.addEventListener('keydown', e => {
      const pola = e.target.closest('.pola');
      if (pola && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); verDorso(pola.dataset.pid); }
    });

    function verDorso(pid) {
      const p = pid ? list.find(x => x.id === pid) : null;
      if (pid && !p) return;
      openLB({
        book, photo: p, fact,
        onCaption: async cap => { p.caption = cap; await guardar(); paint(); },
        onDelete: async () => {
          if (!confirm('¿Despinchar esta foto de la ficha? No se puede deshacer.')) return;
          list = list.filter(x => x.id !== p.id);
          await guardar(); closeLB(); paint();
        },
        onClose: paintLink
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
      aviso = lote.length < files.length
        ? 'Entraron ' + lote.length + ' de ' + files.length + ': la ficha admite ' + MAX_FOTOS + '.' : '';
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

  window.Polaroids = { mount, get: getFotos, review: getRev };
})();
