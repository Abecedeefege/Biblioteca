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

## 🎧 Google Play Books en TODAS las fichas (desde 24/08)
Pedido de Andy (rec-nota 24/08): toda ficha nueva (y redescub si existe)
suma, si existen, link a **audiolibro** de Google Play y, si no hay
narrado completo, un **resumen**. Verificación SIEMPRE por búsqueda
cruzada título+autor(+narrador) — Google Play devuelve 403 a cualquier
bot/curl (eso SÍ se usa igual, es bloqueo conocido). Un **404 real**
("Not Found", no la página de bloqueo) es otra cosa: link inválido de
verdad — no se publica, se declara la existencia sin link (caso Bennett
31/08). Dato nuevo 01/09: el link de audiolibro de Ove SÍ devolvió 200 al
curl directo (no todo Google Play bloquea bots por igual) — no cambia la
política, solo confirma que el bloqueo no es universal.

## 🚨 Sofi: silencio de canal prolongado — CORRECCIÓN de fecha (01/09)
La entrada anterior de este archivo decía "6 semanas sin señal (20/08 →
31/08)" — es un error de conteo, esas son ~12 días corridos (11 fichas),
no semanas. Corregido acá. El hecho de fondo sigue firme: cero eventos
suyos en `sync/engagement.json` desde el 20/08 (su único voto real,
Klune me_tienta+love), pese a suscripción `active` y pushes saliendo con
201 (confirmado en `send_log.json`), en 6 géneros distintos ya probados
dentro de la misma familia amplia (misterio/cozy/gótico/histórico/
especulativo cálido). Con el canal de Andy confirmado sano, ya no se
explica por bug del dispatcher. 01/09: primer cambio de familia de género
completo (ver log de hoy) en vez de otro nombre dentro de la misma
góndola — sigo construyendo fichas de calidad; parar no diagnostica nada.

## ✅ Canal de Andy confirmado sano (30/08)
`2026-08-29-rec-andy`/`-sofi` salieron ~19-22h UTC dentro de ventana.
Prueba de lectura real en Andy: `notification_clicked` + dwells
crecientes (478s→493s, 80% scroll) en Fogg. Su último voto de BOTÓN sigue
siendo Herrigel (26/08, `me_tienta`+`like`) — desde entonces, 6 fichas
seguidas (Flow/Huxley/Fogg/Dalai Lama/Craving Mind/hoy Alquimista) sin
cerrar veredicto pese a dwell fuerte en varias: dato de contenido o
fricción del CTA, no de entrega (el canal ya está descartado como causa).

## 📅 01/09 — hoy
Cero eventos nuevos de ninguno de los dos desde el cutoff (30/08 04:54
UTC) — nada que reprocesar; ambos pushes del 31/08 salieron (`sent`,
confirmado en `send_log.json`, aunque tarde: ~21:45 -03:00, casi al
límite de la ventana de expiración de las 23:00 — vigilar si el
dispatcher sigue corriendo con este retraso). Régimen: ayer Andy tuvo
nuevo (Brewer) → hoy redescub; Sofi tuvo redescub (Bennett) → hoy nuevo.
**Andy → Paulo Coelho, *El Alquimista*** (L4-015, redescub): vuelta al
combo más seguro y con más aciertos limpios de toda la corrida — fábula
corta (Bach 2/2, Hesse con dwell fuerte) — después de 3 redescubrimientos
seguidos en la veta oriental/filosófica (Herrigel, Huxley, Dalai Lama).
Riesgo declarado de frente en la ficha: es la fábula más leída del
planeta (65M+ copias, récord Guinness), mucho más masiva que Bach — alto
riesgo real de `ya_lo_lei`, pero se lee igual como acierto de puntería si
pasa, no como fallo de guardia.
**Sofi → Fredrik Backman, *Un hombre llamado Ove*** (nuevo): primer
cambio de FAMILIA de género completo, no otro nombre en la misma góndola
de misterio/cozy — literatura contemporánea de personaje, sin crimen.
Se mantiene el único patrón confirmado (Biblioteca de medianoche: arranca
oscuro, termina cálido) aplicado con otro autor. Sumada micro-pregunta
`rec-vio-pelicula` (hay 2 adaptaciones, riesgo real de "ya la vi").
Pushes `2026-09-01-rec-andy`/`-rec-sofi` encolados 19:00 -03:00.

### Log resumido 25/08–31/08
25/08 Andy→Seth *Being You* (nuevo, click sin voto) / Sofi→Doyle
*Baskerville* (redescub). 26/08 Andy→Herrigel *Zen tiro con arco*
(redescub, **me_tienta+like**, último voto de botón) / Sofi→Haig *The
Humans* (nuevo). 27/08 Andy→Csikszentmihalyi *Flow* (nuevo) / Sofi→
Christie *Mirrors* (redescub, push perdido por hueco del dispatcher).
28/08 Andy→Huxley *Doors of Perception* (redescub) / Sofi→Klune *In the
Lives of Puppets* (nuevo, mismo hueco). 29/08 Andy→Fogg *Tiny Habits*
(nuevo, dwell fuerte 493s/80%, sin veredicto de botón) / Sofi→Peters
*Misterio en Egipto* (redescub, sin señal). 30/08 Andy→Dalai Lama *The
Art of Happiness* (redescub, sin señal) / Sofi→Haig *How to Stop Time*
(nuevo, sin señal). 31/08 Andy→Brewer *The Craving Mind* (nuevo, sin
señal) / Sofi→Bennett *A Three Dog Problem* (redescub, secuela de
Windsor Knot, sin señal). Ninguna ficha de Sofi tiene feedback desde el
20/08.

## 📚 Contexto fijo
Catálogo: 437 volúmenes (re-extraer `/tmp/catalog.json` cada corrida).
Suscripción: Andy y Sofi `active`. M2/M3/M4/M6 pasaron a vitrinas pero
libros siguen fichados con su id de siempre.

### Sofi — vetas confirmadas
Salas: sala King (R4+R5, 50 libros), salón del crimen (M5), rincón Valeria
(M6, quemado). Aciertos duros: **Dicker Harry Quebert `lo_quiero`+`love`**
(17/07); **Klune-Casa-mar-azul `me_tienta`+`love`** (05/08, su ÚNICA señal
desde el 20/08 sigue siendo esta); **Haig *Biblioteca de medianoche*
`lo_quiero`+`love`** (27/07, audiencia todos) — el patrón "arranca oscuro,
termina cálido" que hoy se prueba con Backman. Romance contemporáneo
(Henry x2): descartado.
**Guardia máxima misterio/cozy**: `ya_lo_lei` en King, Katzenbach,
Carlisle, Benavent, Henry — sagas masivas ya devoradas por Kindle, evitar
esos autores puntuales.
- Quemados (además de lo de arriba): Osman t.1-2, Dicker Harry Quebert,
  Hill, King R5-018, Katzenbach M5-024, Carlisle M5-012, Benavent
  M6-001-009, Henry (ambos), Coyle M5-011, Klune-Puerta, Heap House,
  Bennett-Windsor y libro 2, Klune-Somewhere, Doyle-Baskerville,
  Haig-Biblioteca-medianoche, Haig-The-Humans, Christie-Mirrors M5-021,
  Klune-Puppets, Peters-Misterio-en-Egipto M5-019, Haig-How-to-Stop-Time,
  Backman-Ove (fuera del catálogo, banco nuevo usado 01/09).
- Banco redescub: M5-016 Delany libro 2 (esperar señal de M5-014). NO usar
  M5-022, M5-009, M5-008, M5-002, M6 entero (romance/no visto). Limpios en
  M5: Sherlock x4 (M5-033/006/034/035/036), Christie M5-020 (*The Secret
  of Chimneys*).
- Banco nuevo: Haig *Reasons to Stay Alive* (memoir, mismo autor de su
  acierto pleno, cambia de formato) — próximo candidato si Ove tampoco
  genera señal. Si tras 2-3 nuevos más sigue muda, priorizar redescub
  confirmado en casa por sobre nuevo experimental.

### Andy — datos duros
Estante L4 (28 + 5 nuevos agosto). Gustos: wellness, autosuperación,
positividad, astronomía, neurociencia, espiritualidad oriental, finanzas,
fábulas. Idioma indistinto. Regla confirmada x3: autor identitario/ya-en-
casa > clásico consagrado sin dueño (Bach 2/2; Brewer 31/08). Fábula
corta (Bach, Hesse, Coelho desde hoy) sigue siendo su combo más seguro y
la única veta sin ningún miss hasta ahora. Último voto de botón: Herrigel
26/08 (`me_tienta`+`like`); desde entonces 6 fichas sin cerrar veredicto
pese a dwell fuerte en varias — canal sano, dato de contenido o fricción
del CTA.
- Aciertos: Rovelli, Bach Ilusiones, Holiday (plenos); Cosmos, Bach
  Gaviota, Herrigel (redescub, `me_tienta`+`like`). `ya_lo_lei`: Frankl,
  Meditaciones (clásicos sin dueño) — Coelho hoy corre el mismo riesgo por
  fama, pero dentro de la veta fábula que nunca falló.
- Astronomía en pausa: L5-024 Hoyle, L5-021 Whipple. Estoicismo: banco
  Séneca Cartas a Lucilio. Cuerpo/sueño: Walker con primer voto real.
  Neurociencia/hábitos: Seth, Huxley, Fogg, Brewer, todos sin veredicto
  todavía — usar el próximo voto real (el que sea) fuerte para afinar.
  Oriental nivel 3 en Dalai Lama (30/08), en pausa por hoy (fábula).
- Banco nuevo: Sapolsky *Behave* (en pausa por repetición reciente),
  mindfulness (Thich Nhat Hanh, Kabat-Zinn — Pema Chödrön descartada por
  confusión con Thubten Chodron, L4-016), oriental (*Tao Te Ching*, Alan
  Watts, Suzuki), psicología positiva (Haidt, Seligman), hábitos (Wendy
  Wood *Good Habits, Bad Habits*, esperar voto real antes de sumar un
  tercer libro de esa veta).
- Banco redescub: usado 26/08 L4-010, 28/08 L4-014, 30/08 L4-021, 01/09
  L4-015. Próxima prioridad: L4-016 *Budismo para principiantes*
  (oriental, autora sin ninguna huella previa). Astro: L5-024, L5-021.

## 🛡️ Guardia
"Nuevo": título+autor contra catálogo completo (sin tildes) y contra
`recommended.json` — incluir variantes de nombre parecidas (ver caso Pema
Chödrön / Thubten Chodron, mismo apellido fonético, personas distintas).
Campo `to` obligatorio en `queue.json`. Revisar `subscription.json` cada
corrida. `read_status` de enrichment NO confiable para Sofi (Kindle
paralelo); para Andy sí. Buscalibre: siempre
`buscalibre.uy/libros/search/?q=…`; para precio exacto, buscar el link de
producto directo y leer su `"price"`/campo embebido en el HTML — CUIDADO:
un mismo título puede tener varias ediciones a precios muy distintos
(caso Ove 01/09: usada importada de España vs. nueva HarperCollins,
diferencia de 4x) — declarar cuál precio se está citando. Un link de
Google Play con 404 real (no la página de bloqueo de bots) es un link
malo: declarar la existencia sin publicarlo, nunca inventar un ID.

## 🔭 Qué mirar (próxima corrida — 02/09, régimen diario)
Mañana se invierte: Andy nuevo, Sofi redescub. (1) Confirmar en
`send_log.json` que `2026-09-01-rec-andy`/`-sofi` salieron ~19:00 -03:00
y sin el retraso del 31/08. (2) Sofi: primer dato del cambio de familia
de género con Ove — si sigue muda, el próximo paso es Haig *Reasons to
Stay Alive* (mismo autor exitoso, otro formato) antes de otro autor
nuevo sin relación. (3) Si Andy cierra por fin un voto de botón en
cualquiera de las 6 fichas pendientes (Flow/Huxley/Fogg/Dalai
Lama/Craving Mind/Alquimista), usarlo fuerte — es la señal más valiosa
acumulada hasta ahora. Sin señal todavía: Coyle, Delany M5-014, Rovelli
04/08, Rojas 05/08, Thorogood, vuelo-ebooks.

## 🎬 CINE + 🧳 viaje (fuera del ciclo)
Cine: 1/semana, `todos`, viernes ~19:00. Sofi evita gore/subtítulos
siempre; Andy evita "triste", nunca doblado. Severance "me tienta" Andy —
candidata fuerte para la próxima función. Sin Función Nº2 desde 31/07,
fuera del alcance de esta corrida.

## 🧭 Sugerencias hub
`recs/index.html` lista todo leyendo `recommended.json` por fetch — cero
mantenimiento manual. NO TOCAR (ni este ni `recs/setup.html`).
