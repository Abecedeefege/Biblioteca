# Perfil de gustos — recomendador de Bibliotequeando

## ⚖️ MEZCLA + RÉGIMEN — DIARIO desde 20/08 (reemplaza el semanal del 05/08)
**DOS fichas por día**: UNA para Andy y UNA para Sofi, cada una según SU
perfil y SU feedback. Entre las dos: UNA nueva y UNA de la biblioteca de
la casa, alternando quién recibe la nueva (ver `recommended.json`, qué
recibió cada uno ayer). Push personal a cada uno, ambos ~19:00 -03:00
(`"to":"Andy"`/`"to":"Sofi"`). Fichas pre-armadas cuentan para su
destinatario; construir solo lo que falte, manteniendo el par
nuevo+biblioteca. Cine/series no cambia (viernes ~19:00, `todos`).
**⚠️ Sin sincronizar desde 21/08**: `.claude/commands/recomendacion.md`
sigue describiendo el régimen semanal del 05/08 (Gate domingo) — esta
sección manda hasta que alguien lo actualice; no es territorio mío.

## 🎧 Audio 30s + Google Play, en TODA ficha (desde 04/09)
Toda ficha (nueva o redescub) suma botón de resumen en audio (Web Speech
API, cliente puro) y audiolibro de Google Play si existe, por
título+autor(+narrador) — 403 a bots es bloqueo conocido, se usa igual.
Narración dudosa o sin confirmar = declarar existencia sin linkear.

## 🚨🚨 08/09 — SE FRENÓ el libro de Sofi: push de puro diagnóstico
20 fichas de libro seguidas para Sofi en CERO (último acierto duro es de
antes del 20/08). French (07/09), último intento planeado del banco,
también dio cero. Hoy, en vez de un libro más, `2026-09-08-sofi-
diagnostico-canal.html`: pregunta directa (¿te llegan los avisos y
ninguna te cerró, o no te llega nada?) + qué probar distinto + nota
libre. `kind:"encuesta"` — no cuenta para la alternancia nuevo/redescub
ni para el turno Andy/Sofi (mismo tratamiento que `cine`/`viaje`).
**Mañana (09/09) vuelve el libro para Sofi**, con lo que conteste (o,
si sigue en cero, asumiendo 100% canal roto y escalando de nuevo al
dueño vía nota propia en la próxima ficha).

## 🔎 REVISIÓN IMPORTANTE del diagnóstico (08/09) — no es solo Sofi
Hasta el 07/09 se asumía "canal de Sofi específicamente roto" porque
Andy seguía con señal (Kiyosaki 05/09 cerrado). Hoy, chequeando de
nuevo: **`sync/engagement.json` no tiene NINGÚN evento nuevo desde
2026-09-05T22:57:02Z — ni de Sofi ni de Andy** (Wood 06/09 y Hoyle 07/09
tampoco tienen señal, algo que no le pasaba antes a Andy). Descartado
que sea una falla del pipeline: `notifications/send_log.json` muestra
201 sin excepción en cada push, y el workflow `push-dispatch` (corre
cada ~10 min, sincroniza el relay de Supabase con `tools/
sync_devices.js`) completa en verde siempre, sin commits nuevos porque
no encuentra nada que sincronizar — no es un error del lado servidor.
Dos hipótesis abiertas, ninguna descartable desde acá: (a) la casa
entera estuvo afuera/ocupada estos 3 días (coincide con Andy también
callado, algo nuevo); (b) un problema del lado cliente (engage.js no
cambió desde 25/08, pero no puedo verificar ejecución en los
dispositivos reales). **Para el dueño**: si volvés y ves esto, probaría
tocar cualquier botón de la última ficha tuya para confirmar que el
badge de sync funciona: si ese evento tampoco aparece en
`sync/engagement.json` en minutos, ahí sí hay algo roto de verdad.

## ✅ Canal de Andy — dos patrones distintos
"Abrió y no votó" (Fogg 29/08 dwell 493s, Herrigel 26/08 botón, Haidt
02/09 click+nota dwell 369s, Chodron 03/09 click, Seligman 04/09
click+visita — señal de contenido/CTA, no de desinterés) vs. "nunca
abrió" (Dalai Lama/Brewer 30-31/08 — señal de tiempo, se corrige con
recordatorio si se repite). Kiyosaki 05/09: SÍ cerró botón (ya_lo_lei +
like + audio usado) — único veredicto cerrado desde Coelho 01/09. Wood
(06/09) y Hoyle (07/09) sin señal todavía — ver revisión de arriba,
probablemente explicado por el mismo corte de 3 días que afecta a Sofi,
no por desinterés en hábitos/astronomía.

## 📅 08/09 — hoy
Sin eventos nuevos desde el cutoff (05/09 22:57:02 UTC se mantiene sin
avanzar). Régimen: ayer Andy redescub (Hoyle) → hoy nuevo; Sofi nuevo
(French) → hoy le tocaría redescub, pero se reemplaza por el
diagnóstico de arriba (no gasta veta).
**Andy → Robert Sapolsky, *Compórtate* / *Behave* (2017/2019, nuevo)**:
primera recomendación formal de la veta neurociencia — declarada desde
julio, nunca tuvo libro grande (solo Doidge L4-011 y Eagleman
30/07). Ya había sido MENCIONADO (no recomendado) el 06/08 en la ficha
de ebooks de vuelo, donde tuvo el dwell más alto de toda la corrida
(549s) sin votar libro individual — hoy rota formal y exclusivo para
él. Corregido en la ficha el año de la edición española (2019, no 2020
como quedó mal citado el 06/08). Sin audiolibro en español confirmado
(sí en inglés, Michael Goldstrom); ambos links (compra + audio)
verificados en vivo (200).
**Sofi → diagnóstico de canal, sin libro** (ver arriba).

### Log resumido 01/09–07/09 (hasta 31/08 en `recommended.json`)
01/09 Coelho/redescub(`ya_lo_lei`+like) · Backman/nuevo(CERO). 02/09
Haidt/nuevo(click+nota,369s) · Christie-Chimneys/redescub(CERO). 03/09
Chodron/redescub(click) · Haig-Razones/nuevo(CERO). 04/09 Seligman/nuevo
(click) · Doyle-Aventuras/redescub(CERO). 05/09 Kiyosaki/redescub
(`ya_lo_lei`+like+audio) · Flynn/nuevo(CERO). 06/09 Wood/nuevo(CERO,
pero ver revisión — corte de 3 días) · Doyle-Memorias/redescub(CERO).
07/09 Hoyle/redescub(CERO, ver revisión) · French/nuevo(CERO, 20ª de
Sofi). Formato: Andy·Sofi.

## 📚 Contexto fijo
Catálogo: 437 volúmenes (re-extraer `/tmp/catalog.json` cada corrida).
Suscripción: Andy y Sofi `active` (ambos con sospecha de silencio de 3
días, ver revisión arriba — no es un problema de `subscription.json`).

### Sofi — vetas confirmadas
Salas: King (R4+R5, 50 libros), M5, M6 (quemado). Aciertos duros (todos
pre-20/08): **Dicker HQ `lo_quiero`+`love`**; **Klune-mar-azul
`me_tienta`+`love`**; **Haig *Medianoche* `lo_quiero`+`love`** (todos,
su única señal real). Romance contemporáneo (Henry x2): descartado.
Guardia máxima misterio/cozy: `ya_lo_lei` en King, Katzenbach, Carlisle,
Benavent, Henry.
- Quemados: Osman t.1-2, Dicker HQ, Hill, King R5-018, Katzenbach M5-024,
  Carlisle M5-012, Benavent M6-001-009, Henry x2, Coyle M5-011, Klune x3,
  Heap House, Bennett+secuela, Doyle-Baskerville/Aventuras(M5-036)/
  Memorias(M5-035), Haig x3, Christie x2, Peters-Egipto, Backman-Ove,
  Flynn-Heridas, French-Silencio del Bosque.
- Banco redescub (en pausa hasta resolver el diagnóstico): M5-016
  Delany 2, M5-006 *El Regreso* y M5-034 *Su Último Saludo* (canon
  Doyle), M5-033 (compendio DK, última opción).
- Banco nuevo (en pausa): círculo cozy agotado, Paula Hawkins quedó
  como candidata sin usar si el diagnóstico da "sí me llegan, no me
  cerró ninguna".

### Andy — datos duros
Estante L4 (28+5). Gustos: wellness, autosuperación, positividad,
astronomía, neurociencia, oriental, finanzas, fábulas. Idioma
indistinto. Regla confirmada: autor identitario > clásico sin dueño.
Fábula corta (Bach, Hesse, Coelho) sigue siendo el combo más seguro.
- Botón cerrado: Rovelli, Bach Ilusiones, Holiday, Coelho, Kiyosaki
  (todos con veredicto real). Sin veredicto todavía: Haidt, Chodron,
  Seligman, Wood, Hoyle, Sapolsky (hoy) — la mayoría con click/dwell
  confirmado antes del corte de 3 días.
- Neurociencia: abierta hoy con Sapolsky, la primera "grande" de la
  veta. Si cierra bien, banco sigue con mindfulness (Thich Nhat Hanh,
  Kabat-Zinn) evitando repetir oriental (3 usados seguidos en agosto).
- Hábitos: veta con MÁS engagement crudo pre-corte (Fogg 493s de
  dwell). Wood (06/09) sin señal todavía — ver revisión, no asumir
  desinterés hasta tener más datos post-corte.
- Astronomía: retomada 07/09 (Hoyle, L5-024) tras un mes en pausa.
  Queda L5-021 sin usar si repite bien. Finanzas: cerrada con Kiyosaki
  (`ya_lo_lei`), sin urgencia de volver; si se retoma, L4-001 o L4-006.

## 🛡️ Guardia
Título+autor contra catálogo (sin tildes) y `recommended.json` —
incluir variantes de nombre. Campo `to` obligatorio en `queue.json`.
Revisar `subscription.json` cada corrida. `read_status` de enrichment
no confiable para Sofi (Kindle paralelo); para Andy sí. Si TODAS las
ediciones de Buscalibre figuran agotadas, declararlo y sumar
alternativa verificada en vez de ocultarlo.

## 🔭 Qué mirar (próxima corrida — 09/09)
(1) **CRÍTICO**: ¿hubo algún evento nuevo en `sync/engagement.json`
desde el 05/09 22:57 UTC? Si SIGUE en cero (incluyendo Andy), escalar
de nuevo al dueño — ya no es "gusto de Sofi", es un corte de 3+ días
en TODA la casa. Si aparece señal, ver primero qué contestó Sofi en
`rec-canal:2026-09-08-sofi-diagnostico-canal` y actuar en consecuencia
(volver a libro, cambiar veta, o pausar si pide pausa). (2) Veredicto
de Haidt, Chodron, Seligman, Wood, Hoyle, Sapolsky. (3) Confirmar 201
en `send_log.json` de los dos pushes de hoy.

## 🎬 CINE + 🧳 viaje (fuera del ciclo)
Cine: 1/semana, `todos`, viernes ~19:00. Sofi evita gore/subtítulos;
Andy evita "triste", nunca doblado. Severance "me tienta" Andy —
candidata fuerte. Sin Función Nº2 desde 31/07.

## 🧭 Sugerencias hub
`recs/index.html` lee `recommended.json` por fetch — cero mantenimiento
manual. NO TOCAR (ni este ni `recs/setup.html`).
