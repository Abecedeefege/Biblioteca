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

## 🎧🔔 rec-nota de Andy 03/09 (PRIORIDAD MÁXIMA) — dos pedidos activos
1. **Audio de 30s en cada ficha `nuevo`**: implementado hoy (Sofi/Haig)
   con Web Speech API, 100% cliente, sin build ni tocar `engage.js`.
   Botón ▶️/⏸️ + micro-pregunta `rec-audio`. Estándar desde hoy en todo
   `kind:nuevo`.
2. **Noti sin click ≠ desinterés — reenviar después**: se encontró que
   Dalai Lama (30/08), Brewer (31/08) y Alquimista (01/09) tienen CERO
   eventos — corrige una lectura previa errónea de esta sección (el
   "dwell fuerte sin botón" era solo de Fogg 29/08). Acción hoy:
   recordatorio solo para el más reciente (Alquimista,
   `2026-09-03-rec-andy-recordatorio`, 16:30-18:45), no los tres juntos.
   **Regla nueva**: cada corrida, si el último push de Andy sigue sin
   `notification_clicked` a las 24-48h, reencolar recordatorio a la
   MISMA página antes de sumar libro nuevo. Sofi es otro caso (ver abajo).

## 🎧 Google Play en fichas nuevas (desde 24/08)
Toda ficha nueva (y redescub si existe) suma audiolibro de Google Play
si existe, verificado por título+autor(+narrador) — 403 a bots es
bloqueo conocido, se usa igual. 404 real o varias narraciones sin poder
identificar cuál es la de Google Play = declarar existencia sin linkear
(Chimneys 02/09, Budismo-es y Razones-es 03/09; inglés sí confirmado).

## 🚨 Sofi: silencio de canal prolongado (03/09)
Cero eventos desde el 20/08 — 15 fichas, 8 vetas probadas, pese a
`active` + 201 siempre. Distinto del caso de Andy: acá es total (ni un
evento de ningún tipo), más señal de dispositivo/canal que de gusto —
por eso NO se le aplica el reenvío en bloque (sería spamear 15 pushes).
Hoy se prueba volver a Matt Haig (su único acierto pleno) en un género
nuevo para ella. Si sigue en cero, próximo paso es sospechar del canal.

## ✅ Canal de Andy — matizado (03/09)
Distinguir "abrió y no votó" (Fogg 29/08 dwell 493s, Herrigel 26/08
botón, Haidt 02/09 click+nota — señal de contenido/CTA) de "nunca
abrió" (Dalai Lama/Brewer/Alquimista 30/08-01/09 — señal de tiempo, ver
rec-nota arriba). Se trackean por separado de ahora en más.

## 📅 03/09 — hoy
Único evento del cutoff (30/08): rec-nota de Andy en Haidt, ambos
pedidos con acción tomada (arriba). Régimen: ayer Andy nuevo (Haidt) →
hoy redescub; Sofi redescub (Chimneys) → hoy nuevo.
**Andy → Thubten Chodron, *Budismo para principiantes* (L4-016)**
(redescub): preguntas y respuestas sueltas, se lee en 2 minutos —
responde directo a su pedido de reenvío/formato corto. Guardia de
identidad reforzada: NO es Pema Chödrön (confusión previa ya evitada).
**Sofi → Matt Haig, *Razones para seguir viviendo*** (nuevo): su único
autor con acierto pleno, pero memoir real — cambio de estante, no otro
nombre de misterio. Tema sensible declarado de frente. Ediciones ES
agotadas hoy en Buscalibre — declarado, con ebook verificado como
alternativa. Pushes `-rec-andy`/`-rec-sofi` 19:00 + `-rec-andy-
recordatorio` (Alquimista, 16:30-18:45).

### Log resumido 26/08–02/09
26/08 Andy→Herrigel *Zen* (redescub, **me_tienta+like**, único botón en
3 semanas) / Sofi→Haig *Humans* (nuevo). 27/08 Andy→Csikszentmihalyi
*Flow* (nuevo) / Sofi→Christie *Mirrors* (redescub). 28/08 Andy→Huxley
*Doors* (redescub) / Sofi→Klune *Puppets* (nuevo). 29/08 Andy→Fogg *Tiny
Habits* (nuevo, dwell 493s sin botón) / Sofi→Peters *Egipto* (redescub).
30/08 Andy→Dalai Lama *Art of Happiness* (redescub, CERO) / Sofi→Haig
*Stop Time* (nuevo). 31/08 Andy→Brewer *Craving Mind* (nuevo, CERO) /
Sofi→Bennett *3 Dog Problem* (redescub). 01/09 Andy→Coelho *Alquimista*
(redescub, CERO → recordatorio hoy) / Sofi→Backman *Ove* (nuevo). 02/09
Andy→Haidt *Happiness Hypothesis* (nuevo, **click+nota**) / Sofi→
Christie *Chimneys* (redescub). Sofi sin feedback desde el 20/08.

## 📚 Contexto fijo
Catálogo: 437 volúmenes (re-extraer `/tmp/catalog.json` cada corrida).
Suscripción: Andy y Sofi `active`.

### Sofi — vetas confirmadas
Salas: King (R4+R5, 50 libros), M5, M6 (quemado). Aciertos duros (todos
pre-20/08): **Dicker HQ `lo_quiero`+`love`**; **Klune-mar-azul
`me_tienta`+`love`**; **Haig *Medianoche* `lo_quiero`+`love`** (todos,
su ÚNICA señal de toda la serie — por eso se vuelve a Haig hoy). Romance
contemporáneo (Henry x2): descartado. Guardia máxima misterio/cozy:
`ya_lo_lei` en King, Katzenbach, Carlisle, Benavent, Henry.
- Quemados: Osman t.1-2, Dicker HQ, Hill, King R5-018, Katzenbach
  M5-024, Carlisle M5-012, Benavent M6-001-009, Henry x2, Coyle M5-011,
  Klune x3, Heap House, Bennett+secuela, Doyle-Baskerville, Haig x3,
  Christie x2, Peters-Egipto, Backman-Ove.
- Banco redescub: M5-016 Delany 2 (esperar señal), Sherlock x4 en M5
  (M5-033/006/034/035/036) si Haig tampoco engancha.
- Banco nuevo: agotado el círculo misterio/cozy de primera línea — hoy
  género distinto. Si Haig no da señal, sospechar del canal antes que
  del gusto (15 fichas, cero eventos de ningún tipo).

### Andy — datos duros
Estante L4 (28+5). Gustos: wellness, autosuperación, positividad,
astronomía, neurociencia, oriental, finanzas, fábulas. Idioma
indistinto. Regla confirmada: autor identitario > clásico sin dueño.
Fábula corta (Bach, Hesse, Coelho) sigue siendo el combo más seguro.
- Botón: Rovelli, Bach Ilusiones, Holiday (plenos, pre-20/08); Herrigel
  (redescub, 26/08); Haidt (click+nota, 03/09, sin veredicto).
- Astronomía en pausa: L5-024, L5-021. Estoicismo: Séneca. Sueño:
  Walker sin voto. Oriental: Dalai Lama (sin abrir) → hoy Chodron.
- Banco nuevo: Seligman, Sapolsky *Behave*, mindfulness (Thich Nhat
  Hanh, Kabat-Zinn), oriental (*Tao Te Ching*, Watts, Suzuki), Wendy
  Wood (esperar voto real primero).
- Banco redescub: usado 26-30/08 L4-010/014/021, 01/09 L4-015, 03/09
  L4-016. Astro: L5-024, L5-021.

## 🛡️ Guardia
Título+autor contra catálogo (sin tildes) y `recommended.json` —
incluir variantes de nombre (Pema Chödrön/Thubten Chodron, rechequeado
03/09). Campo `to` obligatorio en `queue.json`. Revisar
`subscription.json` cada corrida. `read_status` de enrichment no
confiable para Sofi (Kindle paralelo); para Andy sí. Si TODAS las
ediciones de Buscalibre figuran agotadas (caso Razones-es 03/09),
declararlo y sumar alternativa verificada en vez de ocultarlo.

## 🔭 Qué mirar (próxima corrida — 04/09)
Se invierte: Andy nuevo, Sofi redescub. (1) Primeras respuestas
`rec-audio`/`rec-formato`. (2) Confirmar en `send_log.json` que los 3
pushes de hoy salieron. (3) Si Alquimista sigue sin abrirse pese al
recordatorio, no insistir una tercera vez. (4) Primer dato de Haig-
memoir en Sofi: si hay señal profundizar; si sigue en cero, evaluar
canal antes que gusto.

## 🎬 CINE + 🧳 viaje (fuera del ciclo)
Cine: 1/semana, `todos`, viernes ~19:00. Sofi evita gore/subtítulos;
Andy evita "triste", nunca doblado. Severance "me tienta" Andy —
candidata fuerte. Sin Función Nº2 desde 31/07.

## 🧭 Sugerencias hub
`recs/index.html` lee `recommended.json` por fetch — cero mantenimiento
manual. NO TOCAR (ni este ni `recs/setup.html`).
