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
Pedido de Andy (rec-nota 24/08): toda ficha nueva (y redescub si existe)
suma, si existen, link a **audiolibro** de Google Play y, si no hay
narrado completo, un **resumen**. Verificación SIEMPRE por búsqueda
cruzada título+autor(+narrador) — Google Play devuelve 403 a cualquier
bot/curl. Si no existe ninguna opción, se dice explícito, no se omite.

## ✅ Canal de Andy CONFIRMADO sano (30/08) — Sofi sigue muda
El hueco del dispatcher (27–28/08) no se repitió: `2026-08-29-rec-andy`/
`-sofi` salieron 22:12 UTC (~19:12 -03:00, 12 min tarde, dentro de la
ventana de 3h). Y esta vez SÍ hay prueba de lectura real: `notification_
clicked` + 3 dwell crecientes (478s→493s, 80% scroll) en la ficha de Fogg
la madrugada del 30/08. Canal de Andy: confirmado funcionando de punta a
punta. **Sofi en cambio lleva CERO eventos desde el 20/08** (3ra semana
sin señal) pese a que su suscripción sigue `active` y sus pushes salieron
con 201. Con Andy confirmado sano, el patrón de Sofi ya no se explica por
el mismo bug de horario del dispatcher — hay que empezar a considerar en
serio que ella no está viendo o no está abriendo las notis (dispositivo,
permisos del navegador, o simplemente no le interesa el formato). Sumé
un botón nuevo `rec-canal:*` = "primera vez que veo una de estas fichas"
en la ficha de hoy para distinguir "nunca llegó" de "llegó y no enganchó".
Corrección de memoria que sigue vigente: el acierto Klune `me_tienta`+
`love` de Sofi es `2026-08-05-klune-casa-mar-azul`, no "Puerta" (esa
entrada tiene `feedback` en `null`).

## 📅 30/08 — hoy
Cero eventos nuevos de Sofi; de Andy, la señal fuerte de arriba (Fogg,
sin veredicto de botón todavía pese a ~8min de lectura real). Régimen:
ayer (29/08) Andy tuvo nuevo → hoy redescub; Sofi tuvo redescub → hoy
nuevo. Andy → **Dalai Lama & Howard C. Cutler, *The Art of Happiness***
(L4-021, redescub): sube un escalón la veta oriental que abrió Herrigel
(26/08, único voto real: `me_tienta`+`like`) — no un texto antiguo
traducido sino una entrevista real de un psiquiatra occidental al Dalai
Lama, cruzando oriental con positividad/autosuperación (declaradas día 1).
Sofi → **Matt Haig, *How to Stop Time*** (nuevo, en inglés — la edición en
español está agotada hoy en Buscalibre): tercer ángulo del único autor
con acierto pleno confirmado de ella (Biblioteca de medianoche,
`lo_quiero`+`love`); mismo tono cálido y especulativo que The Humans
(26/08, todavía mudo), mecanismo distinto (inmortalidad, no vidas
paralelas). Pushes `2026-08-30-rec-andy`/`-rec-sofi` encolados 19:00
-03:00.

### Log resumido 24–29/08
24/08 Andy→Mackesy (redescub, dwell 140s/80%, sin voto) / Sofi→Klune
*Somewhere Beyond the Sea* (nuevo). 25/08 Andy→Seth *Being You* (nuevo,
click sin voto) / Sofi→Doyle *Baskerville* (redescub). 26/08 Andy→Herrigel
*Zen tiro con arco* (redescub, **me_tienta+like**, último voto de botón)
/ Sofi→Haig *The Humans* (nuevo). 27/08 Andy→Csikszentmihalyi *Flow*
(nuevo) / Sofi→Christie *Mirrors* (redescub) — push perdido por hueco del
dispatcher. 28/08 Andy→Huxley *Doors of Perception* (redescub) / Sofi→
Klune *In the Lives of Puppets* (nuevo) — push perdido, mismo hueco.
29/08 Andy→Fogg *Tiny Habits* (nuevo, **dwell fuerte 493s/80%, sin
veredicto de botón** — ver sección de canal arriba) / Sofi→Peters
*Misterio en Egipto* (redescub, sin señal). Ninguna ficha de Sofi desde
el 20/08 tiene feedback.

## 📚 Contexto fijo
Catálogo: 437 volúmenes (re-extraer `/tmp/catalog.json` cada corrida).
Suscripción: Andy y Sofi `active`. M2/M3/M4/M6 pasaron a vitrinas pero
libros siguen fichados con su id de siempre.

### Sofi — vetas confirmadas
Salas: sala King (R4+R5, 50 libros), salón del crimen (M5), rincón Valeria
(M6, quemado). Aciertos duros: **Dicker Harry Quebert `lo_quiero`+`love`**
(17/07); **Klune-Casa-mar-azul `me_tienta`+`love`** (05/08); **Haig
*Biblioteca de medianoche* `lo_quiero`+`love`** (27/07, audiencia todos).
Todo lo de después del 20/08 sigue sin feedback — no tratar como misses
de contenido todavía, pero ya no asumir que es solo el dispatcher (ver
sección de canal). Romance contemporáneo (Henry x2): descartado.
**Guardia máxima misterio/cozy**: `ya_lo_lei` en King, Katzenbach,
Carlisle, Benavent, Henry — sagas masivas ya devoradas por Kindle, evitar
esos autores puntuales.
- Quemados (además de lo de arriba): Osman t.1-2, Dicker Harry Quebert,
  Hill, King R5-018, Katzenbach M5-024, Carlisle M5-012, Benavent
  M6-001-009, Henry (ambos), Coyle M5-011, Klune-Puerta, Heap House,
  Bennett-Windsor, Klune-Somewhere, Doyle-Baskerville, Haig-Biblioteca-
  medianoche, Haig-The-Humans, Christie-Mirrors M5-021, Klune-Puppets,
  Peters-Misterio-en-Egipto M5-019, Haig-How-to-Stop-Time (usado 30/08).
- Banco redescub: M5-016 Delany libro 2 (esperar señal de M5-014). NO usar
  M5-022, M5-009, M5-008, M5-002, M6 entero (romance/no visto). Limpios en
  M5: Sherlock x4 más (M5-033/006/034/035/036), Christie M5-020 (*The
  Secret of Chimneys*), S.J. Bennett libro 2.
- Banco nuevo: Backman *Un hombre llamado Ove* (riesgo "ya la vi",
  película), Haig *Reasons to Stay Alive* (memoir, no ficción — cambia de
  formato, evaluar si vale la pena). Sin más Haig de ficción sin repetir
  tono. Si tras 2-3 nuevos más sigue sin señal, priorizar redescub
  confirmado en casa por sobre nuevo experimental.

### Andy — datos duros
Estante L4 (28 + 5 nuevos agosto). Gustos: wellness, autosuperación,
positividad, astronomía, neurociencia, espiritualidad oriental, finanzas,
fábulas. Idioma indistinto. Regla confirmada x3: autor identitario/ya-en-
casa > clásico consagrado sin dueño. Fábula corta (Bach, Hesse, Mackesy) es
su combo más seguro (2/2 con Bach). Último voto de botón: Herrigel 26/08
(`me_tienta`+`like`); desde entonces, dwell fuerte sin cerrar veredicto en
Flow/Huxley/Fogg — canal confirmado sano (ver arriba), así que el silencio
del botón ahora sí es dato de contenido o de fricción del CTA, no de
entrega.
- Aciertos: Rovelli, Bach Ilusiones, Holiday (plenos); Cosmos, Bach Gaviota,
  Herrigel (redescub, `me_tienta`+`like`). `ya_lo_lei`: Frankl, Meditaciones
  (clásicos sin dueño).
- Astronomía en pausa: L5-024 Hoyle, L5-021 Whipple. Estoicismo: banco
  Séneca Cartas a Lucilio. Cuerpo/sueño: Walker con primer voto real.
  Neurociencia/conciencia: Seth (25/08) y Huxley (28/08), sin veredicto.
  Oriental nivel 2 confirmado 26/08 (Herrigel), nivel 3 hoy (Dalai Lama).
  Positividad: Flow (27/08) y hoy Dalai Lama, sin veredicto de botón.
  Hábitos: Fogg (29/08), dwell fuerte sin veredicto.
- Banco nuevo: Sapolsky *Behave* (neuro, en pausa por repetición reciente),
  mindfulness (Thich Nhat Hanh, Kabat-Zinn — Pema Chödrön queda descartada
  por confusión de nombre con Thubten Chodron, autora de su propio L4-016),
  oriental (*Tao Te Ching*, Alan Watts, Suzuki), psicología positiva
  (Haidt, Seligman), cuerpo (Brewer *Craving Mind*/*Hunger Habit* — mismo
  autor que L4-028, sin señal aún), hábitos (próximo si Fogg cierra con
  voto: Wendy Wood *Good Habits, Bad Habits*).
- Banco redescub: usado 26/08 L4-010, 28/08 L4-014, 30/08 L4-021 (Dalai
  Lama). Próxima prioridad: L4-015 *El Alquimista*, L4-016 *Budismo para
  principiantes*. Astro: L5-024, L5-021 (en pausa, ver arriba).

## 🛡️ Guardia
"Nuevo": título+autor contra catálogo completo (sin tildes) y contra
`recommended.json` — incluir variantes de nombre parecidas (ver caso Pema
Chödrön / Thubten Chodron arriba, mismo apellido fonético, personas
distintas). Campo `to` obligatorio en `queue.json`. Revisar
`subscription.json` cada corrida. `read_status` de enrichment NO confiable
para Sofi (Kindle paralelo); para Andy sí. Buscalibre: siempre
`buscalibre.uy/libros/search/?q=…`; para precio exacto, buscar el link de
producto directo (buscarlo por nombre en la web si el buscador no lo
muestra) y leer su `"price"`/`"priceCurrency"` en el HTML — la vista de
búsqueda no lo expone, carga por JS.

## 🔭 Qué mirar (próxima corrida — 31/08, régimen diario)
Mañana se invierte: Andy nuevo, Sofi redescub. (1) Confirmar en
`send_log.json` que `2026-08-30-rec-andy`/`-sofi` salieron ~19:00 -03:00.
(2) Leer respuestas de `rec-canal:*` de hoy — sobre todo si Sofi por fin
contesta algo, aunque sea "primera vez que veo esto". (3) Si Andy cierra
un veredicto de botón en Fogg o en Dalai Lama, es la primera confirmación
de contenido en varios días — usarla fuerte para afinar la próxima veta.
(4) Si Sofi sigue en cero después de esta ficha (su 4ta semana muda),
vale la pena que la nota se lo diga directo al dueño en la próxima ficha
de Andy, ya no solo archivarlo acá. Sin señal todavía: Coyle, Delany
M5-014, Rovelli 04/08, Rojas 05/08, Thorogood, vuelo-ebooks.

## 🎬 CINE + 🧳 viaje (fuera del ciclo)
Cine: 1/semana, `todos`, viernes ~19:00. Sofi evita gore/subtítulos
siempre; Andy evita "triste", nunca doblado. Severance "me tienta" Andy —
candidata fuerte para la próxima función. Sin Función Nº2 desde 31/07,
fuera del alcance de esta corrida.

## 🧭 Sugerencias hub
`recs/index.html` lista todo leyendo `recommended.json` por fetch — cero
mantenimiento manual. NO TOCAR (ni este ni `recs/setup.html`).
