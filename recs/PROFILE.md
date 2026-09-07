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

## 🚨🚨 Sofi: 18 fichas seguidas en CERO — canal, no gusto (07/09)
Doyle-Memorias (06/09) sigue en cero (0 eventos nuevos en todo
`sync/engagement.json` desde el cutoff del 05/09 — ni Sofi ni Andy
tocaron nada en las ~19-20h desde que salieron los pushes de ayer, así
que ninguna de las dos fichas del 06/09 tiene todavía señal alguna).
Sigue sin confirmarse ni descartarse el pedido de chequeo manual del
teléfono escalado al dueño el 06/09. **No se re-escala hoy** (ya está
escalado, sin novedad que agregar); se mantiene el plan: si French
(07/09, último intento del banco antes de asumir 100% canal roto)
también da cero, el próximo turno de Sofi va con push de puro
diagnóstico, sin libro.

## ✅ Canal de Andy — dos patrones distintos
"Abrió y no votó" (Fogg 29/08 dwell 493s, Herrigel 26/08 botón, Haidt
02/09 click+nota dwell 369s, Chodron 03/09 click, Seligman 04/09
click+visita — señal de contenido/CTA, no de desinterés) vs. "nunca
abrió" (Dalai Lama/Brewer 30-31/08 — señal de tiempo, se corrige con
recordatorio si se repite). Kiyosaki 05/09: SÍ cerró botón (ya_lo_lei +
like + audio usado) — único veredicto cerrado desde Coelho 01/09. Wood
(06/09) todavía sin señal (recién salió anoche). Todavía sin veredicto:
Haidt, Chodron, Seligman, Wood.

## 📅 07/09 — hoy
Sin eventos nuevos desde el cutoff (05/09 22:57:02 UTC se mantiene sin
avanzar: 0 eventos posteriores en `sync/engagement.json`). Las dos
fichas de ayer (Wood/Andy, Doyle-Memorias/Sofi) están demasiado
recientes para tener señal. Régimen: ayer Andy nuevo (Wood) → hoy
redescub; Sofi redescub (Doyle-Memorias) → hoy nuevo.
**Andy → Fred Hoyle, *Frontiers of Astronomy* (1955, L5-024)**
(redescub): retomo la veta con mejor puntería REAL de toda la corrida
(Rovelli 16/07 `lo_quiero` 182s, Sagan 22/07 `me_tienta` 187s), en pausa
desde el 04/08 — más de un mes sin tocarla mientras rotaban hábitos/
finanzas/positividad sin cerrar botones. Ángulo verificado: Hoyle acuñó
sin querer el término "Big Bang" en una transmisión de la BBC de 1949
para burlarse de esa teoría, y este libro es su defensa del estado
estacionario, la teoría que perdió 9 años después. Sin audiolibro
(busqué y no existe; se declaró la ausencia en vez de inventar).
**Sofi → Tana French, *El Silencio del Bosque* / *In the Woods* (2007)**
(nuevo): del banco ya anotado ayer como último intento antes de asumir
canal roto al 100%. Primera novela de la autora (premio Edgar), la
crítica la compara en densidad y atmósfera con sus 50 King — sin ser
ninguno de ellos (guardia reforzada). Precio y stock de la edición en
español (AdN 2024, $798 UYU) verificados en vivo; audiolibro en inglés
(Steven Crossley) confirmado por búsqueda, linkeado pese al 403 a bots
conocido de Google Play. Pushes `-rec-andy`/`-rec-sofi` hoy 19:00 -03:00.

### Log resumido 29/08–06/09 (26-28/08 en `recommended.json`)
29/08 Fogg/nuevo(493s) · Peters/redescub. 30/08 DalaiLama/redescub(CERO)
· Haig-Stop-Time/nuevo. 31/08 Brewer/nuevo(CERO) · Bennett/redescub.
01/09 Coelho/redescub(`ya_lo_lei`+like) · Backman/nuevo. 02/09 Haidt/
nuevo(click+nota,369s) · Christie-Chimneys/redescub. 03/09 Chodron/
redescub(click+audio) · Haig-Razones/nuevo(CERO). 04/09 Seligman/nuevo
(click) · Doyle-Aventuras/redescub(CERO). 05/09 Kiyosaki/redescub
(`ya_lo_lei`+like+audio) · Flynn/nuevo(CERO, 17ª). 06/09 Wood/nuevo(sin
señal aún) · Doyle-Memorias/redescub(CERO, 18ª). Formato: Andy·Sofi.

## 📚 Contexto fijo
Catálogo: 437 volúmenes (re-extraer `/tmp/catalog.json` cada corrida).
Suscripción: Andy y Sofi `active` (Sofi con sospecha de canal roto, ver
arriba pese al status).

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
  Memorias(M5-035,06/09), Haig x3, Christie x2, Peters-Egipto, Backman-
  Ove, Flynn-Heridas, French-Silencio del Bosque (07/09).
- Banco redescub: M5-016 Delany 2, M5-006 *El Regreso* y M5-034 *Su
  Último Saludo* (canon Doyle), M5-033 (compendio DK, última opción).
- Banco nuevo: círculo cozy agotado, Flynn y French sin señal todavía.
  Si French también da cero: Paula Hawkins como último intento antes de
  asumir 100% canal roto; después de eso, push de puro diagnóstico.

### Andy — datos duros
Estante L4 (28+5). Gustos: wellness, autosuperación, positividad,
astronomía, neurociencia, oriental, finanzas, fábulas. Idioma
indistinto. Regla confirmada: autor identitario > clásico sin dueño.
Fábula corta (Bach, Hesse, Coelho) sigue siendo el combo más seguro.
- Botón cerrado: Rovelli, Bach Ilusiones, Holiday, Coelho, Kiyosaki
  (todos con veredicto real). Sin veredicto todavía: Haidt, Chodron,
  Seligman, Wood (los tres primeros con click/dwell confirmado).
- Finanzas: Kiyosaki 05/09 → `ya_lo_lei`, `rec-veta=cualquiera` (sin
  urgencia de volver ahí). Si se retoma, ir a L4-001 (Reed Hastings) o
  L4-006 (Covey), menos manidos que Kiyosaki.
- Hábitos: veta con MÁS engagement crudo del último mes (Fogg 493s de
  dwell). 06/09 Wendy Wood segunda voz de esa veta, `rec-metodo` sin
  responder todavía (ver si prefiere recetario o ciencia de base).
- Astronomía: retomada 07/09 (Hoyle, L5-024) tras un mes en pausa — es
  la veta con mejor puntería real (Rovelli/Sagan). Queda L5-021 sin usar
  si repite bien. Estoicismo: Séneca. Sueño: Walker sin voto. Oriental:
  3 usados seguidos (Dalai Lama/Coelho/Chodron) — en pausa.
- Banco nuevo: Sapolsky *Behave* (esperar veredicto de Seligman
  primero), mindfulness (Thich Nhat Hanh, Kabat-Zinn).
- Banco redescub: usado 26/08-07/09 L4-010/013/014/015/016/021, L5-024.
  Astro: L5-021 sin usar. Finanzas: L4-001, L4-006, L4-009 sin usar.

## 🛡️ Guardia
Título+autor contra catálogo (sin tildes) y `recommended.json` —
incluir variantes de nombre (Pema Chödrön/Thubten Chodron). Campo `to`
obligatorio en `queue.json`. Revisar `subscription.json` cada corrida.
`read_status` de enrichment no confiable para Sofi (Kindle paralelo);
para Andy sí. Si TODAS las ediciones de Buscalibre figuran agotadas,
declararlo y sumar alternativa verificada en vez de ocultarlo.

## 🔭 Qué mirar (próxima corrida — 08/09)
Se invierte: Andy nuevo, Sofi redescub. (1) Veredicto de Haidt, Chodron,
Seligman, Wood — recordatorio si siguen sin votar. (2) `rec-metodo` de
Wood y `rec-veta` de Hoyle, todavía sin responder. (3) **CRÍTICO**:
cualquier evento de Sofi en French (07/09) sería la primera señal en 18
fichas y cambiaría el diagnóstico; si sigue en cero, el próximo turno de
Sofi va con push de puro diagnóstico, sin libro (no gastar más vetas
nuevas hasta ahí). (4) Confirmar 201 en `send_log.json` de los pushes de
hoy y si el chequeo manual del teléfono de Sofi (pedido el 06/09) dio
algo — todavía sin respuesta al cierre de esta corrida.

## 🎬 CINE + 🧳 viaje (fuera del ciclo)
Cine: 1/semana, `todos`, viernes ~19:00. Sofi evita gore/subtítulos;
Andy evita "triste", nunca doblado. Severance "me tienta" Andy —
candidata fuerte. Sin Función Nº2 desde 31/07.

## 🧭 Sugerencias hub
`recs/index.html` lee `recommended.json` por fetch — cero mantenimiento
manual. NO TOCAR (ni este ni `recs/setup.html`).
