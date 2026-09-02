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
**⚠️ Nota de mantenimiento (vigente desde 21/08, sigue sin sincronizar):**
`.claude/commands/recomendacion.md` sigue describiendo el régimen SEMANAL
del 05/08 (Gate de día domingo) — quedó desactualizado al restablecerse el
diario el 20/08. Esta sección de PROFILE manda hasta que alguien
sincronice el comando; no es territorio que yo pueda tocar.

## 🎧 Google Play en todas las fichas nuevas (desde 24/08)
Pedido de Andy: toda ficha nueva (y redescub si existe) suma link a
**audiolibro** de Google Play si existe, verificado SIEMPRE por búsqueda
cruzada título+autor(+narrador) — Google Play devuelve 403 a bots (se usa
igual, bloqueo conocido). Un 404 real (no la página de bloqueo) es link
inválido: se declara la existencia sin link. Cuando hay varias ediciones
narradas distintas circulando y no se puede identificar con certeza cuál
es la de Google Play (caso Chimneys 02/09), se declara existencia sin
linkear ninguna — mismo espíritu que el 404 real, para no apuntar a la
narración equivocada.

## 🚨 Sofi: silencio de canal prolongado (actualizado 02/09)
Cero eventos suyos en `sync/engagement.json` desde el 20/08 — 14 días
corridos, 14 fichas, en 7 géneros/autores distintos ya probados (cozy,
gótico, histórico, especulativo cálido, fantasía cálida, literatura
contemporánea sin crimen, y hoy clásico de aventura con humor), pese a
suscripción `active` y pushes saliendo con 201 confirmado en
`send_log.json`. Canal de Andy sano en paralelo → ya no se explica por bug
del dispatcher. Sigo construyendo fichas de calidad; parar no diagnostica
nada. Plan si sigue muda: agotar el banco limpio de M5 (queda Sherlock x4,
Delany libro 2) antes de repetir autor.

## ✅ Canal de Andy confirmado sano (30/08)
Prueba de lectura real: dwells crecientes y fuertes en varias fichas
recientes (Fogg 493s/80%, otras similares). Último voto de BOTÓN sigue
siendo Herrigel (26/08, `me_tienta`+`like`) — desde entonces 7 fichas
seguidas (Flow/Huxley/Fogg/Dalai Lama/Craving Mind/Alquimista/hoy Haidt)
sin cerrar veredicto pese a dwell fuerte en varias: dato de contenido o
fricción del CTA, no de entrega.

## 📅 02/09 — hoy
Cero eventos nuevos de ninguno de los dos desde el cutoff (30/08 04:54
UTC) — nada que reprocesar; ambos pushes del 01/09 salieron (`sent`,
201, ~19:24 -03:00, dentro de ventana y sin el retraso del 31/08).
Régimen: ayer Andy tuvo redescub (Coelho) → hoy nuevo; Sofi tuvo nuevo
(Backman) → hoy redescub.
**Andy → Jonathan Haidt, *The Happiness Hypothesis*** (nuevo): abre la
veta "psicología positiva académica" del banco (con Seligman de reserva).
Es el mapa que conecta piezas sueltas que ya leyó este mes sin saberlo:
cita a Csikszentmihalyi/flow (que leyó el 27/08) y su metáfora central
(jinete vs elefante) es el mismo argumento detrás de Fogg/Brewer (entrenar
el hábito, no forzar la voluntad). Ficha incluye una lectura honesta y
autoirónica de su propio patrón (dwell fuerte, sin botón) a la luz del
propio libro.
**Sofi → Agatha Christie, *The Secret of Chimneys*** (redescub, M5-020):
completa el par de sus DOS Christie en casa — el 27/08 se priorizó M5-021
(Mirrors) por tono más atmosférico y se dejó esta pasar por "más liviana";
como Mirrors tampoco generó señal, hoy se prueba el otro extremo (más
humor y aventura, registro más cercano a Joyce/Osman que a Marple clásica).
Pushes `2026-09-02-rec-andy`/`-rec-sofi` encolados 19:00 -03:00.

### Log resumido 25/08–01/09
25/08 Andy→Seth *Being You* (nuevo) / Sofi→Doyle *Baskerville* (redescub).
26/08 Andy→Herrigel *Zen tiro con arco* (redescub, **me_tienta+like**,
último voto de botón de Andy) / Sofi→Haig *The Humans* (nuevo).
27/08 Andy→Csikszentmihalyi *Flow* (nuevo) / Sofi→Christie *Mirrors*
(redescub). 28/08 Andy→Huxley *Doors of Perception* (redescub) / Sofi→
Klune *In the Lives of Puppets* (nuevo). 29/08 Andy→Fogg *Tiny Habits*
(nuevo, dwell fuerte 493s/80%) / Sofi→Peters *Misterio en Egipto*
(redescub). 30/08 Andy→Dalai Lama *The Art of Happiness* (redescub) /
Sofi→Haig *How to Stop Time* (nuevo). 31/08 Andy→Brewer *The Craving
Mind* (nuevo) / Sofi→Bennett *A Three Dog Problem* (redescub, secuela de
Windsor Knot). 01/09 Andy→Coelho *El Alquimista* (redescub) / Sofi→
Backman *Un hombre llamado Ove* (nuevo, cambio de familia de género).
Ninguna ficha de Sofi tiene feedback desde el 20/08.

## 📚 Contexto fijo
Catálogo: 437 volúmenes (re-extraer `/tmp/catalog.json` cada corrida).
Suscripción: Andy y Sofi `active`. M2/M3/M4/M6 pasaron a vitrinas pero
libros siguen fichados con su id de siempre.

### Sofi — vetas confirmadas
Salas: sala King (R4+R5, 50 libros), salón del crimen (M5), rincón Valeria
(M6, quemado). Aciertos duros: **Dicker Harry Quebert `lo_quiero`+`love`**
(17/07); **Klune-Casa-mar-azul `me_tienta`+`love`** (05/08, su ÚNICA señal
desde el 20/08); **Haig *Biblioteca de medianoche* `lo_quiero`+`love`**
(27/07, audiencia todos) — patrón "arranca oscuro, termina cálido".
Romance contemporáneo (Henry x2): descartado.
**Guardia máxima misterio/cozy**: `ya_lo_lei` en King, Katzenbach,
Carlisle, Benavent, Henry — sagas masivas ya devoradas por Kindle.
- Quemados: Osman t.1-2, Dicker Harry Quebert, Hill, King R5-018,
  Katzenbach M5-024, Carlisle M5-012, Benavent M6-001-009, Henry (ambos),
  Coyle M5-011, Klune-Puerta, Heap House, Bennett-Windsor y libro 2,
  Klune-Somewhere, Doyle-Baskerville, Haig-Biblioteca-medianoche,
  Haig-The-Humans, Christie-Mirrors M5-021, Klune-Puppets,
  Peters-Misterio-en-Egipto M5-019, Haig-How-to-Stop-Time, Backman-Ove
  (fuera del catálogo), Christie-Chimneys M5-020 (usado 02/09).
- Banco redescub: M5-016 Delany libro 2 (esperar señal de M5-014). NO usar
  M5-022, M5-009, M5-008, M5-002, M6 entero (romance/no visto). Limpios en
  M5: Sherlock x4 (M5-033/006/034/035/036).
- Banco nuevo: Haig *Reasons to Stay Alive* (memoir, mismo autor de su
  acierto pleno) — próximo candidato si sigue muda. Si tras 2-3 nuevos más
  sigue sin señal, priorizar redescub confirmado en casa por sobre nuevo.

### Andy — datos duros
Estante L4 (28 + 5 nuevos agosto). Gustos: wellness, autosuperación,
positividad, astronomía, neurociencia, espiritualidad oriental, finanzas,
fábulas. Idioma indistinto. Regla confirmada x3: autor identitario/ya-en-
casa > clásico consagrado sin dueño (Bach 2/2; Brewer 31/08). Fábula
corta (Bach, Hesse, Coelho) sigue siendo su combo más seguro sin ningún
miss. Último voto de botón: Herrigel 26/08 (`me_tienta`+`like`); desde
entonces 7 fichas sin cerrar veredicto pese a dwell fuerte en varias.
- Aciertos: Rovelli, Bach Ilusiones, Holiday (plenos); Cosmos, Bach
  Gaviota, Herrigel (redescub, `me_tienta`+`like`). `ya_lo_lei`: Frankl,
  Meditaciones (clásicos sin dueño).
- Astronomía en pausa: L5-024 Hoyle, L5-021 Whipple. Estoicismo: banco
  Séneca Cartas a Lucilio. Cuerpo/sueño: Walker con primer voto real.
  Neurociencia/hábitos/mindfulness: Seth, Huxley, Fogg, Brewer, todos sin
  veredicto. Oriental nivel 3 en Dalai Lama (30/08), en pausa.
- Banco nuevo: Seligman (psicología positiva, par de Haidt usado hoy),
  Sapolsky *Behave* (en pausa), mindfulness (Thich Nhat Hanh, Kabat-Zinn —
  Pema Chödrön descartada por confusión con Thubten Chodron, L4-016),
  oriental (*Tao Te Ching*, Alan Watts, Suzuki), hábitos (Wendy Wood,
  esperar voto real antes de sumar tercer libro de esa veta).
- Banco redescub: usado 26/08 L4-010, 28/08 L4-014, 30/08 L4-021, 01/09
  L4-015. Próxima prioridad: L4-016 *Budismo para principiantes*. Astro:
  L5-024, L5-021.

## 🛡️ Guardia
"Nuevo": título+autor contra catálogo completo (sin tildes) y contra
`recommended.json` — incluir variantes de nombre parecidas (caso Pema
Chödrön / Thubten Chodron). Campo `to` obligatorio en `queue.json`.
Revisar `subscription.json` cada corrida. `read_status` de enrichment NO
confiable para Sofi (Kindle paralelo); para Andy sí. Buscalibre: siempre
`buscalibre.uy/libros/search/?q=…`; para precio exacto, leer el precio
embebido del producto directo — un mismo título puede tener varias
ediciones a precios muy distintos (declarar cuál se cita). Google Play
404 real (no bloqueo) = link malo: declarar sin publicar, nunca inventar
un ID; lo mismo si hay múltiples narraciones y no se puede identificar
con certeza cuál es la de Google Play (Chimneys 02/09).

## 🔭 Qué mirar (próxima corrida — 03/09, régimen diario)
Mañana se invierte: Andy redescub, Sofi nuevo. (1) Confirmar en
`send_log.json` que `2026-09-02-rec-andy`/`-sofi` salieron ~19:00 -03:00.
(2) Sofi: primer dato de Chimneys (tono humor/aventura) — si sigue muda,
pasar a Sherlock x4 en M5 antes de repetir autor. (3) Si Andy cierra por
fin un voto de botón en cualquiera de las 7 fichas pendientes, usarlo
fuerte — es la señal más valiosa acumulada hasta ahora.

## 🎬 CINE + 🧳 viaje (fuera del ciclo)
Cine: 1/semana, `todos`, viernes ~19:00. Sofi evita gore/subtítulos
siempre; Andy evita "triste", nunca doblado. Severance "me tienta" Andy —
candidata fuerte para la próxima función. Sin Función Nº2 desde 31/07,
fuera del alcance de esta corrida.

## 🧭 Sugerencias hub
`recs/index.html` lista todo leyendo `recommended.json` por fetch — cero
mantenimiento manual. NO TOCAR (ni este ni `recs/setup.html`).
