/* ============================================================================
   La Sala de Lectura — el catálogo de la casa como mueble en tres dimensiones.

   Qué hace, en orden:
     1. lee data/catalog.json (derivado del catálogo canónico de index.html);
     2. dibuja cada lomo en un único atlas de textura y arma TODOS los libros
        del mueble en una sola geometría — un draw call para 437 libros, que es
        lo que lo hace andar igual en un teléfono que en un proyector;
     3. al elegir un estante, esos libros salen a la mesa con su tapa real
        (Open Library) o con una tapa compuesta a partir de la ficha;
     4. el recorrido mueve la cámara por los estantes que cuentan la casa.

   No escribe nada: ni catálogo, ni localStorage, ni red salvo sus propias tapas.
   Inspirado en reading-room (MIT) de Travis Fischer.
   ========================================================================== */

import * as THREE from './vendor/three.module.min.js'

const $ = (sel) => document.querySelector(sel)
const clamp = (v, a, b) => Math.max(a, Math.min(b, v))
const lerp = (a, b, t) => a + (b - a) * t
const easeInOut = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2)
const isCoarse = matchMedia('(hover: none)').matches || innerWidth < 760

/* hash estable por id: dos visitas ven la misma biblioteca */
function hash(str) {
  let h = 2166136261
  for (let i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619) }
  return (h >>> 0) / 4294967295
}
const rand = (id, salt) => hash(id + '#' + salt)

/* ---------------------------------------------------------------- medidas --
   Todo en metros, para que las proporciones del mueble sean las de un mueble. */
const CASE = {
  cols: 3, rows: 8,
  colW: 1.06,        // ancho útil de cada columna
  pitch: 1.14,       // de centro a centro de columna
  shelfH: 0.335,     // de tabla a tabla
  inner: 0.295,      // alto útil entre tablas
  depth: 0.30,
  board: 0.028,      // espesor de las tablas
  base: 0.10,        // zócalo
}
CASE.height = CASE.base + CASE.rows * CASE.shelfH
CASE.width = CASE.cols * CASE.pitch + 0.08
const COL_X = { L: -CASE.pitch, M: 0, R: CASE.pitch }
/** y del piso del estante `row` (1 = el de arriba) */
const shelfFloorY = (row) => CASE.base + (CASE.rows - row) * CASE.shelfH

const TABLE = { x: 0, y: 0.74, z: 2.5, w: 2.55, d: 1.6, top: 0.055 }

/* ----------------------------------------------------------------- color --
   Las familias salen de lo que dice la ficha: encuadernación, colección,
   estante y tema. Un libro de cuero antiguo no se pinta como un King moderno. */
const FAMILIES = {
  cuero:    ['#7a3b2c', '#5d3a24', '#8a4c2e', '#6b3e40', '#4a5a41', '#7d5e2e'],
  vellum:   ['#e7dcbe', '#ddd0ab', '#efe6cc'],
  kingBlanco: ['#efe9e0', '#e7e1d7', '#f3ece2'],
  kingNegro: ['#2e2926', '#37302b', '#26211e'],
  uruguay:  ['#2d6752', '#3a729c', '#98553d', '#566b40'],
  cosmos:   ['#26355e', '#304982', '#1c2d4f', '#433e7a'],
  arte:     ['#2f6d6d', '#aa6a2d', '#814464', '#3d5c82'],
  misterio: ['#702127', '#2d2d37', '#543e5a', '#19324a'],
  viaje:    ['#ab7e30', '#568153', '#ba7c3f', '#446c7e'],
  animo:    ['#b66a2b', '#cb7d3a', '#915279', '#427a70'],
  consulta: ['#7e2e35', '#40563e', '#534272', '#865420'],
  casa:     ['#7c5439', '#65452d', '#916741', '#564939'],
}
const TOPIC_FAMILY = [
  [/uruguay|montevideo|historia-local|genealog/, 'uruguay'],
  [/astronom|cosmos|ciencia|universo|space/, 'cosmos'],
  [/arte|art|pintura|arquitect|fotograf/, 'arte'],
  [/misterio|mystery|policial|thriller|crimen|king|terror/, 'misterio'],
  [/viaje|travel|geograf|national/, 'viaje'],
  [/autoayuda|filosof|espiritual|psicolog|self/, 'animo'],
  [/diccionario|atlas|referencia|mitolog|enciclo/, 'consulta'],
  [/shakespeare|clasico|classics|poes|teatro|literat/, 'casa'],
]

function familyOf(book, shelf) {
  const b = (book.binding || '').toLowerCase()
  const s = (book.series || '').toLowerCase()
  if (shelf.id === 'R4') return 'kingBlanco'
  if (shelf.id === 'R5') return 'kingNegro'
  if (s.includes('vellum') || b.includes('vellum')) return 'vellum'
  if (b.includes('antique') || b.includes('leather') || b.includes('cuero')) return 'cuero'
  const topics = (book.topics || []).join(' ').toLowerCase() + ' ' + (shelf.theme || '').toLowerCase()
  for (const [re, fam] of TOPIC_FAMILY) if (re.test(topics)) return fam
  return 'casa'
}

const MEZCLA = ['casa', 'cuero', 'consulta', 'viaje', 'misterio', 'uruguay']

function spineColors(book, shelf) {
  let fam = familyOf(book, shelf)
  // ningún estante de verdad es monocromo: uno de cada tres se sale del tono
  if (rand(book.id, 'f') < 0.32 && fam !== 'kingBlanco' && fam !== 'kingNegro' && fam !== 'vellum') {
    fam = MEZCLA[Math.floor(rand(book.id, 'fm') * MEZCLA.length)]
  }
  const pal = FAMILIES[fam]
  const base = pal[Math.floor(rand(book.id, 'c') * pal.length)]
  const c = new THREE.Color(base)
  const hsl = {}; c.getHSL(hsl, THREE.SRGBColorSpace)
  // el mueble se mira con luz cálida y poca: los lomos necesitan cuerpo para no
  // apagarse en negro cuando se los ve desde el otro lado de la sala
  c.setHSL((hsl.h + (rand(book.id, 'hue') - 0.5) * 0.06 + 1) % 1,
    hsl.s * (0.68 + rand(book.id, 's') * 0.3),
    clamp(hsl.l * (0.82 + rand(book.id, 'l') * 0.3), 0.08, 0.92),
    THREE.SRGBColorSpace)
  const light = hsl.l > 0.55
  return {
    fam,
    base: '#' + c.getHexString(),
    ink: light ? '#2a2018' : 'rgba(244,234,208,.93)',
    gold: fam === 'cuero' || fam === 'consulta' || fam === 'casa',
  }
}

/* --------------------------------------------------------------- tamaños --
   Grosor y alto verosímiles: el formato manda, el hash desempata, y después
   cada estante se reescala para que la fila entre en su ancho real. */
function baseThickness(book) {
  const f = ((book.format || '') + ' ' + (book.binding || '')).toLowerCase()
  let t = 0.026 + rand(book.id, 't') * 0.016
  if (/bolsillo|pocket|paperback/.test(f)) t = 0.016 + rand(book.id, 't') * 0.01
  if (/tapa dura|hardcover|leather|antique|vellum/.test(f)) t = 0.032 + rand(book.id, 't') * 0.022
  if ((book.title || '').length > 46) t *= 1.12
  return t
}
function baseHeight(book, shelf) {
  const big = /oversized|gran formato|large-format|atlas|foto|art/.test(
    ((shelf.theme || '') + ' ' + (book.format || '')).toLowerCase())
  const h = big ? 0.25 + rand(book.id, 'h') * 0.045 : 0.185 + rand(book.id, 'h') * 0.06
  return Math.min(h, CASE.inner - 0.012)
}

/* ------------------------------------------------------------------ atlas --
   Un solo canvas con el lomo de cada libro dibujado en su celda, más una celda
   de canto de hojas. Una textura, un material, una llamada de dibujo. */
const ATLAS = { size: 2048, cw: 48, ch: 160 }
ATLAS.cols = Math.floor(ATLAS.size / ATLAS.cw)
ATLAS.rows = Math.floor(ATLAS.size / ATLAS.ch)

function drawSpine(ctx, x, y, w, h, book, look) {
  ctx.save()
  ctx.translate(x, y)
  ctx.fillStyle = look.base
  ctx.fillRect(0, 0, w, h)

  // volumen del lomo: los bordes se van a la sombra, el centro toma la luz
  const g = ctx.createLinearGradient(0, 0, w, 0)
  g.addColorStop(0, 'rgba(0,0,0,.5)'); g.addColorStop(0.18, 'rgba(0,0,0,.14)')
  g.addColorStop(0.5, 'rgba(255,255,255,.05)'); g.addColorStop(0.85, 'rgba(0,0,0,.18)')
  g.addColorStop(1, 'rgba(0,0,0,.55)')
  ctx.fillStyle = g; ctx.fillRect(0, 0, w, h)

  // desgaste arriba y abajo, donde la mano y el estante rozan
  ctx.fillStyle = 'rgba(0,0,0,.18)'; ctx.fillRect(0, 0, w, 3); ctx.fillRect(0, h - 3, w, 3)

  if (look.gold) {                       // filetes dorados de encuadernación
    ctx.strokeStyle = 'rgba(201,162,39,.72)'; ctx.lineWidth = 1
    for (const ty of [h * 0.17, h * 0.21, h * 0.74, h * 0.78]) {
      ctx.beginPath(); ctx.moveTo(3, ty); ctx.lineTo(w - 3, ty); ctx.stroke()
    }
  }
  if (look.fam === 'kingBlanco') {       // la banda roja de la Biblioteca King
    ctx.fillStyle = '#a8271f'; ctx.fillRect(0, h - 22, w, 18)
  }

  // título de abajo hacia arriba, como se lee un lomo parado
  const title = (book.title || '').replace(/\s*\(.*?\)\s*/g, ' ').trim()
  const author = (book.author || '').split(/[,;&]/)[0].trim()
  ctx.translate(w / 2, h - 10)
  ctx.rotate(-Math.PI / 2)
  ctx.fillStyle = look.gold ? 'rgba(228,196,110,.95)' : look.ink
  ctx.textBaseline = 'middle'
  const room = h - 22
  let size = w > 34 ? 13 : 11
  ctx.font = `600 ${size}px Cormorant Garamond, Georgia, serif`
  let t = title
  while (ctx.measureText(t).width > room - (author ? 46 : 8) && t.length > 4) t = t.slice(0, -1)
  if (t !== title) t = t.replace(/[\s,.:;-]+$/, '') + '…'
  ctx.fillText(t, 0, 0)
  if (author) {
    ctx.font = `500 ${size - 3}px Inter, system-ui, sans-serif`
    ctx.fillStyle = look.gold ? 'rgba(228,196,110,.7)' : (look.ink.startsWith('#')
      ? 'rgba(42,32,24,.62)' : 'rgba(244,234,208,.6)')
    let a = author.toUpperCase()
    while (ctx.measureText(a).width > 40 && a.length > 3) a = a.slice(0, -1)
    ctx.fillText(a, room - ctx.measureText(a).width - 4, 0)
  }
  ctx.restore()
}

function drawPages(ctx, x, y, w, h) {           // canto de hojas, para las caras que no son lomo
  ctx.save(); ctx.translate(x, y)
  ctx.fillStyle = '#e3d6b8'; ctx.fillRect(0, 0, w, h)
  ctx.strokeStyle = 'rgba(90,70,45,.22)'; ctx.lineWidth = 1
  for (let i = 2; i < w; i += 3) {
    ctx.beginPath(); ctx.moveTo(i + 0.5, 0); ctx.lineTo(i + 0.5, h); ctx.stroke()
  }
  const g = ctx.createLinearGradient(0, 0, 0, h)
  g.addColorStop(0, 'rgba(0,0,0,.22)'); g.addColorStop(0.5, 'rgba(0,0,0,0)')
  g.addColorStop(1, 'rgba(0,0,0,.28)')
  ctx.fillStyle = g; ctx.fillRect(0, 0, w, h)
  ctx.restore()
}

function buildAtlas(books, looks) {
  const cv = document.createElement('canvas')
  cv.width = cv.height = ATLAS.size
  const ctx = cv.getContext('2d')
  ctx.fillStyle = '#0f0a07'; ctx.fillRect(0, 0, ATLAS.size, ATLAS.size)
  const cells = new Map()
  const uv = (col, row) => ({
    u0: (col * ATLAS.cw + 0.5) / ATLAS.size, v0: 1 - (row * ATLAS.ch + 0.5) / ATLAS.size,
    u1: ((col + 1) * ATLAS.cw - 0.5) / ATLAS.size, v1: 1 - ((row + 1) * ATLAS.ch - 0.5) / ATLAS.size,
  })
  books.forEach((book, i) => {
    const col = i % ATLAS.cols, row = Math.floor(i / ATLAS.cols)
    if (row >= ATLAS.rows) return
    drawSpine(ctx, col * ATLAS.cw, row * ATLAS.ch, ATLAS.cw, ATLAS.ch, book, looks.get(book.id))
    cells.set(book.id, uv(col, row))
  })
  const pagesRow = ATLAS.rows - 1, pagesCol = ATLAS.cols - 1
  drawPages(ctx, pagesCol * ATLAS.cw, pagesRow * ATLAS.ch, ATLAS.cw, ATLAS.ch)
  const tex = new THREE.CanvasTexture(cv)
  tex.colorSpace = THREE.SRGBColorSpace
  tex.anisotropy = 4
  return { tex, cells, pages: uv(pagesCol, pagesRow) }
}

/* ------------------------------------------------------------- geometría --
   Cajas escritas a mano en un solo buffer: cada cara elige su recorte del
   atlas, así 437 libros son una malla y no 437. */
function boxWriter() {
  const pos = [], nor = [], uvs = [], col = [], idx = []
  const v = new THREE.Vector3()
  let tint = null                      // color plano del cuerpo, para la vista lejana
  function quad(m, pts, n, r) {
    const start = pos.length / 3
    for (let i = 0; i < 4; i++) {
      v.set(pts[i][0], pts[i][1], pts[i][2]).applyMatrix4(m)
      pos.push(v.x, v.y, v.z)
      v.set(n[0], n[1], n[2]).transformDirection(m)
      nor.push(v.x, v.y, v.z)
      if (tint) {
        // lomo con luz de un lado: el vértice izquierdo entra en sombra
        const k = i === 0 || i === 3 ? 0.78 : 1
        col.push(tint.r * k, tint.g * k, tint.b * k)
      }
    }
    uvs.push(r.u0, r.v0, r.u1, r.v0, r.u1, r.v1, r.u0, r.v1)
    idx.push(start, start + 2, start + 1, start, start + 3, start + 2)
  }
  return {
    /** faces = {px,nx,py,ny,pz,nz} → recorte uv de cada cara; color = tinte plano */
    box(m, w, h, d, faces, color) {
      tint = color || null
      const x = w / 2, y = h / 2, z = d / 2
      quad(m, [[x, y, z], [x, y, -z], [x, -y, -z], [x, -y, z]], [1, 0, 0], faces.px)
      quad(m, [[-x, y, -z], [-x, y, z], [-x, -y, z], [-x, -y, -z]], [-1, 0, 0], faces.nx)
      quad(m, [[-x, y, -z], [x, y, -z], [x, y, z], [-x, y, z]], [0, 1, 0], faces.py)
      quad(m, [[-x, -y, z], [x, -y, z], [x, -y, -z], [-x, -y, -z]], [0, -1, 0], faces.ny)
      quad(m, [[-x, y, z], [x, y, z], [x, -y, z], [-x, -y, z]], [0, 0, 1], faces.pz)
      quad(m, [[x, y, -z], [-x, y, -z], [-x, -y, -z], [x, -y, -z]], [0, 0, -1], faces.nz)
      tint = null
    },
    geometry() {
      const g = new THREE.BufferGeometry()
      g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3))
      g.setAttribute('normal', new THREE.Float32BufferAttribute(nor, 3))
      g.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2))
      if (col.length === pos.length) g.setAttribute('color', new THREE.Float32BufferAttribute(col, 3))
      g.setIndex(idx)
      g.computeBoundingSphere()
      return g
    },
  }
}

/* --------------------------------------------------------- madera y sala --
   Texturas dibujadas al vuelo: nogal para el mueble y la mesa, pared de yeso. */
function woodTexture(base, veta, repeat) {
  const cv = document.createElement('canvas'); cv.width = 512; cv.height = 512
  const c = cv.getContext('2d')
  c.fillStyle = base; c.fillRect(0, 0, 512, 512)
  for (let i = 0; i < 220; i++) {
    const y = Math.random() * 512
    c.strokeStyle = `rgba(${veta},${0.03 + Math.random() * 0.09})`
    c.lineWidth = 0.5 + Math.random() * 2.6
    c.beginPath(); c.moveTo(0, y)
    c.bezierCurveTo(170, y + (Math.random() - 0.5) * 22, 340, y + (Math.random() - 0.5) * 22, 512, y)
    c.stroke()
  }
  for (let i = 0; i < 9; i++) {         // nudos de la madera
    const x = Math.random() * 512, y = Math.random() * 512, r = 4 + Math.random() * 12
    const g = c.createRadialGradient(x, y, 1, x, y, r)
    g.addColorStop(0, `rgba(${veta},.3)`); g.addColorStop(1, `rgba(${veta},0)`)
    c.fillStyle = g; c.beginPath(); c.arc(x, y, r, 0, 7); c.fill()
  }
  const t = new THREE.CanvasTexture(cv)
  t.colorSpace = THREE.SRGBColorSpace
  t.wrapS = t.wrapT = THREE.RepeatWrapping
  t.repeat.set(repeat[0], repeat[1])
  return t
}

function wallTexture() {
  const cv = document.createElement('canvas'); cv.width = cv.height = 256
  const c = cv.getContext('2d')
  c.fillStyle = '#36241a'; c.fillRect(0, 0, 256, 256)
  for (let x = 0; x < 256; x += 16) {          // empapelado de rayas finas
    c.fillStyle = (x / 16) % 2 ? 'rgba(255,220,180,.035)' : 'rgba(0,0,0,.06)'
    c.fillRect(x, 0, 8, 256)
  }
  const g = c.createRadialGradient(128, 60, 10, 128, 128, 190)
  g.addColorStop(0, 'rgba(255,206,140,.2)'); g.addColorStop(1, 'rgba(0,0,0,.35)')
  c.fillStyle = g; c.fillRect(0, 0, 256, 256)
  const t = new THREE.CanvasTexture(cv)
  t.colorSpace = THREE.SRGBColorSpace
  return t
}

function rugTexture() {
  const cv = document.createElement('canvas'); cv.width = cv.height = 256
  const c = cv.getContext('2d')
  c.fillStyle = '#41201f'; c.fillRect(0, 0, 256, 256)
  c.strokeStyle = 'rgba(200,168,104,.3)'; c.lineWidth = 3
  c.strokeRect(12, 12, 232, 232)
  c.lineWidth = 1.5
  c.strokeRect(24, 24, 208, 208)
  c.strokeStyle = 'rgba(30,60,60,.35)'
  for (let i = 40; i < 216; i += 22) {
    c.beginPath(); c.moveTo(40, i); c.lineTo(216, i); c.stroke()
  }
  const g = c.createRadialGradient(128, 128, 20, 128, 128, 180)
  g.addColorStop(0, 'rgba(255,255,255,.05)'); g.addColorStop(1, 'rgba(0,0,0,.45)')
  c.fillStyle = g; c.fillRect(0, 0, 256, 256)
  const t = new THREE.CanvasTexture(cv)
  t.colorSpace = THREE.SRGBColorSpace
  return t
}

function buildRoom(scene) {
  const wood = new THREE.MeshStandardMaterial({
    map: woodTexture('#4a3020', '60,34,14', [2, 2]), roughness: 0.72, metalness: 0.04,
  })
  const darkWood = new THREE.MeshStandardMaterial({
    map: woodTexture('#33210f', '20,10,4', [2, 2]), roughness: 0.8, metalness: 0.03,
  })

  const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(26, 26),
    new THREE.MeshStandardMaterial({
      map: woodTexture('#3a2718', '30,16,6', [9, 9]), roughness: 0.92,
    }))
  floor.rotation.x = -Math.PI / 2
  scene.add(floor)

  const wall = new THREE.Mesh(
    new THREE.PlaneGeometry(22, 9),
    new THREE.MeshStandardMaterial({ map: wallTexture(), roughness: 1 }))
  wall.position.set(0, 3.2, -CASE.depth - 0.06)
  scene.add(wall)

  // alfombra: da piso a la mesa y corta el vacío de la sala
  const rug = new THREE.Mesh(new THREE.PlaneGeometry(TABLE.w + 0.9, TABLE.d + 0.8),
    new THREE.MeshStandardMaterial({ map: rugTexture(), roughness: 0.98 }))
  rug.rotation.x = -Math.PI / 2
  rug.position.set(TABLE.x, 0.004, TABLE.z)
  scene.add(rug)

  // el mueble: laterales, tablas, zócalo, cornisa y fondo
  const H = CASE.height, D = CASE.depth
  const caseGroup = new THREE.Group()
  const plank = (x, y, z, sx, sy, sz, mat) => {
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(sx, sy, sz), mat || wood)
    mesh.position.set(x, y, z)
    caseGroup.add(mesh)
  }
  for (let i = 0; i <= CASE.cols; i++) {
    plank(-CASE.pitch * 1.5 + i * CASE.pitch, H / 2, -D / 2, 0.05, H, D)
  }
  for (let c = 0; c < CASE.cols; c++) {
    const x = -CASE.pitch + c * CASE.pitch
    for (let r = 1; r <= CASE.rows; r++) {
      plank(x, shelfFloorY(r) - CASE.board / 2, -D / 2, CASE.colW, CASE.board, D)
    }
  }
  plank(0, CASE.base / 2, -D / 2, CASE.width, CASE.base, D)
  plank(0, H + 0.035, -D / 2 - 0.01, CASE.width + 0.06, 0.07, D + 0.05)
  plank(0, H / 2, -D + 0.008, CASE.width, H, 0.016, darkWood)
  scene.add(caseGroup)

  // la mesa donde se despliega el estante elegido
  const table = new THREE.Group()
  const top = new THREE.Mesh(new THREE.BoxGeometry(TABLE.w, TABLE.top, TABLE.d), darkWood)
  top.position.y = TABLE.y
  table.add(top)
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) {
    const leg = new THREE.Mesh(new THREE.BoxGeometry(0.08, TABLE.y, 0.08), darkWood)
    leg.position.set(sx * (TABLE.w / 2 - 0.12), TABLE.y / 2, sz * (TABLE.d / 2 - 0.12))
    table.add(leg)
  }
  table.position.set(TABLE.x, 0, TABLE.z)
  scene.add(table)

  return { table, caseGroup }
}

/* mancha de sombra reutilizable: un degradado, no un mapa de sombras */
let sombraTex = null
function shadowTexture() {
  if (sombraTex) return sombraTex
  const cv = document.createElement('canvas'); cv.width = cv.height = 128
  const c = cv.getContext('2d')
  const g = c.createRadialGradient(64, 64, 6, 64, 64, 62)
  g.addColorStop(0, 'rgba(0,0,0,.62)'); g.addColorStop(0.55, 'rgba(0,0,0,.3)')
  g.addColorStop(1, 'rgba(0,0,0,0)')
  c.fillStyle = g; c.fillRect(0, 0, 128, 128)
  sombraTex = new THREE.CanvasTexture(cv)
  return sombraTex
}

/* ------------------------------------------------------- libros en el mueble --
   Cada estante arma su fila, se reescala para entrar en el ancho real de la
   columna y queda como un grupo propio de la geometría: así un estante puede
   "vaciarse" cuando sus libros salen a la mesa. */
function buildShelves(data, looks, atlas) {
  const w = boxWriter()
  const m = new THREE.Matrix4(), q = new THREE.Quaternion(), s = new THREE.Vector3(1, 1, 1)
  const e = new THREE.Euler()
  const books = []
  const groups = new Map()
  let cursor = 0

  for (const shelf of data.shelves) {
    const start = cursor
    const list = shelf.books || []
    const col = COL_X[shelf.id[0]]
    const row = Number(shelf.id[1])

    if (shelf.id === 'TOP') {                       // la vitrina de arriba del mueble
      let y = CASE.height + 0.07
      list.forEach((book, i) => {
        const look = looks.get(book.id)
        const h = 0.26, d = 0.19, t = 0.055
        e.set(0, (rand(book.id, 'y') - 0.5) * 0.5, Math.PI / 2)
        m.compose(new THREE.Vector3((i - (list.length - 1) / 2) * 0.28, y + t / 2, -CASE.depth / 2),
          q.setFromEuler(e), s)
        w.box(m, t, h, d, faceMap(atlas, book), tintOf(look))
        books.push(bookRecord(book, shelf, t, h, d, m))
        cursor += 12
      })
      if (list.length) groups.set(shelf.id, { start, count: cursor - start })
      continue
    }
    if (!list.length || col === undefined || !row) continue

    const floorY = shelfFloorY(row)
    const dims = list.map((book) => ({
      book,
      t: baseThickness(book),
      h: baseHeight(book, shelf),
      d: 0.13 + rand(book.id, 'd') * 0.05,
    }))
    const usable = CASE.colW - 0.045
    const total = dims.reduce((a, b) => a + b.t, 0)
    const fit = total > usable ? usable / total : 1
    dims.forEach((dim) => { dim.t = Math.max(dim.t * fit, 0.0105) })

    let x = col - CASE.colW / 2 + 0.022
    const slack = usable - dims.reduce((a, b) => a + b.t, 0)
    dims.forEach((dim, i) => {
      const { book, t, h, d } = dim
      const look = looks.get(book.id)
      // el último de una fila floja se recuesta, como en cualquier estante real
      const leans = slack > 0.07 && i === dims.length - 1
      const tilt = leans ? 0.26 : (rand(book.id, 'k') < 0.06 ? 0.035 : 0)
      const z = -0.018 - rand(book.id, 'z') * 0.035 - d / 2
      e.set(0, 0, tilt)
      const cx = x + t / 2 + (leans ? h * 0.12 : 0)
      m.compose(new THREE.Vector3(cx, floorY + h / 2 * Math.cos(tilt) + 0.001, z),
        q.setFromEuler(e), s)
      w.box(m, t, h, d, faceMap(atlas, book), tintOf(look))
      books.push(bookRecord(book, shelf, t, h, d, m))
      cursor += 12
      x += t + (leans ? h * 0.2 : 0)
    })
    groups.set(shelf.id, { start, count: cursor - start })
  }

  const geo = w.geometry()
  for (const [id, g] of groups) {
    geo.addGroup(g.start * 3, g.count * 3, 0)
    g.index = geo.groups.length - 1
  }
  const near = new THREE.MeshStandardMaterial({ map: atlas.tex, roughness: 0.78, metalness: 0.02 })
  const far = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.8, metalness: 0.02 })
  const mesh = new THREE.Mesh(geo, far)
  mesh.name = 'estantes'
  return { mesh, books, groups, near, far }
}

/** color plano del lomo; THREE.Color ya lleva el hex sRGB al espacio de trabajo */
function tintOf(look) {
  return new THREE.Color(look.base)
}

/** el lomo mira al frente; el resto de las caras son canto de hojas */
function faceMap(atlas, book) {
  const spine = atlas.cells.get(book.id) || atlas.pages
  return { px: atlas.pages, nx: atlas.pages, py: atlas.pages, ny: atlas.pages,
    pz: spine, nz: atlas.pages }
}

function bookRecord(book, shelf, t, h, d, m) {
  return {
    book, shelf, w: t, h, d,
    matrix: m.clone(),
    pos: new THREE.Vector3().setFromMatrixPosition(m),
    quat: new THREE.Quaternion().setFromRotationMatrix(m),
  }
}

/* ---------------------------------------------------------------- tapas --
   Cuando un libro sale a la mesa necesita cara: la de Open Library si la
   bajamos, y si no una compuesta con lo que dice su ficha. Nunca un hueco. */
const coverCache = new Map()

function loadCoverImage(book) {
  if (!book.cover) return Promise.resolve(null)
  if (coverCache.has(book.id)) return coverCache.get(book.id)
  const p = new Promise((resolve) => {
    const img = new Image()
    img.onload = () => resolve(img)
    img.onerror = () => resolve(null)
    img.src = 'covers/' + book.cover
  })
  coverCache.set(book.id, p)
  return p
}

const PLANTILLAS = ['marco', 'banda', 'sello', 'moderna']

function drawGeneratedCover(ctx, x, y, w, h, book, look) {
  const plantilla = PLANTILLAS[Math.floor(rand(book.id, 'tpl') * PLANTILLAS.length)]
  const serif = plantilla !== 'moderna'
  ctx.save(); ctx.translate(x, y)
  ctx.fillStyle = look.base; ctx.fillRect(0, 0, w, h)

  // tela, desgaste y el vuelo de luz que da cualquier tapa vieja
  for (let i = 0; i < h; i += 3) {
    ctx.fillStyle = i % 6 ? 'rgba(0,0,0,.05)' : 'rgba(255,255,255,.035)'
    ctx.fillRect(0, i, w, 1.4)
  }
  const vg = ctx.createRadialGradient(w / 2, h * 0.4, w * 0.12, w / 2, h / 2, h * 0.82)
  vg.addColorStop(0, 'rgba(255,255,255,.08)'); vg.addColorStop(1, 'rgba(0,0,0,.42)')
  ctx.fillStyle = vg; ctx.fillRect(0, 0, w, h)

  const claro = !look.ink.startsWith('#')          // ink claro = tapa oscura
  const tinta = claro ? 'rgba(246,238,222,.95)' : look.ink
  const realce = look.gold ? 'rgba(226,196,120,.95)' : tinta
  const filete = look.gold ? 'rgba(212,175,85,.8)'
    : (claro ? 'rgba(244,234,208,.5)' : 'rgba(42,32,24,.45)')

  const title = (book.title || '').replace(/\s*\(.*?\)\s*/g, ' ').trim()
  const author = (book.author || '').split(/[,;&]/)[0].trim()
  ctx.textAlign = 'center'

  const escribir = (texto, cy, size, peso, color, maxAncho) => {
    ctx.font = `${peso} ${size}px ${serif ? 'Cormorant Garamond, Georgia, serif' : 'Inter, system-ui, sans-serif'}`
    ctx.fillStyle = color
    const palabras = texto.split(/\s+/)
    const lineas = []
    let linea = ''
    for (const palabra of palabras) {
      const prueba = linea ? linea + ' ' + palabra : palabra
      if (ctx.measureText(prueba).width > maxAncho && linea) { lineas.push(linea); linea = palabra }
      else linea = prueba
      if (lineas.length === 5) break
    }
    if (linea && lineas.length < 5) lineas.push(linea)
    let ty = cy - (lineas.length - 1) * size * 0.56
    for (const l of lineas) { ctx.fillText(l, w / 2, ty); ty += size * 1.12 }
    return ty
  }

  if (plantilla === 'marco') {
    ctx.strokeStyle = filete; ctx.lineWidth = Math.max(1, w * 0.008)
    ctx.strokeRect(w * 0.07, h * 0.06, w * 0.86, h * 0.88)
    escribir(title, h * 0.3, w * 0.105, 600, realce, w * 0.72)
  } else if (plantilla === 'banda') {
    ctx.fillStyle = claro ? 'rgba(0,0,0,.3)' : 'rgba(255,255,255,.16)'
    ctx.fillRect(0, h * 0.2, w, h * 0.34)
    escribir(title, h * 0.35, w * 0.1, 600, realce, w * 0.8)
  } else if (plantilla === 'sello') {
    ctx.strokeStyle = filete; ctx.lineWidth = Math.max(1, w * 0.006)
    for (const ly of [h * 0.14, h * 0.155]) {
      ctx.beginPath(); ctx.moveTo(w * 0.14, ly); ctx.lineTo(w * 0.86, ly); ctx.stroke()
    }
    escribir(title, h * 0.36, w * 0.108, 700, realce, w * 0.76)
    ctx.beginPath(); ctx.arc(w / 2, h * 0.66, w * 0.055, 0, 7); ctx.stroke()
  } else {
    ctx.fillStyle = claro ? 'rgba(255,255,255,.1)' : 'rgba(0,0,0,.14)'
    ctx.fillRect(w * 0.1, h * 0.1, w * 0.8, h * 0.02)
    escribir(title.toUpperCase(), h * 0.32, w * 0.075, 700, realce, w * 0.74)
  }

  if (author) {
    ctx.font = `500 ${Math.round(w * (serif ? 0.058 : 0.05))}px ${serif ? 'Cormorant Garamond, Georgia, serif' : 'Inter, system-ui, sans-serif'}`
    ctx.fillStyle = realce
    ctx.globalAlpha = 0.85
    ctx.fillText(author.toUpperCase().slice(0, 30), w / 2, h * 0.845)
    ctx.globalAlpha = 1
  }
  if (book.publisher) {
    ctx.font = `500 ${Math.round(w * 0.038)}px Inter, system-ui, sans-serif`
    ctx.fillStyle = tinta
    ctx.globalAlpha = 0.5
    ctx.fillText(book.publisher.slice(0, 28), w / 2, h * 0.915)
    ctx.globalAlpha = 1
  }
  ctx.textAlign = 'left'
  ctx.restore()
}

/** dibuja una tapa (real o compuesta) recortada a la caja x,y,w,h */
function paintCover(ctx, img, x, y, w, h, book, look) {
  if (!img) return drawGeneratedCover(ctx, x, y, w, h, book, look)
  const scale = Math.max(w / img.width, h / img.height)
  const dw = img.width * scale, dh = img.height * scale
  ctx.save()
  ctx.beginPath(); ctx.rect(x, y, w, h); ctx.clip()
  ctx.drawImage(img, x + (w - dw) / 2, y + (h - dh) / 2, dw, dh)
  ctx.restore()
}

/** textura completa de un libro sobre la mesa: tapa, contratapa y cantos */
async function tableTexture(book, look, size) {
  const cv = document.createElement('canvas')
  cv.width = size; cv.height = size
  const ctx = cv.getContext('2d')
  const cw = size / 2, ch = Math.round(size * 0.75)
  const img = await loadCoverImage(book)
  paintCover(ctx, img, 0, 0, cw, ch, book, look)

  ctx.fillStyle = look.base; ctx.fillRect(cw, 0, cw, ch)      // contratapa
  ctx.fillStyle = 'rgba(0,0,0,.3)'; ctx.fillRect(cw, 0, cw, ch)
  drawPagesStrip(ctx, 0, ch, size, size - ch)
  const tex = new THREE.CanvasTexture(cv)
  tex.colorSpace = THREE.SRGBColorSpace
  tex.anisotropy = 4
  return { tex, rects: {
    cover: { u0: 0, v0: 1, u1: 0.5, v1: 1 - ch / size },
    back: { u0: 0.5, v0: 1, u1: 1, v1: 1 - ch / size },
    pages: { u0: 0.02, v0: 1 - ch / size, u1: 0.98, v1: 0 },
  } }
}

function drawPagesStrip(ctx, x, y, w, h) {
  ctx.save(); ctx.translate(x, y)
  ctx.fillStyle = '#e6dabc'; ctx.fillRect(0, 0, w, h)
  ctx.strokeStyle = 'rgba(95,74,48,.2)'; ctx.lineWidth = 1
  for (let i = 0; i < h; i += 2.5) {
    ctx.beginPath(); ctx.moveTo(0, i + 0.5); ctx.lineTo(w, i + 0.5); ctx.stroke()
  }
  ctx.restore()
}

/* ============================================================================
   La aplicación: sala → estante en la mesa → libro.
   ========================================================================== */
class Sala {
  constructor(data) {
    this.data = data
    this.shelves = new Map(data.shelves.map((s) => [s.id, s]))
    this.mode = 'sala'
    this.tableBooks = []
    this.selected = null
    this.userYaw = 0; this.userPitch = 0; this.zoom = 1
    this.texSize = isCoarse ? 320 : 512

    this.looks = new Map()
    for (const shelf of data.shelves) {
      for (const book of shelf.books) this.looks.set(book.id, spineColors(book, shelf))
    }
  }

  /* ------------------------------------------------------------- montaje -- */
  async build(onStep) {
    const canvas = document.createElement('canvas')
    document.body.prepend(canvas)
    this.renderer = new THREE.WebGLRenderer({
      canvas, antialias: !isCoarse, powerPreference: 'high-performance',
    })
    this.renderer.setPixelRatio(Math.min(devicePixelRatio, isCoarse ? 2 : 2))
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping
    this.renderer.toneMappingExposure = 1.28
    this.renderer.outputColorSpace = THREE.SRGBColorSpace

    this.scene = new THREE.Scene()
    this.scene.background = new THREE.Color(0x120c08)
    this.scene.fog = new THREE.Fog(0x120c08, 6, 17)
    this.camera = new THREE.PerspectiveCamera(42, innerWidth / innerHeight, 0.05, 60)

    this.scene.add(new THREE.AmbientLight(0xffe2c0, 0.3))
    this.scene.add(new THREE.HemisphereLight(0xffe6cc, 0x2a1a10, 0.68))
    const key = new THREE.DirectionalLight(0xffe0bb, 1.25)
    key.position.set(2.4, 4.2, 4.2)
    this.scene.add(key)
    const fill = new THREE.DirectionalLight(0x9ab4ff, 0.22)
    fill.position.set(-3.5, 2.4, 3)
    this.scene.add(fill)
    const sala = new THREE.PointLight(0xffd9a6, 13, 14, 2)
    sala.position.set(0.4, 2.35, 2.6)
    this.scene.add(sala)
    // la lámpara que acompaña al estante mirado
    this.lamp = new THREE.PointLight(0xffc98a, 0, 3.2, 2)
    this.lamp.position.set(0, CASE.height * 0.6, 1.1)
    this.scene.add(this.lamp)

    onStep(0.25)
    buildRoom(this.scene)

    // el texto de los lomos merece la tipografía de la casa
    await Promise.race([document.fonts.ready, new Promise((r) => setTimeout(r, 2500))])
    onStep(0.5)

    const all = this.data.shelves.flatMap((s) => s.books)
    this.atlas = buildAtlas(all, this.looks)
    onStep(0.75)

    const built = buildShelves(this.data, this.looks, this.atlas)
    this.caseMesh = built.mesh
    this.caseMats = { near: built.near, far: built.far }
    this.shelfBooks = built.books
    this.shelfGroups = built.groups
    this.byId = new Map(built.books.map((b) => [b.book.id, b]))
    this.scene.add(this.caseMesh)

    this.hover = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1),
      new THREE.MeshBasicMaterial({ color: 0xffd28a, transparent: true, opacity: 0.22 }))
    this.hover.visible = false
    this.scene.add(this.hover)

    this.raycaster = new THREE.Raycaster()
    this.pointer = new THREE.Vector2()
    this.view = { target: new THREE.Vector3(), dist: 4, yaw: 0, pitch: 0 }
    this.tween = null
    this.setView(this.salaView(), 0)
    this.resize()
    addEventListener('resize', () => this.resize())
    onStep(1)
  }

  resize() {
    this.camera.aspect = innerWidth / innerHeight
    this.camera.updateProjectionMatrix()
    this.renderer.setSize(innerWidth, innerHeight)
    if (this.mode === 'sala') return this.setView(this.salaView(), 0.6)
    // al girar el teléfono cambia el reparto sobre la mesa, no solo el encuadre:
    // el estante se vuelve a servir con las medidas nuevas
    clearTimeout(this.relayout)
    const id = this.currentShelf
    const elegido = this.selected?.book.id
    this.relayout = setTimeout(() => this.openShelf(id, elegido), 260)
  }

  /* --------------------------------------------------------------- vistas -- */
  salaView() {
    const half = Math.max(CASE.width / 2 / this.camera.aspect, CASE.height / 2)
    const dist = clamp(half / Math.tan(THREE.MathUtils.degToRad(this.camera.fov / 2)) * 1.3, 3, 9)
    return { target: new THREE.Vector3(0, CASE.height * 0.5, -0.1), dist, yaw: 0, pitch: 0.1 }
  }

  shelfView(id) {
    const col = COL_X[id[0]] ?? 0
    const row = Number(id[1]) || 1
    const y = id === 'TOP' ? CASE.height + 0.2 : shelfFloorY(row) + CASE.inner / 2
    const dist = clamp(1.75 / Math.min(1.6, Math.max(0.62, this.camera.aspect)), 1.2, 2.6)
    return { target: new THREE.Vector3(col, y, -0.1), dist, yaw: 0, pitch: 0.02 }
  }

  /** ancho y fondo que ocupan los libros sobre la mesa, según la pantalla */
  tableArea() {
    return this.camera.aspect > 1
      ? { w: TABLE.w - 0.3, d: TABLE.d - 0.55 }
      : { w: TABLE.w * 0.42, d: TABLE.d - 0.16 }
  }

  mesaView() {
    const area = this.tableArea()
    const pitch = this.camera.aspect > 1 ? 0.6 : 0.74
    const tan = Math.tan(THREE.MathUtils.degToRad(this.camera.fov / 2))
    const porAncho = (area.w / 2 + 0.12) / (tan * this.camera.aspect)
    const porFondo = (area.d / 2 * Math.sin(pitch) + 0.14) / tan
    return {
      // el punto de mira va un poco más allá de los libros: así quedan
      // centrados en la pantalla y no trepados al borde de arriba
      target: new THREE.Vector3(TABLE.x, TABLE.y + 0.03, TABLE.z - area.d * 0.16),
      // en una pantalla baja (teléfono acostado) hay que abrir un poco más:
      // si no, la fila de abajo queda tapada por la barra de estantes
      dist: clamp(Math.max(porAncho, porFondo) * (innerHeight < 560 ? 1.26 : 1.1), 1.3, 6),
      yaw: 0, pitch,
    }
  }

  setView(v, seconds = 1.1) {
    this.userYaw = this.userPitch = 0
    this.zoom = 1
    const from = { target: this.view.target.clone(), dist: this.view.dist,
      yaw: this.view.yaw, pitch: this.view.pitch }
    if (seconds <= 0) {
      Object.assign(this.view, { target: v.target.clone(), dist: v.dist, yaw: v.yaw, pitch: v.pitch })
      this.tween = null
      return
    }
    this.tween = { from, to: v, t: 0, dur: seconds }
  }

  updateCamera(dt) {
    if (this.tween) {
      this.tween.t = Math.min(1, this.tween.t + dt / this.tween.dur)
      const k = easeInOut(this.tween.t)
      this.view.target.lerpVectors(this.tween.from.target, this.tween.to.target, k)
      this.view.dist = lerp(this.tween.from.dist, this.tween.to.dist, k)
      this.view.yaw = lerp(this.tween.from.yaw, this.tween.to.yaw, k)
      this.view.pitch = lerp(this.tween.from.pitch, this.tween.to.pitch, k)
      if (this.tween.t >= 1) this.tween = null
    }
    const drift = this.mode === 'sala' && !this.tween && !this.dragging
      ? Math.sin(performance.now() / 9000) * 0.05 : 0
    const yaw = this.view.yaw + this.userYaw + drift
    const pitch = clamp(this.view.pitch + this.userPitch, -0.35, 1.15)
    const dist = this.view.dist * this.zoom
    const t = this.view.target
    this.camera.position.set(
      t.x + Math.sin(yaw) * Math.cos(pitch) * dist,
      t.y + Math.sin(pitch) * dist,
      t.z + Math.cos(yaw) * Math.cos(pitch) * dist)
    this.camera.lookAt(t)
  }

  /* ------------------------------------------------------ estante → mesa -- */
  setShelfFilled(id, filled) {
    const g = this.shelfGroups.get(id)
    if (!g) return
    const group = this.caseMesh.geometry.groups[g.index]
    group.count = filled ? g.count * 3 : 0
  }

  layoutTable(list) {
    const area = this.tableArea()
    const W = area.w, D = area.d
    const cols = clamp(Math.ceil(Math.sqrt(list.length * (W / D))), 1, 12)
    const rows = Math.ceil(list.length / cols)
    const cellW = W / cols, cellD = D / rows
    const height = Math.min(0.235, cellD * 0.9, cellW * 1.25)
    return list.map((book, i) => {
      const c = i % cols, r = Math.floor(i / cols)
      const inRow = Math.min(cols, list.length - r * cols)
      const rowW = inRow * cellW
      const trabe = r % 2 ? cellW * 0.22 : -cellW * 0.12        // filas trabadas, como quedan de verdad
      const x = TABLE.x - rowW / 2 + cellW * (c + 0.5) + trabe + (rand(book.id, 'x') - 0.5) * cellW * 0.3
      const z = TABLE.z - D / 2 + cellD * (r + 0.5) + (rand(book.id, 'z') - 0.5) * cellD * 0.22
      const aspect = book.cw && book.ch ? book.cw / book.ch : 0.66
      const h = height * (0.88 + rand(book.id, 'hh') * 0.24)
      return {
        book,
        pos: new THREE.Vector3(x, TABLE.y + TABLE.top / 2, z),
        yaw: (rand(book.id, 'yaw') - 0.5) * 0.62,
        coverH: h, coverW: clamp(h * aspect, 0.075, 0.2),
      }
    })
  }

  async openShelf(id, focusId) {
    const shelf = this.shelves.get(id)
    if (!shelf || !shelf.books.length) return
    const token = (this.token = Symbol('estante'))
    this.clearTable()
    this.mode = 'mesa'
    this.currentShelf = id
    this.setShelfFilled(id, false)
    this.setView(this.mesaView())
    this.lampTo(new THREE.Vector3(TABLE.x, TABLE.y + 0.95, TABLE.z + 0.3), 0.85)
    this.onShelfOpen(shelf)

    const list = shelf.books.slice(0, 60)
    const spots = this.layoutTable(list)
    const started = performance.now()
    await Promise.all(spots.map(async (spot, i) => {
      const look = this.looks.get(spot.book.id)
      const { tex, rects } = await tableTexture(spot.book, look, this.texSize)
      if (this.token !== token) { tex.dispose(); return }
      this.spawnTableBook(spot, rects, tex, started + i * 42)
      if (spot.book.id === focusId) this.pendingFocus = spot.book.id
    }))
  }

  spawnTableBook(spot, rects, tex, startAt) {
    const rec = this.byId.get(spot.book.id)
    const thickness = clamp(rec ? rec.w : 0.03, 0.012, 0.06)
    const w = boxWriter()
    w.box(new THREE.Matrix4(), spot.coverW, thickness, spot.coverH, {
      px: rects.pages, nx: rects.pages, py: rects.cover, ny: rects.back,
      pz: rects.pages, nz: rects.pages,
    })
    const mesh = new THREE.Mesh(w.geometry(), new THREE.MeshStandardMaterial({
      map: tex, roughness: 0.62, metalness: 0.03,
    }))
    const to = new THREE.Vector3(spot.pos.x, spot.pos.y + thickness / 2 + 0.002, spot.pos.z)
    const toQuat = new THREE.Quaternion().setFromEuler(new THREE.Euler(0, spot.yaw, 0))
    // sale del estante parado y llega acostado sobre la mesa
    const fromQuat = rec
      ? rec.quat.clone().multiply(new THREE.Quaternion().setFromEuler(new THREE.Euler(0, 0, Math.PI / 2)))
      : toQuat.clone()
    const from = rec ? rec.pos.clone() : to.clone().setY(to.y + 0.6)
    mesh.position.copy(from)
    mesh.quaternion.copy(fromQuat)
    mesh.userData = { book: spot.book, shelf: this.currentShelf }
    this.scene.add(mesh)

    const sombra = new THREE.Mesh(
      new THREE.PlaneGeometry(spot.coverW * 1.8, spot.coverH * 1.6),
      new THREE.MeshBasicMaterial({
        map: shadowTexture(), transparent: true, opacity: 0, depthWrite: false,
      }))
    sombra.rotation.x = -Math.PI / 2
    sombra.rotation.z = -spot.yaw
    sombra.position.set(spot.pos.x, TABLE.y + TABLE.top / 2 + 0.0015, spot.pos.z)
    this.scene.add(sombra)

    this.tableBooks.push({
      mesh, sombra, book: spot.book, from, to, fromQuat, toQuat,
      startAt, dur: 950, lift: 0,
    })
  }

  updateTable(now) {
    for (const tb of this.tableBooks) {
      const p = clamp((now - tb.startAt) / tb.dur, 0, 1)
      if (p < 1) {
        const k = easeInOut(p)
        tb.mesh.position.lerpVectors(tb.from, tb.to, k)
        tb.mesh.position.y += Math.sin(Math.PI * p) * 0.42   // el arco del vuelo
        tb.mesh.quaternion.slerpQuaternions(tb.fromQuat, tb.toQuat, k)
      } else if (!tb.landed) {
        tb.landed = true
        tb.mesh.position.copy(tb.to)
        tb.mesh.quaternion.copy(tb.toQuat)
      }
      // la sombra se abre cuando el libro viene bajando y se cierra al levantarse
      const alto = Math.max(0, tb.mesh.position.y - tb.to.y)
      tb.sombra.material.opacity = clamp(p * 0.78 - alto * 0.9, 0, 0.78)
      const spread = 1 + alto * 1.1
      tb.sombra.scale.set(spread, spread, 1)

      const wanted = this.selected === tb ? 1 : 0
      if (tb.lift !== wanted) {
        tb.lift += clamp(wanted - tb.lift, -0.08, 0.08)
        if (Math.abs(wanted - tb.lift) < 0.01) tb.lift = wanted
      }
      if (tb.landed && tb.lift > 0) {
        tb.mesh.position.y = tb.to.y + tb.lift * 0.13
        tb.mesh.quaternion.copy(tb.toQuat)
        tb.mesh.rotateX(-tb.lift * 0.42)                      // se inclina para mostrarse
      }
    }
    if (this.pendingFocus && this.tableBooks.length) {
      const tb = this.tableBooks.find((b) => b.book.id === this.pendingFocus)
      if (tb) { this.select(tb); this.pendingFocus = null }
    }
  }

  clearTable() {
    for (const tb of this.tableBooks) {
      this.scene.remove(tb.mesh)
      this.scene.remove(tb.sombra)
      tb.sombra.geometry.dispose()
      tb.sombra.material.dispose()
      tb.mesh.geometry.dispose()
      tb.mesh.material.map?.dispose()
      tb.mesh.material.dispose()
    }
    this.tableBooks = []
    this.selected = null
    this.pendingFocus = null
    if (this.currentShelf) this.setShelfFilled(this.currentShelf, true)
    this.currentShelf = null
  }

  goSala() {
    this.token = Symbol('sala')
    this.clearTable()
    this.mode = 'sala'
    this.setView(this.salaView())
    this.lamp.intensity = 0
    this.onSala()
  }

  select(tb) {
    this.selected = tb
    this.onSelect(tb ? tb.book : null)
  }

  lampTo(pos, intensity) {
    this.lamp.position.copy(pos)
    this.lamp.intensity = intensity
  }

  /* ------------------------------------------------------------- puntero -- */
  hitTest(clientX, clientY) {
    this.pointer.set((clientX / innerWidth) * 2 - 1, -(clientY / innerHeight) * 2 + 1)
    this.raycaster.setFromCamera(this.pointer, this.camera)
    if (this.mode === 'mesa') {
      const hit = this.raycaster.intersectObjects(this.tableBooks.map((t) => t.mesh), false)[0]
      if (hit) return { kind: 'mesa', tb: this.tableBooks.find((t) => t.mesh === hit.object) }
    }
    const hit = this.raycaster.intersectObject(this.caseMesh, false)[0]
    if (hit && hit.faceIndex != null) {
      const rec = this.shelfBooks[Math.floor(hit.faceIndex / 12)]
      if (rec) return { kind: 'estante', rec }
    }
    return null
  }

  showHover(rec) {
    if (!rec) { this.hover.visible = false; return }
    this.hover.visible = true
    this.hover.position.copy(rec.pos)
    this.hover.quaternion.copy(rec.quat)
    this.hover.scale.set(rec.w + 0.006, rec.h + 0.006, rec.d + 0.006)
  }

  /* de cerca se leen los lomos; de lejos manda el color */
  updateDetail() {
    const d = this.camera.position.distanceTo(this.view.target)
    const wantsNear = d < 2.9
    const mat = wantsNear ? this.caseMats.near : this.caseMats.far
    if (this.caseMesh.material !== mat) this.caseMesh.material = mat
  }

  frame(now, dt) {
    this.updateCamera(dt)
    this.updateDetail()
    this.updateTable(now)
    this.renderer.render(this.scene, this.camera)
  }
}

/* ============================================================================
   Puesta en escena: la sala de arriba es three.js, esto es el HTML que la rodea.
   ========================================================================== */
const els = {
  gate: $('#gate'), bar: $('#bar i'), enter: $('#enter'),
  title: $('#where-t'), sub: $('#where-s'),
  chips: $('#chips'), card: $('#card'), cardBody: $('#card-body'),
  tip: $('#tip'), caption: $('#caption'), tourbar: $('#tourbar'),
  tourBtn: $('#tour-btn'), backBtn: $('#back-btn'),
}

const fmtYear = (y) => (y < 0 ? `${Math.abs(y)} a.C.` : String(y))

function coverFor(book, look, big) {
  if (book.cover) return `<img src="covers/${book.cover}" alt="Tapa de ${esc(book.title)}" loading="lazy">`
  const cv = document.createElement('canvas')
  cv.width = big ? 360 : 240; cv.height = Math.round(cv.width * 1.5)
  drawGeneratedCover(cv.getContext('2d'), 0, 0, cv.width, cv.height, book, look)
  return `<img src="${cv.toDataURL('image/jpeg', 0.88)}" alt="Tapa compuesta de ${esc(book.title)}">`
}

const esc = (s) => String(s ?? '').replace(/[&<>"]/g, (c) =>
  ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]))

function cardHTML(book, shelf, look) {
  const rows = []
  const row = (k, v) => { if (v) rows.push(`<dt>${k}</dt><dd>${esc(v)}</dd>`) }
  if (book.year != null) {
    row('Escrito', fmtYear(book.year) + (book.year_confidence === 'aprox' ? ' (aprox.)' : ''))
  }
  row('Editorial', book.publisher)
  row('Colección', book.series)
  row('Encuadernación', book.binding)
  row('Idioma', book.language)
  row('Formato', book.format)
  row('Estante', `${shelf.id} — ${shelf.label}`)
  row('Ficha', book.id)
  row('Valor estimado', book.price)
  const note = book.note || book.year_note
  return `
    <div class="cover">${coverFor(book, look, true)}</div>
    <div class="kicker">${esc(shelf.theme || shelf.label)}</div>
    <h2>${esc(book.title)}</h2>
    <p class="author">${esc(book.author || 'Autor sin fichar')}</p>
    ${note ? `<p class="note">${esc(note)}</p>` : ''}
    <dl>${rows.join('')}</dl>
    ${(book.topics || []).length
      ? `<div class="topics">${book.topics.map((t) => `<i>${esc(t)}</i>`).join('')}</div>` : ''}
    <div class="acts">
      ${book.buy_url ? `<a class="btn" href="${esc(book.buy_url)}" target="_blank" rel="noopener">Ver ediciones</a>` : ''}
    </div>`
}

async function boot() {
  let data
  try {
    const res = await fetch('data/catalog.json')
    data = await res.json()
  } catch (err) {
    $('#fallback').classList.add('on')
    return
  }
  const shelvesWithBooks = data.shelves.filter((s) => s.books.length)
  $('#s-books').textContent = data.books_total
  $('#s-shelves').textContent = shelvesWithBooks.length
  $('#s-covers').textContent = data.books_with_cover
  els.sub.textContent = `${data.books_total} libros · ${shelvesWithBooks.length} estantes · tres columnas`

  const sala = new Sala(data)
  window.__sala = sala          // asa para inspeccionar la escena desde la consola
  try {
    await sala.build((p) => { els.bar.style.width = Math.round(p * 100) + '%' })
  } catch (err) {
    console.error(err)
    $('#fallback').classList.add('on')
    return
  }

  /* ---------------------------------------------------------- reacciones -- */
  sala.onShelfOpen = (shelf) => {
    els.title.textContent = `Estante ${shelf.id}`
    els.sub.textContent = `${shelf.theme || shelf.label} · ${shelf.books.length} libros`
    els.backBtn.hidden = false
    for (const chip of els.chips.children) {
      chip.setAttribute('aria-pressed', String(chip.dataset.id === shelf.id))
    }
    closeCard()
  }
  sala.onSala = () => {
    els.title.textContent = 'La Sala de Lectura'
    els.sub.textContent = `${data.books_total} libros · ${shelvesWithBooks.length} estantes · tres columnas`
    els.backBtn.hidden = true
    for (const chip of els.chips.children) chip.setAttribute('aria-pressed', 'false')
    closeCard()
  }
  sala.onSelect = (book) => {
    if (!book) return closeCard()
    const shelf = sala.shelves.get(sala.currentShelf) || { id: '', label: '' }
    els.cardBody.innerHTML = cardHTML(book, shelf, sala.looks.get(book.id))
    els.card.classList.add('on')
  }
  function closeCard() { els.card.classList.remove('on') }
  $('#close').addEventListener('click', () => { closeCard(); sala.select(null) })

  /* ------------------------------------------------------------- estantes -- */
  for (const shelf of shelvesWithBooks) {
    const chip = document.createElement('button')
    chip.className = 'chip'
    chip.dataset.id = shelf.id
    chip.setAttribute('aria-pressed', 'false')
    chip.innerHTML = `<b>${esc(shelf.id)} · ${shelf.books.length}</b><span>${esc(shelf.theme || shelf.label)}</span>`
    chip.addEventListener('click', () => { stopTour(); sala.openShelf(shelf.id) })
    els.chips.appendChild(chip)
  }
  els.backBtn.addEventListener('click', () => { stopTour(); sala.goSala() })

  /* -------------------------------------------------------------- puntero -- */
  const canvas = sala.renderer.domElement
  const pointers = new Map()
  let down = null, dragging = false, pinch = 0

  canvas.addEventListener('pointerdown', (ev) => {
    canvas.setPointerCapture(ev.pointerId)
    pointers.set(ev.pointerId, ev)
    down = { x: ev.clientX, y: ev.clientY, yaw: sala.userYaw, pitch: sala.userPitch }
    dragging = false
    sala.dragging = true
  })
  canvas.addEventListener('pointermove', (ev) => {
    if (pointers.has(ev.pointerId)) pointers.set(ev.pointerId, ev)
    if (pointers.size === 2) {                 // pellizco para acercarse
      const [a, b] = [...pointers.values()]
      const d = Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY)
      if (pinch) sala.zoom = clamp(sala.zoom * (pinch / d), 0.5, 1.9)
      pinch = d
      return
    }
    if (down) {
      const dx = ev.clientX - down.x, dy = ev.clientY - down.y
      if (!dragging && Math.hypot(dx, dy) > 7) dragging = true
      if (dragging) {
        sala.userYaw = clamp(down.yaw - dx * 0.0042, -0.62, 0.62)
        sala.userPitch = clamp(down.pitch + dy * 0.0032, -0.3, 0.5)
      }
      return
    }
    if (isCoarse) return
    const hit = sala.hitTest(ev.clientX, ev.clientY)
    const rec = hit?.kind === 'estante' ? hit.rec : null
    sala.showHover(rec)
    canvas.style.cursor = hit ? 'pointer' : 'grab'
    if (rec) {
      els.tip.innerHTML = `<b>${esc(rec.book.title)}</b><span>${esc(rec.book.author || rec.shelf.id)}</span>`
      els.tip.style.opacity = '1'
      els.tip.style.left = Math.min(ev.clientX + 16, innerWidth - 280) + 'px'
      els.tip.style.top = Math.min(ev.clientY + 16, innerHeight - 90) + 'px'
    } else {
      els.tip.style.opacity = '0'
    }
  })
  const release = (ev) => {
    pointers.delete(ev.pointerId)
    if (pointers.size < 2) pinch = 0
    sala.dragging = pointers.size > 0
    if (!down) return
    const wasDragging = dragging
    down = null; dragging = false
    if (wasDragging) return
    const hit = sala.hitTest(ev.clientX, ev.clientY)
    if (!hit) { if (sala.mode === 'mesa') { sala.select(null) } return }
    stopTour()
    if (hit.kind === 'mesa') sala.select(hit.tb)
    else sala.openShelf(hit.rec.shelf.id, sala.mode === 'sala' ? hit.rec.book.id : undefined)
  }
  canvas.addEventListener('pointerup', release)
  canvas.addEventListener('pointercancel', (ev) => { pointers.delete(ev.pointerId); down = null })
  canvas.addEventListener('wheel', (ev) => {
    ev.preventDefault()
    sala.zoom = clamp(sala.zoom * (1 + ev.deltaY * 0.0011), 0.5, 1.9)
  }, { passive: false })

  addEventListener('keydown', (ev) => {
    if (ev.key === 'Escape') { stopTour(); sala.mode === 'mesa' ? sala.goSala() : closeCard() }
    if (tour.on && ev.key === 'ArrowRight') goTour(tour.i + 1)
    if (tour.on && ev.key === 'ArrowLeft') goTour(tour.i - 1)
  })

  /* ------------------------------------------------------------- recorrido --
     Seis paradas que cuentan la casa: lo que hay, lo más viejo, lo que se
     colecciona. Avanza solo, pero se puede manejar a mano. */
  const shelfOf = (id) => data.shelves.find((s) => s.id === id)
  const allBooks = data.shelves.flatMap((s) => s.books.map((b) => ({ b, s })))
  const oldest = allBooks.filter((x) => typeof x.b.year === 'number')
    .sort((a, b) => a.b.year - b.b.year)[0]
  const topics = {}
  for (const { b } of allBooks) for (const t of b.topics || []) topics[t] = (topics[t] || 0) + 1

  const stops = [{
    title: 'La biblioteca entera',
    text: `${data.books_total} libros fichados, ${shelvesWithBooks.length} estantes, tres columnas. `
      + `${data.books_with_cover} ya tienen su tapa.`,
  }]
  const add = (id, title, text) => { if (shelfOf(id)?.books.length) stops.push({ shelf: id, title, text }) }
  add('L3', 'La columna de Shakespeare', `${shelfOf('L3').books.length} volúmenes en un solo estante: ediciones inglesas, alemanas y de estudio.`)
  add('L2', 'Balzac en vellum y los Quijote', 'La fila más antigua de la casa: las Œuvres Complètes encuadernadas en pergamino y el Quijote de exhibición.')
  if (oldest) {
    add(oldest.s.id, 'Lo más viejo que se escribió acá',
      `${oldest.b.title}${oldest.b.author ? ' — ' + oldest.b.author : ''}, de ${fmtYear(oldest.b.year)}.`)
    stops[stops.length - 1].book = oldest.b.id
  }
  add('R4', 'Stephen King, dos épocas', 'El estante blanco de la Biblioteca King y, justo debajo, las ediciones negras modernas.')
  add('L6', 'Uruguay y Montevideo', `${shelfOf('L6').books.length} libros de historia local: la parte de la biblioteca que no se consigue afuera.`)
  add('M7', 'La referencia antigua', 'Mitología, Who’s Who y la serie Mentor-UNESCO que bajó de M4 en la recatalogación de agosto.')
  stops.push({ title: 'Y ahí sigue', text: 'Tocá cualquier lomo para sacar ese libro del estante.' })

  const tour = { on: false, i: 0, timer: 0 }
  function goTour(i) {
    if (!stops.length) return
    tour.i = (i + stops.length) % stops.length
    const stop = stops[tour.i]
    if (stop.shelf) {
      sala.setView(sala.shelfView(stop.shelf), 1.4)
      const col = COL_X[stop.shelf[0]] ?? 0
      const y = shelfFloorY(Number(stop.shelf[1]) || 1) + 0.16
      sala.lampTo(new THREE.Vector3(col, y, 0.75), 2.2)
      sala.showHover(stop.book ? sala.byId.get(stop.book) : null)
    } else {
      sala.setView(sala.salaView(), 1.4)
      sala.lamp.intensity = 0
      sala.showHover(null)
    }
    els.caption.querySelector('b').textContent = stop.title
    els.caption.querySelector('span').textContent = stop.text
    els.caption.classList.add('on')
    clearTimeout(tour.timer)
    tour.timer = setTimeout(() => goTour(tour.i + 1), 9200)
  }
  function startTour() {
    if (sala.mode === 'mesa') sala.goSala()
    tour.on = true
    document.body.classList.add('recorriendo')
    els.tourbar.classList.add('on')
    els.tourBtn.hidden = true
    goTour(0)
  }
  function stopTour() {
    if (!tour.on) return
    tour.on = false
    document.body.classList.remove('recorriendo')
    clearTimeout(tour.timer)
    els.tourbar.classList.remove('on')
    els.caption.classList.remove('on')
    els.tourBtn.hidden = false
    sala.showHover(null)
    sala.lamp.intensity = 0
  }
  els.tourBtn.addEventListener('click', startTour)
  $('#tour-next').addEventListener('click', () => goTour(tour.i + 1))
  $('#tour-prev').addEventListener('click', () => goTour(tour.i - 1))
  $('#tour-stop').addEventListener('click', () => { stopTour(); sala.goSala() })

  /* ------------------------------------------------------------- el reloj -- */
  let last = performance.now()
  function loop(now) {
    requestAnimationFrame(loop)
    const dt = Math.min((now - last) / 1000, 0.05)
    last = now
    sala.frame(now, dt)
  }
  requestAnimationFrame(loop)

  /* -------------------------------------------------------------- entrada --
     La URL puede pedir algo puntual, que para mostrarle la biblioteca a alguien
     vale más que explicar dónde tocar:
       ?estante=L3   abre ese estante sobre la mesa
       ?libro=R4-007 abre su estante y su ficha
       ?recorrido    entra directo al recorrido guiado */
  const params = new URLSearchParams(location.search)
  const pedido = {
    estante: (params.get('estante') || '').toUpperCase(),
    libro: (params.get('libro') || '').toUpperCase(),
    recorrido: params.has('recorrido') || params.has('tour'),
  }

  function entrar(conRecorrido) {
    els.gate.classList.add('gone')
    setTimeout(() => els.gate.remove(), 800)
    sala.setView(sala.salaView(), 2.6)
    const libro = pedido.libro && sala.byId.get(pedido.libro)
    if (conRecorrido) setTimeout(startTour, 900)
    else if (libro) setTimeout(() => sala.openShelf(libro.shelf.id, libro.book.id), 1200)
    else if (sala.shelves.get(pedido.estante)) setTimeout(() => sala.openShelf(pedido.estante), 1200)
  }

  els.enter.disabled = false
  els.enter.textContent = 'Entrar a la sala'
  $('#enter-tour').disabled = false
  els.enter.addEventListener('click', () => entrar(pedido.recorrido))
  $('#enter-tour').addEventListener('click', () => entrar(true))
}

if (!window.WebGLRenderingContext) $('#fallback').classList.add('on')
else boot()
