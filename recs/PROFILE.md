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

## 🚨🚨 ESCALACIÓN GRAVE (29/08): el dispatcher, no el celular, es la causa
Actualización del hallazgo del 27/08→28/08: **NO fue un incidente aislado
"resuelto solo"**. Confirmado hoy con `send_log.json` y el historial de
Actions: `push-dispatch` corre en cron pero deja huecos de varias horas
entre corridas, y esos huecos vienen tapando la ventana `send_at`→
`expires_at` (3h) de la ficha del día DOS VECES SEGUIDAS:
- 27/08: hueco de ~8h (19:21 UTC→03:35 UTC 28/08) — perdió el push de
  `2026-08-27-rec-andy`/`-sofi` (Flow/Mirrors).
- 28/08: hueco de ~6.5h (20:26 UTC→02:51 UTC 29/08) — perdió TAMBIÉN el
  push de `2026-08-28-rec-andy`/`-sofi` (Huxley/Puppets).
Osea: **ANDY tampoco recibió sus últimas 2 fichas** — esto ya no explica
solo el silencio de Sofi desde el 20/08, lo hace más probable que sea
señal técnica y no de contenido, pero también hunde de vuelta la lectura
de que Andy "sigue votando bien": sus últimos votos reales (Herrigel,
26/08) son de antes del corte. Es `.github/` (NO TOCAR, no es mi
territorio arreglarlo), pero el patrón es recurrente, no un blip — vale
la pena que Andy lo sepa y decida si ajustar la frecuencia del cron o
revisar cuota de Actions. Mientras tanto sumé una micro-pregunta directa
(`rec-canal:<REC_ID>`, "me están llegando bien" / "están fallando") en las
dos fichas de hoy para tener señal de primera mano en cuanto alguno la
vea, aunque sea con retraso. Corrección de memoria que sigue vigente: el
acierto Klune `me_tienta`+`love` de Sofi es `2026-08-05-klune-casa-mar-
azul`, no "Puerta" (esa entrada tiene `feedback` en `null`).

## 📅 29/08 — hoy
Cero eventos nuevos desde el cutoff del 27/08 (consistente con que NINGUNA
ficha desde el 26/08 llegó por push a ningún dispositivo — ver escalación
arriba). Régimen: ayer (28/08) Andy tuvo redescub → hoy nuevo; Sofi tuvo
nuevo → hoy redescub. Andy → **BJ Fogg, *Tiny Habits*** (nuevo): primera
prueba real de la veta hábitos (abierta 20/08 con el redescub de Brewer,
sin señal por el corte de canal); Fogg es la fuente del modelo B=MAP que
usa tanto Hábitos Atómicos (ya en su L4-002) como el diseño de producto de
Instagram — gancho verificado (Systrom/Krieger cursaron con él en
Stanford). Evito repetir la veta neurociencia/conciencia del turno
anterior (Huxley). Sofi → **Elizabeth Peters, *Misterio en Egipto***
(M5-019, redescub): autora completamente nueva para ella — ni saga masiva
devorada por Kindle (como King/Christie/Katzenbach/Carlisle) ni autor de
moda; egiptóloga real (Univ. de Chicago) escribiendo aventura victoriana
con humor, tono más cerca de Joyce/Osman que de sus libros más oscuros.
Pushes `2026-08-29-rec-andy` / `-rec-sofi` encolados 19:00 -03:00.

### Log resumido 24–28/08
24/08 Andy→Mackesy (redescub, dwell 140s/80%, sin voto) / Sofi→Klune
*Somewhere Beyond the Sea* (nuevo). 25/08 Andy→Seth *Being You* (nuevo,
click sin voto) / Sofi→Doyle *Baskerville* (redescub). 26/08 Andy→Herrigel
*Zen tiro con arco* (redescub, **me_tienta+like**, último voto real) /
Sofi→Haig *The Humans* (nuevo). 27/08 Andy→Csikszentmihalyi *Flow* (nuevo)
/ Sofi→Christie *Mirrors* (redescub). 28/08 Andy→Huxley *Doors of
Perception* (redescub) / Sofi→Klune *In the Lives of Puppets* (nuevo).
**Ninguna de las 6 fichas 24/08-28/08 tiene feedback aún** — las de 24-26
cayeron antes del corte de dispatcher confirmado y siguen sin explicación
sólida (¿tampoco llegaron, o llegaron y no hubo interés?); las de 27-28
confirmado que no llegaron (ver escalación).

## 📚 Contexto fijo
Catálogo: 437 volúmenes (re-extraer `/tmp/catalog.json` cada corrida).
Suscripción: Andy y Sofi `active` (push sale y se entrega al endpoint —
el problema está antes, en que el dispatcher no corre a tiempo, ver
escalación). M2/M3/M4/M6 pasaron a vitrinas pero libros siguen fichados
con su id de siempre.

### Sofi — vetas confirmadas
Salas: sala King (R4+R5, 50 libros), salón del crimen (M5), rincón Valeria
(M6, quemado). Aciertos duros: **Dicker Harry Quebert `lo_quiero`+`love`**
(17/07); **Klune-Casa-mar-azul `me_tienta`+`love`** (05/08); **Haig
*Biblioteca de medianoche* `lo_quiero`+`love`** (27/07, audiencia todos).
Todo lo de después del 20/08 está mudo por el problema de entrega (ver
escalación) — no tratar como misses de contenido todavía. Romance
contemporáneo (Henry x2): descartado. **Guardia máxima misterio/cozy**:
`ya_lo_lei` en King, Katzenbach, Carlisle, Benavent, Henry — sagas masivas
ya devoradas por Kindle, evitar esos autores puntuales.
- Quemados (además de lo de arriba): Osman t.1-2, Dicker Harry Quebert,
  Hill, King R5-018, Katzenbach M5-024, Carlisle M5-012, Benavent
  M6-001-009, Henry (ambos), Coyle M5-011, Klune-Puerta, Heap House,
  Bennett-Windsor, Klune-Somewhere, Doyle-Baskerville, Haig-Biblioteca-
  medianoche, Haig-The-Humans, Christie-Mirrors M5-021, Klune-Puppets,
  Peters-Misterio-en-Egipto M5-019 (usado 29/08).
- Banco redescub: M5-016 Delany libro 2 (esperar señal de M5-014). NO usar
  M5-022, M5-009, M5-008, M5-002, M6 entero (romance/no visto). Limpios en
  M5: Sherlock x4 más (M5-033/006/034/035/036), Christie M5-020 (*The
  Secret of Chimneys*), S.J. Bennett libro 2.
- Banco nuevo: Backman *Un hombre llamado Ove* (riesgo "ya la vi",
  película), otro Haig si el canal se confirma vivo (*How to Stop Time*,
  *Reasons to Stay Alive*). **Pausa de "nuevos" muy experimentales hasta
  confirmar que el canal funciona** — priorizar redescub confirmado en
  casa cuando el banco nuevo se achique.

### Andy — datos duros
Estante L4 (28 + 5 nuevos agosto). Gustos: wellness, autosuperación,
positividad, astronomía, neurociencia, espiritualidad oriental, finanzas,
fábulas. Idioma indistinto. Regla confirmada x3: autor identitario/ya-en-
casa > clásico consagrado sin dueño. Fábula corta (Bach, Hesse, Mackesy) es
su combo más seguro (2/2 con Bach). Último voto real: Herrigel 26/08
(`me_tienta`+`like`) — todo lo de después (Flow, Huxley, hoy Fogg) corre
el riesgo de estar mudo por el mismo problema de entrega, no de contenido.
- Aciertos: Rovelli, Bach Ilusiones, Holiday (plenos); Cosmos, Bach Gaviota,
  Herrigel (redescub, `me_tienta`+`like`). `ya_lo_lei`: Frankl, Meditaciones
  (clásicos sin dueño).
- Astronomía en pausa: L5-024 Hoyle, L5-021 Whipple. Estoicismo: banco
  Séneca Cartas a Lucilio. Cuerpo/sueño: Walker con primer voto real.
  Neurociencia/conciencia: Seth (25/08) y Huxley (28/08), sin veredicto.
  Oriental nivel 2 confirmado 26/08 (Herrigel). Positividad: Csikszentmihalyi
  *Flow* (27/08), sin veredicto. Hábitos: primera prueba real hoy con Fogg.
- Banco nuevo: Sapolsky *Behave* (neuro, en pausa por repetición reciente),
  mindfulness (Thich Nhat Hanh, Kabat-Zinn — Pema Chödrön queda descartada
  por confusión de nombre con Thubten Chodron, autora de su propio L4-016),
  oriental (*Tao Te Ching*, Alan Watts, Suzuki), psicología positiva
  (Haidt, Seligman), cuerpo (Brewer *Craving Mind*/*Hunger Habit* — mismo
  autor que L4-028, sin señal aún), hábitos (BJ Fogg usado 29/08 — próximo
  si acierta: Wendy Wood *Good Habits, Bad Habits*).
- Banco redescub: usado 26/08 L4-010 (acierto), usado 28/08 L4-014
  (Huxley). Próxima prioridad: L4-021 *Art of Happiness*, L4-015 *El
  Alquimista*, L4-016 *Budismo para principiantes*. Astro: L5-024, L5-021
  (en pausa, ver arriba).

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

## 🔭 Qué mirar (próxima corrida — 30/08, régimen diario)
Mañana se invierte: Sofi nuevo, Andy redescub. (1) Prioridad máxima:
revisar `send_log.json` y confirmar si `2026-08-29-rec-andy`/`-sofi`
salieron esta vez — si vuelve a fallar, ya son 3 días seguidos y hay que
insistir fuerte con Andy en persona (no solo dentro de una ficha que
tampoco le va a llegar). (2) Leer respuestas de `rec-canal:*` de hoy si
llegaron. (3) `rec-robot:2026-08-28-klune-lives-puppets` sigue sin
respuesta — releer si aparece. (4) Si por fin hay señal real de Sofi
(cualquier evento), volver a tratar sus últimas fichas como datos de
contenido, no solo de entrega. Sin señal todavía: Coyle, Delany M5-014,
Rovelli 04/08, Rojas 05/08, Thorogood, vuelo-ebooks.

## 🎬 CINE + 🧳 viaje (fuera del ciclo)
Cine: 1/semana, `todos`, viernes ~19:00. Sofi evita gore/subtítulos
siempre; Andy evita "triste", nunca doblado. Severance "me tienta" Andy —
candidata fuerte para la próxima función. Sin Función Nº2 desde 31/07,
fuera del alcance de esta corrida.

## 🧭 Sugerencias hub
`recs/index.html` lista todo leyendo `recommended.json` por fetch — cero
mantenimiento manual. NO TOCAR (ni este ni `recs/setup.html`).
