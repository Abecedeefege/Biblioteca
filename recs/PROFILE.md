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

## 🎧🔔 rec-nota de Andy — 3 pedidos, todos con acción tomada
1. **Audio de 30s, EN TODA FICHA (escalado 04/09)**: nació 03/09 limitado
   a `kind:nuevo`; Andy insistió DOS VECES el mismo día (nota en
   Alquimista 19:48 y en la propia Chodron —redescub— 23:44: "sigo sin
   ver mi botón de play") pidiendo que fuera en TODAS. Acción: retrofit
   del botón en `2026-09-03-chodron-budismo.html` + estándar ampliado a
   **toda ficha de hoy en adelante, sin importar el `kind`** (Web Speech
   API, cliente puro, botón ▶️/⏸️ + `rec-audio`). Páginas previas a
   Chodron NO se retrofitearon (alcance: esta corrida, no el archivo
   entero) — si vuelve a pedirlo, evaluar retrofit masivo.
2. **Noti sin click ≠ desinterés — reenviar después**: confirmado con
   datos — el recordatorio a Alquimista (16:30-18:45, 03/09) funcionó:
   abrió a las 19:45 y votó (`ya_lo_lei`+`like`). **Regla activa**: si
   el último push de Andy sigue sin `notification_clicked` a las
   24-48h, reencolar recordatorio a la MISMA página antes de sumar
   libro nuevo. Sofi es otro caso (ver abajo, no aplica el mismo patrón).
3. **Alquimista `ya_lo_lei`**: acierto de tema, cero descubrimiento —
   sube la vara de novedad en fábula/oriental clásica (Coelho, Bach,
   Hesse): ángulos menos obvios o autores menos mainstream salvo
   relectura explícita.

## 🎧 Google Play en fichas nuevas (desde 24/08)
Toda ficha (nueva o redescub, desde 04/09 ambas) suma audiolibro de
Google Play si existe, por título+autor(+narrador) — 403 a bots es
bloqueo conocido, se usa igual. Narración dudosa o sin confirmar =
declarar existencia sin linkear, nunca arriesgar el link equivocado.

## 🚨 Sofi: silencio de canal prolongado (04/09)
Cero eventos desde el 20/08 — 16 fichas, 8 vetas probadas, pese a
`active` + 201 siempre. Total (ni un evento de ningún tipo), más señal
de dispositivo/canal que de gusto — por eso NO se le aplica el reenvío
en bloque (sería spamear 16 pushes). Si Sherlock (04/09) tampoco da
señal, el próximo paso es sospechar del canal antes que el gusto.

## ✅ Canal de Andy — dos patrones distintos
"Abrió y no votó" (Fogg 29/08 dwell 493s, Herrigel 26/08 botón, Haidt
02/09 click+nota, Chodron 03/09 click — señal de contenido/CTA, no de
desinterés) vs. "nunca abrió" (Dalai Lama/Brewer 30-31/08 — señal de
tiempo, se corrige con recordatorio, ver rec-nota arriba). Trackear
por separado.

## 📅 04/09 — hoy
Cutoff avanzado a 03/09 23:44 UTC. 10 eventos nuevos, todos de Andy:
dwell Haidt (369s, sin voto), y el ciclo completo de Alquimista (abrió
el recordatorio, `ya_lo_lei`+`like`+nota escalando audio) + click y
nota en la propia Chodron (ver sección rec-nota arriba). Sofi: otro día
sin ningún evento. Régimen: ayer Andy redescub (Chodron) → hoy nuevo;
Sofi nuevo (Haig) → hoy redescub.
**Andy → Martin Seligman, *La vida que florece*** (nuevo): profundiza
la única veta con señal real de la semana (Haidt, click+nota 02/09) en
vez de cambiar de tema — Seligman y Haidt son colegas del mismo campo
(ciencia de la felicidad), modelo PERMA en vez de otro genérico de
autoayuda. Rota fuera de oriental (3 seguidas: Dalai Lama/Coelho/
Chodron). Riesgo declarado de frente: 416 páginas, tono más académico.
Con stock hoy en Buscalibre UY, $1.190 UYU.
**Sofi → Arthur Conan Doyle, *Las Aventuras de Sherlock Holmes* (M5-036)**
(redescub): mismo autor que el Perro de los Baskerville (25/08, sin
rechazo) pero cambio deliberado de formato — 12 casos de 15-20 min en
vez de novela completa, misma lógica de "formato corto" que se probó
con Chodron, por si el silencio de Sofi es de tiempo y no de gusto.
Ambas fichas con botón de audio (ver rec-nota arriba). Pushes
`-rec-andy`/`-rec-sofi` 19:00.

### Log resumido 29/08–03/09 (26-28/08 en `recommended.json`)
29/08 Andy→Fogg *Tiny Habits* (nuevo, dwell 493s sin botón) / Sofi→
Peters *Egipto* (redescub). 30/08 Andy→Dalai Lama *Art of Happiness*
(redescub, CERO) / Sofi→Haig *Stop Time* (nuevo). 31/08 Andy→Brewer
*Craving Mind* (nuevo, CERO) / Sofi→Bennett *3 Dog Problem* (redescub).
01/09 Andy→Coelho *Alquimista* (redescub, CERO→recordatorio 03/09→
`ya_lo_lei`+`like`) / Sofi→Backman *Ove* (nuevo). 02/09 Andy→Haidt
*Happiness Hypothesis* (nuevo, click+nota, dwell 369s) / Sofi→Christie
*Chimneys* (redescub). 03/09 Andy→Chodron *Budismo* (redescub, click
mismo día + nota audio) / Sofi→Haig *Razones* (nuevo, sin eventos).

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
  Klune x3, Heap House, Bennett+secuela, Doyle-Baskerville, Doyle-
  Aventuras (M5-036, 04/09), Haig x3, Christie x2, Peters-Egipto,
  Backman-Ove.
- Banco redescub: M5-016 Delany 2 (esperar señal), Sherlock resto en M5
  (M5-033/006/034/035, quedan 4) si Haig tampoco engancha.
- Banco nuevo: agotado el círculo misterio/cozy de primera línea. Si
  Haig no da señal, sospechar del canal antes que del gusto (16 fichas,
  cero eventos de ningún tipo desde el 20/08).

### Andy — datos duros
Estante L4 (28+5). Gustos: wellness, autosuperación, positividad,
astronomía, neurociencia, oriental, finanzas, fábulas. Idioma
indistinto. Regla confirmada: autor identitario > clásico sin dueño.
Fábula corta (Bach, Hesse, Coelho) sigue siendo el combo más seguro.
- Botón: Rovelli, Bach Ilusiones, Holiday (plenos, pre-20/08); Herrigel
  (redescub, 26/08); Haidt (click+nota, 02/09, dwell 369s, sin
  veredicto); Chodron (click mismo día, 03/09, sin veredicto).
- Alquimista (01/09): `ya_lo_lei`+`like` — acierto de tema, cero
  descubrimiento (ver rec-nota arriba, sube vara de novedad en fábula/
  oriental clásica).
- Astronomía en pausa: L5-024, L5-021. Estoicismo: Séneca. Sueño:
  Walker sin voto. Oriental: 3 usados seguidos (Dalai Lama/Coelho/
  Chodron) — en pausa, no repetir hasta que se enfríe.
- Banco nuevo: Seligman usado hoy (04/09). Quedan Sapolsky *Behave*
  (denso, esperar señal de Seligman primero), mindfulness (Thich Nhat
  Hanh, Kabat-Zinn), oriental (*Tao Te Ching*, Watts, Suzuki — en pausa,
  ver arriba), Wendy Wood.
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

## 🔭 Qué mirar (próxima corrida — 05/09)
Se invierte: Andy redescub, Sofi nuevo. (1) Veredicto de Haidt y de
Chodron (ambos con click, sin voto todavía) — si siguen sin votar en
24-48h, aplicar la regla de recordatorio (arriba). (2) `rec-audio` /
`rec-densidad` de Seligman: si "denso" o sin uso del audio, la próxima
de Andy vuelve a formato corto tipo Chodron. (3) Confirmar en
`send_log.json` que los 2 pushes de hoy (04/09) salieron con 201.
(4) Primer dato de Sherlock en Sofi: si hay señal (aunque sea un click),
profundizar con el resto de M5-033/006/034/035; si sigue en cero total,
el próximo paso es sospechar del canal antes que del gusto — ya son 16
fichas sin ningún evento desde el 20/08.

## 🎬 CINE + 🧳 viaje (fuera del ciclo)
Cine: 1/semana, `todos`, viernes ~19:00. Sofi evita gore/subtítulos;
Andy evita "triste", nunca doblado. Severance "me tienta" Andy —
candidata fuerte. Sin Función Nº2 desde 31/07.

## 🧭 Sugerencias hub
`recs/index.html` lee `recommended.json` por fetch — cero mantenimiento
manual. NO TOCAR (ni este ni `recs/setup.html`).
