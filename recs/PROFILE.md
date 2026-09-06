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

## 🚨🚨 Sofi: 17 fichas seguidas en CERO — ya no es hipótesis, es canal (06/09)
El cambio fuerte del 05/09 (Flynn/suspenso denso) TAMBIÉN dio cero — ni
click ni page_visit — pese a `subscription.json` "active" y 201 en las
17/17 entregas. 8 vetas agotadas sin una sola señal desde el 20/08.
**Diagnóstico: ya no es gusto, apunta a canal roto del dispositivo de
Sofi.** Acción hoy: ficha de Doyle/Memorias lo señala explícito, se sumó
`rec-canal` de nuevo, y **se escaló por notificación al dueño en esta
corrida** pidiendo chequeo manual del teléfono (permisos, si el ícono
siquiera aparece). Si sigue en cero tras eso: dejar de gastar vetas
nuevas en ella y mandar un push de puro diagnóstico, sin libro.

## ✅ Canal de Andy — dos patrones distintos
"Abrió y no votó" (Fogg 29/08 dwell 493s, Herrigel 26/08 botón, Haidt
02/09 click+nota dwell 369s, Chodron 03/09 click, Seligman 04/09
click+visita — señal de contenido/CTA, no de desinterés) vs. "nunca
abrió" (Dalai Lama/Brewer 30-31/08 — señal de tiempo, se corrige con
recordatorio si se repite). Kiyosaki 05/09: SÍ cerró botón (ya_lo_lei +
like + audio usado) — primer veredicto cerrado desde Coelho 01/09.
Todavía sin veredicto: Haidt, Chodron, Seligman.

## 📅 06/09 — hoy
Cutoff avanzado a 05/09 22:57:02 UTC. 1 evento nuevo relevante, de Andy
sobre Kiyosaki (05/09): click+visita, dwell 30s, `leer-esta-noche=
ya_leido`, veredicto `ya_lo_lei` (CUARTO seguido — puntería de veta
correcta, cero descubrimiento otra vez), `rec-audio=si_lo_use` (primera
confirmación real de uso del botón), `rec-veta=cualquiera` (sin
preferencia de seguir en finanzas). Sofi: cero de nuevo en Flynn — ver
sección de arriba. Régimen: ayer Andy redescub (Kiyosaki) → hoy nuevo;
Sofi nuevo (Flynn) → hoy redescub.
**Andy → Wendy Wood, *Buenos Hábitos, Malos Hábitos*** (nuevo): en vez
de forzar otra ronda de finanzas sin señal de continuidad, profundizo la
ÚNICA veta con dwell fuerte confirmado en 4 semanas (Fogg, 493s).
Segunda voz deliberadamente distinta: investigación de base (43% de
acciones en piloto automático, entorno > fuerza de voluntad) en vez del
método paso a paso de Fogg. Precio y audiolibro verificados en vivo (200
en ambos links). Nueva micro-pregunta `rec-metodo` (¿te sirve más el
paso a paso o la ciencia de fondo?) para afinar qué autor de la veta
seguir.
**Sofi → Arthur Conan Doyle, *Las Memorias de Sherlock Holmes* (M5-035)**
(redescub): continúa el canon Doyle un tomo después de "Las Aventuras"
(04/09, también cero), con el gancho real más fuerte de la serie — "El
Problema Final", el relato donde Doyle mató a Holmes y 20.000 lectores
cancelaron su suscripción a The Strand en 1893 (verificado; la leyenda
de los brazaletes negros de luto se declara explícitamente como
apócrifa). Pushes `-rec-andy`/`-rec-sofi` hoy 19:00 -03:00.

### Log resumido 29/08–05/09 (26-28/08 en `recommended.json`)
29/08 Fogg/nuevo(493s) · Peters/redescub. 30/08 DalaiLama/redescub(CERO)
· Haig-Stop-Time/nuevo. 31/08 Brewer/nuevo(CERO) · Bennett/redescub.
01/09 Coelho/redescub(`ya_lo_lei`+like) · Backman/nuevo. 02/09 Haidt/
nuevo(click+nota,369s) · Christie-Chimneys/redescub. 03/09 Chodron/
redescub(click+audio) · Haig-Razones/nuevo(CERO). 04/09 Seligman/nuevo
(click) · Doyle-Aventuras/redescub(CERO). 05/09 Kiyosaki/redescub
(`ya_lo_lei`+like+audio) · Flynn/nuevo(CERO, 17ª). Formato: Andy·Sofi.

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
  Ove, Flynn-Heridas.
- Banco redescub: M5-016 Delany 2, M5-006 *El Regreso* y M5-034 *Su
  Último Saludo* (canon Doyle), M5-033 (compendio DK, última opción).
- Banco nuevo: círculo cozy agotado, Flynn tampoco dio señal. Si
  Doyle-Memorias también da cero: Tana French o Paula Hawkins como
  último intento antes de asumir 100% canal roto.

### Andy — datos duros
Estante L4 (28+5). Gustos: wellness, autosuperación, positividad,
astronomía, neurociencia, oriental, finanzas, fábulas. Idioma
indistinto. Regla confirmada: autor identitario > clásico sin dueño.
Fábula corta (Bach, Hesse, Coelho) sigue siendo el combo más seguro.
- Botón cerrado: Rovelli, Bach Ilusiones, Holiday, Coelho, Kiyosaki
  (todos con veredicto real). Sin veredicto todavía: Haidt, Chodron,
  Seligman (los tres con click/dwell confirmado).
- Finanzas: Kiyosaki 05/09 → `ya_lo_lei`, `rec-veta=cualquiera` (sin
  urgencia de volver ahí). Si se retoma, ir a L4-001 (Reed Hastings) o
  L4-006 (Covey), menos manidos que Kiyosaki.
- Hábitos: veta con MÁS engagement crudo del último mes (Fogg 493s de
  dwell). 06/09 Wendy Wood segunda voz de esa veta. `rec-metodo` nueva
  para ver si prefiere recetario (Fogg) o ciencia de base (Wood).
- Astronomía en pausa: L5-024, L5-021. Estoicismo: Séneca. Sueño:
  Walker sin voto. Oriental: 3 usados seguidos (Dalai Lama/Coelho/
  Chodron) — en pausa.
- Banco nuevo: Sapolsky *Behave* (esperar veredicto de Seligman
  primero), mindfulness (Thich Nhat Hanh, Kabat-Zinn), Wendy Wood usado
  hoy.
- Banco redescub: usado 26/08-05/09 L4-010/013/014/015/016/021. Astro:
  L5-024, L5-021. Finanzas: L4-001, L4-006, L4-009 sin usar.

## 🛡️ Guardia
Título+autor contra catálogo (sin tildes) y `recommended.json` —
incluir variantes de nombre (Pema Chödrön/Thubten Chodron). Campo `to`
obligatorio en `queue.json`. Revisar `subscription.json` cada corrida.
`read_status` de enrichment no confiable para Sofi (Kindle paralelo);
para Andy sí. Si TODAS las ediciones de Buscalibre figuran agotadas,
declararlo y sumar alternativa verificada en vez de ocultarlo.

## 🔭 Qué mirar (próxima corrida — 07/09)
Se invierte: Andy redescub, Sofi nuevo. (1) Veredicto de Haidt, Chodron,
Seligman — recordatorio si siguen sin votar. (2) `rec-metodo` de Wood:
"paso a paso"→volver a autores tipo Fogg; "la ciencia"→investigadores
de base (Sapolsky cuando cierre Seligman). (3) **CRÍTICO**: cualquier
evento de Sofi en Doyle-Memorias sería la primera señal en 17 fichas y
cambiaría el diagnóstico; si sigue en cero, mandar un push de puro
diagnóstico sin libro. (4) Confirmar 201 en `send_log.json` y si el
chequeo manual del teléfono de Sofi (pedido hoy al dueño) dio algo.

## 🎬 CINE + 🧳 viaje (fuera del ciclo)
Cine: 1/semana, `todos`, viernes ~19:00. Sofi evita gore/subtítulos;
Andy evita "triste", nunca doblado. Severance "me tienta" Andy —
candidata fuerte. Sin Función Nº2 desde 31/07.

## 🧭 Sugerencias hub
`recs/index.html` lee `recommended.json` por fetch — cero mantenimiento
manual. NO TOCAR (ni este ni `recs/setup.html`).
