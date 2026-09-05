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

## 🚨 Sofi: 16 fichas seguidas en cero, hoy CAMBIO FUERTE (05/09)
Cero eventos desde el 20/08 (16 fichas, 8 vetas: cozy, thriller nórdico,
romance, memoir con Haig x3 — ni un click en ninguna). Aplico la regla
de "3+ sin feedback → cambio fuerte": hoy pivoteo del cozy agotado a su
otro estante confirmado, los 50 King, pero con autora nueva (Gillian
Flynn, ver 05/09 abajo). Si esto tampoco da señal, la próxima corrida
hay que asumir en serio que es el canal (dispositivo/push), no el gusto,
y proponerle a Sofi un chequeo directo del lado del dueño.

## ✅ Canal de Andy — dos patrones distintos
"Abrió y no votó" (Fogg 29/08 dwell 493s, Herrigel 26/08 botón, Haidt
02/09 click+nota dwell 369s, Chodron 03/09 click, Seligman 04/09
click+visita — señal de contenido/CTA, no de desinterés) vs. "nunca
abrió" (Dalai Lama/Brewer 30-31/08 — señal de tiempo, se corrige con
recordatorio si se repite). Ningún veredicto todavía en Haidt, Chodron
ni Seligman — no bloquea, se sigue trackeando.

## 📅 05/09 — hoy
Cutoff avanzado a 04/09 23:05:59 UTC. 3 eventos nuevos, todos de Andy:
dwell en Chodron (95s, 100% scroll) y click+visita en Seligman (mismo
push, ~10s después de enviado). Sofi: otro día sin ningún evento
(Sherlock de ayer también en cero). Régimen: ayer Andy nuevo (Seligman)
→ hoy redescub; Sofi redescub (Sherlock) → hoy nuevo.
**Andy → Robert Kiyosaki, *Padre Rico, Padre Pobre* (L4-013)**
(redescub): primera vez en 51 fichas que tocamos finanzas/negocios —
gusto declarado desde el 15/07, nunca usado. Rota lejos de wellness/
oriental/ciencia de la felicidad (las últimas rachas). Honestidad
declarada de frente en la ficha: John T. Reed y Slate lo critican por
errores fácticos y narrativa "fabulesca" — se lo presenta como cambio
de mentalidad, no manual técnico. Nueva micro-pregunta `rec-veta` para
saber si seguir en finanzas o volver a lo conocido.
**Sofi → Gillian Flynn, *Heridas Abiertas* (Sharp Objects, 2006)**
(nuevo, cambio fuerte): su primera novela, antes de *Perdida*/Gone Girl.
Mismo registro oscuro y denso que sus 50 King, autora nunca probada.
Aviso de contenido declarado de frente (autolesión de la protagonista,
tratada sin eufemismos) antes del veredicto. Nueva micro-pregunta
`rec-tono` para medir si el cambio de registro suma o resta. Precio
verificado en vivo: $806-1.173 UYU según edición en Buscalibre UY.
Pushes `-rec-andy`/`-rec-sofi` 19:00.

### Log resumido 29/08–04/09 (26-28/08 en `recommended.json`)
29/08 Andy→Fogg *Tiny Habits* (nuevo, dwell 493s) / Sofi→Peters *Egipto*
(redescub). 30/08 Andy→Dalai Lama *Art of Happiness* (redescub, CERO) /
Sofi→Haig *Stop Time* (nuevo). 31/08 Andy→Brewer *Craving Mind* (nuevo,
CERO) / Sofi→Bennett *3 Dog Problem* (redescub). 01/09 Andy→Coelho
*Alquimista* (redescub, `ya_lo_lei`+`like` tras recordatorio) / Sofi→
Backman *Ove* (nuevo). 02/09 Andy→Haidt *Happiness Hypothesis* (nuevo,
click+nota, dwell 369s) / Sofi→Christie *Chimneys* (redescub). 03/09
Andy→Chodron *Budismo* (redescub, click + nota audio) / Sofi→Haig
*Razones* (nuevo, CERO). 04/09 Andy→Seligman *La vida que florece*
(nuevo, click+visita) / Sofi→Doyle *Aventuras de Sherlock Holmes*
(redescub, CERO).

## 📚 Contexto fijo
Catálogo: 437 volúmenes (re-extraer `/tmp/catalog.json` cada corrida).
Suscripción: Andy y Sofi `active`.

### Sofi — vetas confirmadas
Salas: King (R4+R5, 50 libros), M5, M6 (quemado). Aciertos duros (todos
pre-20/08): **Dicker HQ `lo_quiero`+`love`**; **Klune-mar-azul
`me_tienta`+`love`**; **Haig *Medianoche* `lo_quiero`+`love`** (todos,
su única señal real). Romance contemporáneo (Henry x2): descartado.
Guardia máxima misterio/cozy: `ya_lo_lei` en King, Katzenbach, Carlisle,
Benavent, Henry.
- Quemados (nuevo o redescub ya usado): Osman t.1-2, Dicker HQ, Hill,
  King R5-018, Katzenbach M5-024, Carlisle M5-012, Benavent M6-001-009,
  Henry x2, Coyle M5-011, Klune x3, Heap House, Bennett+secuela, Doyle-
  Baskerville, Doyle-Aventuras (M5-036), Haig x3, Christie x2, Peters-
  Egipto, Backman-Ove.
- Banco redescub: M5-016 Delany 2, Sherlock resto en M5 (M5-033/006/
  034/035, quedan 4).
- Banco nuevo: círculo cozy/misterio de primera línea agotado — probado
  hoy el pivote a suspenso denso (Flynn). Si tampoco da señal: Tana
  French, Paula Hawkins o directo un King de R4/R5 como "nuevo"
  (aunque esté en casa, presentado como relectura recomendada) antes de
  declarar el canal roto.

### Andy — datos duros
Estante L4 (28+5). Gustos: wellness, autosuperación, positividad,
astronomía, neurociencia, oriental, finanzas, fábulas. Idioma
indistinto. Regla confirmada: autor identitario > clásico sin dueño.
Fábula corta (Bach, Hesse, Coelho) sigue siendo el combo más seguro.
- Botón: Rovelli, Bach Ilusiones, Holiday (plenos, pre-20/08); Herrigel
  (redescub, 26/08); Haidt, Chodron, Seligman (click confirmado, sin
  veredicto todavía).
- Alquimista (01/09): `ya_lo_lei`+`like` — sube la vara de novedad en
  fábula/oriental clásica.
- Astronomía en pausa: L5-024, L5-021. Estoicismo: Séneca. Sueño:
  Walker sin voto. Oriental: 3 usados seguidos (Dalai Lama/Coelho/
  Chodron) — en pausa. Finanzas: Kiyosaki usado hoy (05/09), primera
  vez en la veta — ver honestidad declarada en la ficha.
- Banco nuevo: Sapolsky *Behave* (denso, esperar señal de Seligman
  primero), mindfulness (Thich Nhat Hanh, Kabat-Zinn), oriental (en
  pausa, ver arriba), Wendy Wood.
- Banco redescub: usado 26-30/08 L4-010/014/021, 01/09 L4-015, 03/09
  L4-016, 05/09 L4-013. Astro: L5-024, L5-021. Finanzas: L4-001 (Reed
  Hastings), L4-006 (Covey), L4-009 quedan sin usar si la veta funciona.

## 🛡️ Guardia
Título+autor contra catálogo (sin tildes) y `recommended.json` —
incluir variantes de nombre (Pema Chödrön/Thubten Chodron). Campo `to`
obligatorio en `queue.json`. Revisar `subscription.json` cada corrida.
`read_status` de enrichment no confiable para Sofi (Kindle paralelo);
para Andy sí. Si TODAS las ediciones de Buscalibre figuran agotadas,
declararlo y sumar alternativa verificada en vez de ocultarlo.

## 🔭 Qué mirar (próxima corrida — 06/09)
Se invierte: Andy nuevo, Sofi redescub. (1) Veredicto de Haidt, Chodron
y Seligman (los tres con click, sin voto todavía) — si siguen sin votar
24-48h más, aplicar la regla de recordatorio antes de sumar libro
nuevo. (2) `rec-veta` de Kiyosaki: si pide volver a wellness, hacerlo;
si pide más finanzas, seguir con L4-001/006/009. (3) Cualquier evento
de Sofi en Flynn (aunque sea un solo click) es la señal más importante
de las últimas dos semanas — si aparece, profundizar en suspenso denso
(Tana French, Paula Hawkins); si sigue en CERO total, escalar la
sospecha de canal roto en el próximo reporte. (4) Confirmar en
`send_log.json` que los 2 pushes de hoy (05/09) salieron con 201.

## 🎬 CINE + 🧳 viaje (fuera del ciclo)
Cine: 1/semana, `todos`, viernes ~19:00. Sofi evita gore/subtítulos;
Andy evita "triste", nunca doblado. Severance "me tienta" Andy —
candidata fuerte. Sin Función Nº2 desde 31/07.

## 🧭 Sugerencias hub
`recs/index.html` lee `recommended.json` por fetch — cero mantenimiento
manual. NO TOCAR (ni este ni `recs/setup.html`).
