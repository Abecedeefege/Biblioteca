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

## 🚨 ESCALACIÓN vigente: canal de Sofi, probable problema de entrega
Desde el 20/08, CERO eventos de Sofi en `sync/engagement.json` pese a
`subscription.json` `active` y `send_log.json` con `status_code:201` en
cada envío (el push sale y se entrega al endpoint). Se probaron 7 géneros
distintos y un cambio de formato (25/08) sin generar ni una apertura —
la hipótesis de contenido está descartada, **se lee como problema técnico**
(permiso de notificaciones, canal roto, o simplemente no mira el celu).
Reportado a Andy explícito el 26/08 — no se repite el diagnóstico dentro
de cada ficha. Se sigue mandando su ficha diaria igual (régimen no
negociable), priorizando redescub confirmado en casa sobre "nuevos"
experimentales, por si el canal se destraba.

## 📅 27/08 — hoy
Andy: procesado el evento más claro en semanas — click al push de Herrigel
(07:27), dwell 175s/34%, **veredicto `me_tienta` + reacción `like`**: rompe
la racha de "lee entero y no vota" que venía desde Walker. Señal mixta a
anotar: a "¿lo agarrás esta noche?" contestó `ya_leido` (el libro es más
viejo de lo que decía `enrichment.json`, que no tenía entrada de lectura) —
guardia actualizada: ausencia de entrada NO es garantía de "no leído".
Sofi: **séptima ficha muda seguida** (20 al 26/08), cero eventos otra vez —
la escalación ya está reportada a Andy (26/08), no se repite el diagnóstico
dentro de la ficha de hoy.
Régimen: ayer Andy tuvo redescub → hoy nuevo; Sofi tuvo nuevo → hoy
redescub. Andy → **Csikszentmihalyi, *Flow*** (nuevo): abre la veta
"positividad" declarada el día 1 y nunca antes probada a fondo (solo
mención de pasada en la lista de vuelo del 06/08); puente explícito con
Herrigel de ayer (el mismo estado sin ego, medido en laboratorio en vez de
descrito con una flecha). Sofi → **Agatha Christie, *They Do It with
Mirrors*** (M5-021, redescub): la autora fundacional del género que
declara como gusto central y que tiene DOS veces en su propio estante sin
que nunca le haya dado ficha — se prioriza sobre otro Sherlock para variar
autor (Baskerville fue hace solo 2 turnos). Pushes `2026-08-27-rec-andy` /
`-rec-sofi` (19:00).

### Log resumido 20–26/08
20/08 Andy→Brewer *Ansiedad* (redescub) / Sofi→Klune-Puerta (nuevo). 21/08
Andy→Nestor *Respira* (nuevo, dwell 350s/99%, sin voto) / Sofi→Carey *Heap
House* (redescub). 22/08 Andy→Raspall *Calmar la mente* (redescub) /
Sofi→Baldree *Café de leyendas* (nuevo). 23/08 Andy→Walker (nuevo,
me_tienta + dwell 376s/100% — rompió racha muda de 9) / Sofi→Bennett
*Windsor Knot* (redescub). 24/08 Andy→Mackesy (redescub, dwell 140s/80%,
sin voto) / Sofi→Klune *Somewhere Beyond the Sea* (nuevo). 25/08 Andy→Seth
*Being You* (nuevo, click sin voto) / Sofi→Doyle *Baskerville* (redescub).
26/08 Andy→Herrigel *Zen tiro con arco* (redescub, **me_tienta + like**) /
Sofi→Haig *The Humans* (nuevo). Sofi: 7/7 fichas mudas desde el 20/08
(ver escalación arriba).

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
  Baskerville, Haig-Biblioteca-medianoche, Haig-The-Humans (usado 26/08),
  Christie-Mirrors M5-021 (usado 27/08).
- Banco redescub: M5-016 Delany libro 2 (esperar señal de M5-014). NO usar
  M5-022, M5-009, M5-008, M5-002, M6 entero (romance/no visto). Limpios en
  M5: Sherlock x4 más (M5-033/006/034/035/036), Christie M5-020 (*The Secret
  of Chimneys*, más liviana que Mirrors), Peters *Misterio en Egipto*
  (M5-019), S.J. Bennett libro 2.
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
su combo más seguro (2/2 con Bach). **Patrón de dwell-sin-voto (23-25/08)
roto el 27/08**: Herrigel (26/08) generó `me_tienta` + reacción `like` —
segundo voto real desde Walker, el formato sigue funcionando.
- Aciertos: Rovelli, Bach Ilusiones, Holiday (plenos); Cosmos, Bach Gaviota,
  Herrigel (redescub, `me_tienta`+`like`). `ya_lo_lei`: Frankl, Meditaciones
  (clásicos sin dueño).
- Astronomía en pausa: L5-024 Hoyle, L5-021 Whipple. Rovelli identitario: si
  Orden del Tiempo acierta, próximo Helgoland. Estoicismo: banco Séneca
  Cartas a Lucilio. Cuerpo/sueño: Walker con primer voto real. Neurociencia/
  mente abierta 25/08 (Seth, sin veredicto todavía). Oriental nivel 2
  confirmado 26/08 (Herrigel, ángulo "soltar" — acierto). Positividad /
  psicología positiva abierta 27/08 (Csikszentmihalyi *Flow*, sin veredicto
  todavía) — puente explícito con el acierto de Herrigel.
- Banco nuevo: Sapolsky *Behave*, mindfulness (Thich Nhat Hanh, Tolle, Pema
  Chödrön, Kabat-Zinn), oriental (*Tao Te Ching*, Alan Watts, Suzuki,
  *Bhagavad Gita*), psicología positiva (Haidt, Seligman — Csikszentmihalyi
  usado 27/08), cuerpo (Brewer *Craving Mind*/*Hunger Habit*), hábitos
  (veta abierta 20/08, sin confirmar).
- Banco redescub: usado 26/08 L4-010 (acierto). Próxima prioridad: L4-014
  *Doors of Perception*, L4-016 *Budismo para principiantes*, L4-021 *Art
  of Happiness*, L4-015 *El Alquimista*. Astro: L5-024, L5-021.

## 🛡️ Guardia
"Nuevo": título+autor contra catálogo completo (sin tildes) y contra
`recommended.json`. Campo `to` obligatorio en `queue.json`. Revisar
`subscription.json` cada corrida. `read_status` de enrichment NO confiable
para Sofi (Kindle paralelo); para Andy sí. Buscalibre: siempre
`buscalibre.uy/libros/search/?q=…`; para precio exacto, buscar el link de
producto directo y leer su JSON-LD `offers.price` (el buscador no lo
expone). Re-catalogación de agosto: libros M5/M6 con `note:"no visto"` no
confirmados hasta ver en persona.

## 🔭 Qué mirar (próxima corrida — 28/08, régimen diario)
Mañana se invierte: Andy redescub, Sofi nuevo. Prioridad: (1) **Sofi —
¿algo, lo que sea, en Christie-Mirrors o en cualquier notificación?** Van
7 fichas mudas; si sigue en cero, insistir con Andy en el reporte para que
confirme en persona con Sofi si le llegan las notis (permiso del navegador,
modo no molestar, o simplemente no mira el celu) — ya no es un problema
que una ficha nueva pueda resolver sola. (2) ¿Flow (Csikszentmihalyi)
genera voto o dwell alto, dado que Herrigel rompió la racha muda? (3)
¿Being You (Seth) o Mackesy generan voto tardío? Sin señal: Coyle (16/08),
Delany M5-014, Rovelli 04/08, Rojas 05/08, Thorogood, vuelo-ebooks.

## 🎬 CINE + 🧳 viaje (fuera del ciclo)
Cine: 1/semana, `todos`, viernes ~19:00. Sofi evita gore/subtítulos
siempre; Andy evita "triste", nunca doblado. Severance "me tienta" Andy —
candidata fuerte para la próxima función. Sin Función Nº2 desde 31/07,
fuera del alcance de esta corrida.

## 🧭 Sugerencias hub
`recs/index.html` lista todo leyendo `recommended.json` por fetch — cero
mantenimiento manual. NO TOCAR (ni este ni `recs/setup.html`).
