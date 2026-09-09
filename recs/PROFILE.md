# Perfil de gustos — recomendador de Bibliotequeando

## ⚖️ MEZCLA + RÉGIMEN — DIARIO desde 20/08 (reemplaza el semanal del 05/08)
**DOS fichas por día**: UNA para Andy y UNA para Sofi, cada una según SU
perfil y SU feedback. Entre las dos: UNA nueva y UNA de la biblioteca de
la casa, alternando quién recibe la nueva (mirá en `recommended.json` qué
recibió cada uno ayer — un `kind:"encuesta"` no cuenta como nuevo ni
redescub, se salta esa persona ese día sin romper la alternancia del día
siguiente). Push personal a cada uno, ambos ~19:00 -03:00
(`"to":"Andy"`/`"to":"Sofi"`). Fichas pre-armadas cuentan para su
destinatario; construir solo lo que falte, manteniendo el par
nuevo+biblioteca. Cine/series no cambia (viernes ~19:00, `todos`).
**⚠️ Sin sincronizar**: `.claude/commands/recomendacion.md` sigue
describiendo el régimen semanal del 05/08 (Gate domingo) — esta sección
manda hasta que alguien lo actualice; no es territorio mío.

## 🎧 Audio 30s + Google Play, en TODA ficha (desde 04/09)
Toda ficha (nueva o redescub) suma botón de resumen en audio (Web Speech
API, cliente puro) y audiolibro de Google Play si existe, por
título+autor(+narrador) — 403 a bots es bloqueo conocido, se usa igual.
Narración dudosa o sin confirmar = declarar existencia sin linkear.

## 🚨 09/09 — canal de Sofi: 5+ semanas en cero, escalado a Andy
Sin NINGÚN evento de Sofi en `sync/engagement.json` desde 2026-08-05
(ni siquiera respondió el diagnóstico directo del 08/09). El canal de
Andy en cambio SE RECUPERÓ: notification_clicked + page_visit + una
respuesta de mini-quiz el 09/09 a las 10:54-10:58 UTC, sobre Sapolsky
(07/09-08/09 habían quedado en cero — era el mismo corte de 3 días que
afectaba a toda la casa, no desinterés). Con Andy de vuelta y Sofi
todavía muda, la hipótesis "corte de toda la casa" ya no explica el
silencio de Sofi — es algo específico de su canal (probablemente Apple
Web Push necesitando reconfirmación en su iPhone, dado `subscription.json`
en `active` sin invalidar y `send_log.json` en 201 siempre). Hoy
(09/09) le agregué a la ficha de Andy un bloque `rec-alerta-sofi`
pidiéndole que chequee con ella. **Si para el 16/09 sigue en cero pese
a esa alerta, la siguiente escalada es más directa** (nota propia más
insistente, o sugerir reinstalar la PWA).

## ✅ Canal de Andy — activo, dos patrones
"Abrió y no votó" (dwell/click sin veredicto: Fogg, Herrigel, Haidt,
Chodron, Seligman) vs. veredicto cerrado (Coelho `ya_lo_lei`, Kiyosaki
`ya_lo_lei`+`like`+dwell 178s). Wood (06/09) y Hoyle (07/09) quedaron
sin señal — coincide con el corte de 3 días, no asumir desinterés en
hábitos/astronomía todavía. Sapolsky (08/09): clickeó el push y usó el
mini-quiz de testosterona (`no`) pero sin veredicto de libro aún.

## 📅 09/09 — hoy
Régimen: ayer Andy=nuevo (Sapolsky) → hoy Andy=redescub; la nueva del
día le toca a Sofi (alternancia por par, ver régimen arriba — el
redescub que a Sofi le tocaba el 08/09 quedó reemplazado por el
diagnóstico, así que su nuevo de hoy no rompe su propia rotación real).
**Andy → *El Principito*, Antoine de Saint-Exupéry (1943, redescub,
L4-024)**: fábula corta es su combo más seguro (Bach, Hesse, Coelho ya
usados) y el clásico más grande de la veta nunca se había tocado; libro
corto, bueno para retomar ritmo tras el corte. **Sofi → *La chica del
tren*, Paula Hawkins (2015, nuevo)**: candidata del banco tras agotar
el círculo cozy; thriller psicológico masivo (23M+ copias), veta
distinta a King/Osman/cozy. Guardia: ninguno de los dos títulos está en
el catálogo (437 vol.) ni en `recommended.json` previo.

## 📚 Contexto fijo
Catálogo: 437 volúmenes (re-extraer `/tmp/catalog.json` cada corrida).
Suscripción: Andy y Sofi `active` — el silencio de Sofi no es un
problema de `subscription.json` (ver arriba).

### Sofi — vetas confirmadas
Salas: King (R4+R5, 50 libros), M5, M6. Aciertos duros (todos
pre-20/08, previos al silencio): **Dicker HQ** `lo_quiero`+`love`;
**Klune-mar-azul** `me_tienta`+`love`; **Haig *Medianoche*** `lo_quiero`
+`love` (única `todos`). Romance contemporáneo (Henry x2): descartado.
Guardia máxima misterio/cozy: `ya_lo_lei` en King, Katzenbach, Carlisle,
Benavent, Henry.
- Quemados: Osman t.1-2, Dicker HQ, Hill, King R5-018, Katzenbach M5-024,
  Carlisle M5-012, Benavent M6-001-009, Henry x2, Coyle M5-011, Klune x3,
  Heap House, Bennett+secuela, Doyle-Baskerville/Aventuras/Memorias,
  Haig x3, Christie x2, Peters-Egipto, Backman-Ove, Flynn-Heridas,
  French-Silencio del Bosque, Hawkins-chica-del-tren (hoy).
- Banco redescub (sin uso desde el corte, sin señal para priorizar):
  M5-016 Delany 2, M5-006 *El Regreso* y M5-034 *Su Último Saludo*
  (canon Doyle), M5-033 (compendio DK).
- Banco nuevo: círculo cozy agotado; Hawkins usada hoy. Sin candidata
  fuerte siguiente — reponer con WebSearch cuando toque su próximo nuevo.

### Andy — datos duros
Estante L4 (28+5), L5 astronomía (33). Gustos: wellness, autosuperación,
positividad, astronomía, neurociencia, oriental, finanzas, fábulas.
Idioma indistinto. Regla confirmada: autor identitario > clásico sin
dueño; fábula corta sigue siendo el combo más seguro (ahora con
Saint-Exupéry también usado).
- Botón cerrado: Rovelli, Bach Ilusiones, Holiday, Coelho, Kiyosaki.
  Sin veredicto: Haidt, Chodron, Seligman, Wood, Hoyle, Sapolsky,
  Saint-Exupéry (hoy) — la mayoría con click/dwell ya confirmado.
- Neurociencia: abierta 08/09 con Sapolsky, sin veredicto todavía. Si
  cierra bien, banco sigue con mindfulness (Thich Nhat Hanh, Kabat-Zinn)
  evitando repetir oriental (3 usados seguidos en agosto).
- Hábitos: mejor engagement crudo pre-corte (Fogg 493s dwell). Wood
  (06/09) sigue sin señal — no asumir desinterés, esperar más datos.
- Astronomía: retomada 07/09 (Hoyle, L5-024), sin señal aún. L5-021
  queda si repite bien. Finanzas: cerrada con Kiyosaki, sin urgencia.

## 🛡️ Guardia
Título+autor contra catálogo (sin tildes) y `recommended.json` —
incluir variantes de nombre. Campo `to` obligatorio en `queue.json`.
Revisar `subscription.json` cada corrida. `read_status` de enrichment
no confiable para Sofi (Kindle paralelo); para Andy sí. Si TODAS las
ediciones de Buscalibre figuran agotadas, declararlo y sumar
alternativa verificada en vez de ocultarlo.

## 🔭 Qué mirar (próxima corrida)
(1) ¿Contestó Andy el `rec-alerta-sofi` de hoy, o llegó señal nueva de
Sofi (aunque sea al fin al diagnóstico del 08/09)? Actuar en
consecuencia (volver a libro normal, cambiar veta, o escalar más fuerte
si sigue en cero para el 16/09). (2) Veredicto de Haidt, Chodron,
Seligman, Wood, Hoyle, Sapolsky, Saint-Exupéry. (3) Confirmar 201 en
`send_log.json` de los dos pushes de hoy.

## 🎬 CINE + 🧳 viaje (fuera del ciclo)
Cine: 1/semana, `todos`, viernes ~19:00. Sofi evita gore/subtítulos;
Andy evita "triste", nunca doblado. Severance "me tienta" Andy —
candidata fuerte. Sin Función Nº2 desde 31/07.

## 🧭 Sugerencias hub
`recs/index.html` lee `recommended.json` por fetch — cero mantenimiento
manual. NO TOCAR (ni este ni `recs/setup.html`).
