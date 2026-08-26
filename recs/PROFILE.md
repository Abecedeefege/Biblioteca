# Perfil de gustos — recomendador de Bibliotequeando

## ⚖️ MEZCLA + RÉGIMEN — DIARIO desde 20/08 (reemplaza el semanal del 05/08)
**DOS fichas por día, todos los días**: UNA para Andy y UNA para Sofi, cada
una elegida por SU perfil y SU feedback. Entre las dos del día: **UNA de
libro nuevo y UNA de la biblioteca de la casa**, alternando cada día quién
recibe la nueva (mirar en `recommended.json` qué recibió cada uno el día
anterior). Push personal a cada uno, ambos ~19:00 -03:00
(`"to":"Andy"` / `"to":"Sofi"`). Si el día ya tiene fichas pre-armadas,
cuentan para su destinatario (una `todos` cuenta para ambos) y solo se
construye lo que falte, manteniendo el par nuevo+biblioteca.
Cine/series NO cambia (viernes ~19:00, `todos`, fuera del par).
**⚠️ Nota de mantenimiento (vigente desde 21/08):**
`.claude/commands/recomendacion.md` sigue describiendo el régimen SEMANAL
del 05/08 (Gate de día domingo) — quedó desactualizado al restablecerse el
diario el 20/08. Esta sección de PROFILE manda hasta que alguien
sincronice el comando; no es territorio que yo pueda tocar.

## 🎧 Google Play Books en TODAS las fichas (desde 24/08)
Pedido de Andy (rec-nota 24/08): toda ficha nueva suma, si existen, link a
**audiolibro** de Google Play y, si no hay narrado completo, un **resumen**.
Verificación SIEMPRE por búsqueda cruzada título+autor(+narrador) — Google
Play devuelve 403 a cualquier bot/curl. Si no existe ninguna opción, se dice
explícito, no se omite.

## 🚨 26/08 — ESCALACIÓN: canal de Sofi, probable problema de entrega
**6 fichas seguidas (20 al 25/08) con CERO eventos de Sofi en
`sync/engagement.json`** — ni un solo `page_visit`, pese a `subscription.json`
`active` y `send_log.json` con `status_code:201` las 6 veces (el push SALE
y se entrega al endpoint). Se probaron 6 géneros distintos (fantasía cálida
x2, gótico, cozy fantasy, histórico, Sherlock) y también un cambio de
formato (ficha corta, pregunta al frente) el 25/08 — nada generó ni una
apertura. Con contenido y formato tan variados sin ninguna señal, la
hipótesis de contenido queda descartada: **esto ya se lee como problema
técnico** (permiso de notificaciones revocado en su navegador/teléfono,
canal roto, o simplemente no está mirando el celu). Reportado a Andy hoy
explícito — no accionable desde una ficha si ni siquiera se abre. Se sigue
mandando su ficha diaria igual (régimen no negociable) pero sin gastar más
"nuevos" raros: hoy se usó el único autor con acierto pleno confirmado
(Haig) en un libro distinto, para maximizar la chance si el canal se
destraba.

## 📅 26/08 — hoy
Andy: click+page_visit tempranos en Being You (Seth, 03:31 -03:00), sin
veredicto — sigue el patrón "lee entero, no vota" (Walker, Mackesy).
Régimen: ayer Andy tuvo nuevo → hoy redescub; Sofi tuvo redescub → hoy
nuevo. Andy → **Herrigel, *Zen en el arte del tiro con arco*** (L4-010):
primero del banco redescub, cruza espiritualidad oriental + wellness desde
un ángulo nuevo (soltar el control) que conecta directo con su patrón de
dwell-sin-voto. Sofi → **Matt Haig, *The Humans*** (nuevo): mismo autor de
su único acierto pleno (Biblioteca de medianoche, 27/07), tono distinto
(sci-fi con humor) para no repetir la ficha exacta que funcionó — ver
escalación arriba. Pushes `2026-08-26-rec-andy` / `-rec-sofi` (19:00).

### Log resumido 20–25/08
20/08 Andy→Brewer *Ansiedad* (redescub) / Sofi→Klune-Puerta (nuevo, único
acierto real de Sofi en esta racha: me_tienta+love, 05/08 anterior — no
20/08 mismo). 21/08 Andy→Nestor *Respira* (nuevo, dwell 350s/99%, sin voto)
/ Sofi→Carey *Heap House* (redescub). 22/08 Andy→Raspall *Calmar la mente*
(redescub) / Sofi→Baldree *Café de leyendas* (nuevo). 23/08 Andy→Walker
(nuevo, me_tienta + dwell 376s/100% — rompió racha muda de 9) / Sofi→Bennett
*Windsor Knot* (redescub). 24/08 Andy→Mackesy (redescub, dwell 140s/80%,
sin voto) / Sofi→Klune *Somewhere Beyond the Sea* (nuevo, muda). 25/08
Andy→Seth *Being You* (nuevo, click 26/08 sin voto) / Sofi→Doyle
*Baskerville* (redescub, ficha corta + diagnóstico al frente — muda
igual). Sofi: 6/6 fichas mudas confirmadas.

## 📚 Contexto fijo
Catálogo: 437 volúmenes (re-extraer `/tmp/catalog.json` cada corrida).
Suscripción: Andy y Sofi `active` (push sale y se entrega — ver escalación).
M2/M3/M4/M6 pasaron a vitrinas pero libros siguen fichados con su id de
siempre.

### Sofi — vetas confirmadas
Salas: sala King (R4+R5, 50 libros), salón del crimen (M5), rincón Valeria
(M6, quemado). Aciertos duros: **Dicker Harry Quebert `lo_quiero`+`love`**
(17/07); **Klune-Puerta `me_tienta`+`love`** (fantasía cálida); **Haig
*Biblioteca de medianoche* `lo_quiero`+`love`** (27/07, audiencia todos).
Todos los "segundos libros" del mismo autor/veta fallaron en silencio:
Dicker-Baltimore (21/07), Klune-Somewhere (24/08) — no asumir que un
segundo intento con el mismo autor repite el acierto. Romance contemporáneo
(Henry x2): descartado. **Guardia máxima misterio/cozy**: `ya_lo_lei` en
King, Katzenbach, Carlisle, Benavent, Henry — sagas masivas ya devoradas
por Kindle, evitar esos autores puntuales.
- Quemados: Osman t.1-2, Dicker Harry Quebert, Hill, King R5-018, Katzenbach
  M5-024, Carlisle M5-012, Benavent M6-001-009, Henry (ambos), Coyle M5-011,
  Klune-Puerta, Heap House, Bennett-Windsor, Klune-Somewhere, Doyle-
  Baskerville, Haig-Biblioteca-medianoche, Haig-The-Humans (usado 26/08).
- Banco redescub: M5-016 Delany libro 2 (esperar señal de M5-014). NO usar
  M5-022, M5-009, M5-008, M5-002, M6 entero (romance/no visto). Limpios en
  M5: Sherlock x4 más (M5-033/006/034/035/036), Christie x2 (M5-020/021),
  Peters *Misterio en Egipto* (M5-019), S.J. Bennett libro 2.
- Banco nuevo: resto de TJ Klune (*In the Lives of Puppets*), Backman *Un
  hombre llamado Ove* (riesgo "ya la vi", película), otro Haig si el canal
  se confirma vivo (*How to Stop Time*, *Reasons to Stay Alive*).
  **Pausa de "nuevos" experimentales hasta confirmar que el canal
  funciona** — priorizar redescub de lo ya confirmado en casa.

### Andy — datos duros
Estante L4 (28 + 5 nuevos agosto). Gustos: wellness, autosuperación,
positividad, astronomía, neurociencia, espiritualidad oriental, finanzas,
fábulas. Idioma indistinto. Regla confirmada x3: autor identitario/ya-en-
casa > clásico consagrado sin dueño. Fábula corta (Bach, Hesse, Mackesy) es
su combo más seguro (2/2 con Bach). **Patrón nuevo (23-26/08): lee la
ficha entera (dwell 140-376s, 80-100% scroll) pero NO vota** — Walker
rompió esto una vez (me_tienta) horas después, no en el momento.
- Aciertos: Rovelli, Bach Ilusiones, Holiday (plenos); Cosmos, Bach Gaviota
  (redescub). `ya_lo_lei`: Frankl, Meditaciones (clásicos sin dueño).
- Astronomía en pausa: L5-024 Hoyle, L5-021 Whipple. Rovelli identitario: si
  Orden del Tiempo acierta, próximo Helgoland. Estoicismo: banco Séneca
  Cartas a Lucilio. Cuerpo/sueño: Walker con primer voto real. Neurociencia/
  mente abierta 25/08 (Seth, sin veredicto). Oriental nivel 2 abierto 26/08
  (Herrigel, ángulo "soltar" vs. "construir").
- Banco nuevo: Sapolsky *Behave*, mindfulness (Thich Nhat Hanh, Tolle, Pema
  Chödrön, Kabat-Zinn), oriental (*Tao Te Ching*, Alan Watts, Suzuki,
  *Bhagavad Gita*), psicología positiva (Csikszentmihalyi, Haidt, Seligman),
  cuerpo (Brewer *Craving Mind*/*Hunger Habit*), hábitos (veta abierta
  20/08, sin confirmar).
- Banco redescub: usado 26/08 L4-010. Próxima prioridad: L4-014 *Doors of
  Perception*, L4-016 *Budismo para principiantes*, L4-021 *Art of
  Happiness*, L4-015 *El Alquimista*. Astro: L5-024, L5-021.

## 🛡️ Guardia
"Nuevo": título+autor contra catálogo completo (sin tildes) y contra
`recommended.json`. Campo `to` obligatorio en `queue.json`. Revisar
`subscription.json` cada corrida. `read_status` de enrichment NO confiable
para Sofi (Kindle paralelo); para Andy sí. Buscalibre: siempre
`buscalibre.uy/libros/search/?q=…`; para precio exacto, buscar el link de
producto directo y leer su JSON-LD `offers.price` (el buscador no lo
expone). Re-catalogación de agosto: libros M5/M6 con `note:"no visto"` no
confirmados hasta ver en persona.

## 🔭 Qué mirar (próxima corrida — 27/08, régimen diario)
Mañana se invierte: Andy nuevo, Sofi redescub. Prioridad: (1) **Sofi —
¿algo, lo que sea, en The Humans o en cualquier notificación?** Si sigue
en cero, ya son 7 fichas mudas — el próximo paso es pedirle a Andy en el
reporte que confirme en persona con Sofi si le llegan las notis, no seguir
solo. (2) ¿Being You (Seth) genera voto? (3) ¿Herrigel genera algo (dwell,
voto, leer-esta-noche)? Sin señal: Coyle (16/08), Delany M5-014, Rovelli
04/08, Rojas 05/08, Thorogood, vuelo-ebooks.

## 🎬 CINE + 🧳 viaje (fuera del ciclo)
Cine: 1/semana, `todos`, viernes ~19:00. Sofi evita gore/subtítulos
siempre; Andy evita "triste", nunca doblado. Severance "me tienta" Andy —
candidata fuerte para la próxima función. Sin Función Nº2 desde 31/07,
fuera del alcance de esta corrida.

## 🧭 Sugerencias hub
`recs/index.html` lista todo leyendo `recommended.json` por fetch — cero
mantenimiento manual. NO TOCAR (ni este ni `recs/setup.html`).
