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
bot/curl (eso SÍ se usa igual, es bloqueo conocido). Un **404 real**
("Not Found", no la página de bloqueo) es otra cosa: link inválido de
verdad — no se publica, se declara la existencia sin link (caso Bennett
31/08, audiolibro de Samantha Bond confirmado por Audible/Amazon UK pero
sin ID de Play verificable).

## 🚨 Sofi: 6 semanas sin ninguna señal (20/08 → 31/08)
Cero eventos suyos en `sync/engagement.json` desde el cutoff del 20/08,
pese a suscripción `active` y pushes saliendo con 201 (confirmado en
`send_log.json`). El botón `rec-canal:*` sumado el 30/08 tampoco tuvo
respuesta. Con el canal de Andy confirmado sano (ver abajo), ya no se
explica por un bug del dispatcher — puede ser dispositivo/permisos del
navegador, fatiga real, o simplemente que no abre las notis. El 31/08 se
sumó un "aparte" directo a Andy DENTRO de su propia ficha (no un pedido
mío al dueño por chat, sino texto en la experiencia) pidiéndole que le
pregunte directo o chequee el canal. Mientras tanto, sigo construyendo
fichas de calidad para ella con la mejor información disponible — parar
no ayuda a diagnosticar nada.

## ✅ Canal de Andy confirmado sano (30/08)
`2026-08-29-rec-andy`/`-sofi` salieron 22:12 UTC (~19:12 -03:00, dentro de
ventana). Prueba de lectura real en Andy: `notification_clicked` + dwells
crecientes (478s→493s, 80% scroll) en Fogg. Su último voto de BOTÓN sigue
siendo Herrigel (26/08, `me_tienta`+`like`) — desde entonces, dwell fuerte
sin cerrar veredicto en Flow/Huxley/Fogg/Dalai Lama: dato de contenido o
fricción del CTA, no de entrega (el canal ya está descartado como causa).

## 📅 31/08 — hoy
Cero eventos nuevos de ninguno de los dos desde el cutoff (30/08 04:54
UTC) — nada que reprocesar. Régimen: ayer Andy tuvo redescub (Dalai Lama)
→ hoy nuevo; Sofi tuvo nuevo (Haig) → hoy redescub.
**Andy → Judson Brewer, *The Craving Mind* / *La mente ansiosa*** (nuevo):
mismo autor de *Deshacer la ansiedad* (L4-028, en el estante sin abrir
desde antes del 20/08, sin voto) — jugada de autor-ya-en-casa aplicada a
un libro distinto, el que arma el mapa general del enganche (cigarrillos/
celular/amor) antes de la aplicación puntual a la ansiedad. Conecta con
Fogg (hábitos, dwell fuerte) y con la veta de atención-no-fuerza-bruta que
vienen abriendo Herrigel y el Dalai Lama. Interactivo: los tres enganches
del subtítulo + la técnica R.A.I.N. (verificada, la misma que reaparece en
su Brewer sin abrir).
**Sofi → S.J. Bennett, *A Three Dog Problem*** (redescub, M5-026): secuela
directa de *The Windsor Knot* (M5-025, 23/08), que sigue sin un solo
click. En vez de abandonar el experimento Osman-vs-género-cozy por falta
de señal, se le da el libro 2 ya — mismo elenco/tono, caso distinto — para
que esté listo en el estante en cuanto retome el primero.
Pushes `2026-08-31-rec-andy`/`-rec-sofi` encolados 19:00 -03:00.

### Log resumido 25–30/08
25/08 Andy→Seth *Being You* (nuevo, click sin voto) / Sofi→Doyle
*Baskerville* (redescub). 26/08 Andy→Herrigel *Zen tiro con arco*
(redescub, **me_tienta+like**, último voto de botón) / Sofi→Haig *The
Humans* (nuevo). 27/08 Andy→Csikszentmihalyi *Flow* (nuevo) / Sofi→
Christie *Mirrors* (redescub) — push perdido por hueco del dispatcher.
28/08 Andy→Huxley *Doors of Perception* (redescub) / Sofi→Klune *In the
Lives of Puppets* (nuevo) — push perdido, mismo hueco. 29/08 Andy→Fogg
*Tiny Habits* (nuevo, dwell fuerte 493s/80%, sin veredicto de botón) /
Sofi→Peters *Misterio en Egipto* (redescub, sin señal). 30/08 Andy→Dalai
Lama *The Art of Happiness* (redescub, sin señal) / Sofi→Haig *How to
Stop Time* (nuevo, sin señal). Ninguna ficha de Sofi tiene feedback desde
el 20/08.

## 📚 Contexto fijo
Catálogo: 437 volúmenes (re-extraer `/tmp/catalog.json` cada corrida).
Suscripción: Andy y Sofi `active`. M2/M3/M4/M6 pasaron a vitrinas pero
libros siguen fichados con su id de siempre.

### Sofi — vetas confirmadas
Salas: sala King (R4+R5, 50 libros), salón del crimen (M5), rincón Valeria
(M6, quemado). Aciertos duros: **Dicker Harry Quebert `lo_quiero`+`love`**
(17/07); **Klune-Casa-mar-azul `me_tienta`+`love`** (05/08); **Haig
*Biblioteca de medianoche* `lo_quiero`+`love`** (27/07, audiencia todos).
Todo lo de después del 20/08 sigue sin feedback (ver sección de canal
arriba). Romance contemporáneo (Henry x2): descartado.
**Guardia máxima misterio/cozy**: `ya_lo_lei` en King, Katzenbach,
Carlisle, Benavent, Henry — sagas masivas ya devoradas por Kindle, evitar
esos autores puntuales.
- Quemados (además de lo de arriba): Osman t.1-2, Dicker Harry Quebert,
  Hill, King R5-018, Katzenbach M5-024, Carlisle M5-012, Benavent
  M6-001-009, Henry (ambos), Coyle M5-011, Klune-Puerta, Heap House,
  Bennett-Windsor y libro 2 (usado 31/08), Klune-Somewhere,
  Doyle-Baskerville, Haig-Biblioteca-medianoche, Haig-The-Humans,
  Christie-Mirrors M5-021, Klune-Puppets, Peters-Misterio-en-Egipto
  M5-019, Haig-How-to-Stop-Time.
- Banco redescub: M5-016 Delany libro 2 (esperar señal de M5-014). NO usar
  M5-022, M5-009, M5-008, M5-002, M6 entero (romance/no visto). Limpios en
  M5: Sherlock x4 (M5-033/006/034/035/036), Christie M5-020 (*The Secret
  of Chimneys*).
- Banco nuevo: Backman *Un hombre llamado Ove* (riesgo "ya la vi",
  película), Haig *Reasons to Stay Alive* (memoir, cambia de formato).
  Si tras 2-3 nuevos más sigue sin señal, priorizar redescub confirmado en
  casa por sobre nuevo experimental.

### Andy — datos duros
Estante L4 (28 + 5 nuevos agosto). Gustos: wellness, autosuperación,
positividad, astronomía, neurociencia, espiritualidad oriental, finanzas,
fábulas. Idioma indistinto. Regla confirmada x3: autor identitario/ya-en-
casa > clásico consagrado sin dueño (Bach 2/2; hoy 31/08 se aplica de
nuevo con Brewer). Fábula corta (Bach, Hesse, Mackesy) sigue siendo su
combo más seguro. Último voto de botón: Herrigel 26/08 (`me_tienta`+
`like`); desde entonces, dwell fuerte sin cerrar veredicto en Flow/
Huxley/Fogg/Dalai Lama — canal sano, así que el silencio del botón es
dato de contenido o fricción del CTA, no de entrega.
- Aciertos: Rovelli, Bach Ilusiones, Holiday (plenos); Cosmos, Bach
  Gaviota, Herrigel (redescub, `me_tienta`+`like`). `ya_lo_lei`: Frankl,
  Meditaciones (clásicos sin dueño).
- Astronomía en pausa: L5-024 Hoyle, L5-021 Whipple. Estoicismo: banco
  Séneca Cartas a Lucilio. Cuerpo/sueño: Walker con primer voto real.
  Neurociencia/conciencia: Seth (25/08), Huxley (28/08) y ahora Brewer
  *Craving Mind* (31/08), sin veredicto. Oriental nivel 3 en Dalai Lama
  (30/08). Hábitos: Fogg (29/08) y su eco en Brewer hoy, dwell fuerte sin
  veredicto — usar el próximo voto real (el que sea) fuerte para afinar.
- Banco nuevo: Sapolsky *Behave* (en pausa por repetición reciente),
  mindfulness (Thich Nhat Hanh, Kabat-Zinn — Pema Chödrön descartada por
  confusión con Thubten Chodron, L4-016), oriental (*Tao Te Ching*, Alan
  Watts, Suzuki), psicología positiva (Haidt, Seligman), hábitos (Wendy
  Wood *Good Habits, Bad Habits*, esperar que cierre Fogg o Brewer con
  voto antes de sumar un tercer libro de esta veta).
- Banco redescub: usado 26/08 L4-010, 28/08 L4-014, 30/08 L4-021. Próxima
  prioridad: L4-015 *El Alquimista*, L4-016 *Budismo para principiantes*.
  Astro: L5-024, L5-021 (en pausa).

## 🛡️ Guardia
"Nuevo": título+autor contra catálogo completo (sin tildes) y contra
`recommended.json` — incluir variantes de nombre parecidas (ver caso Pema
Chödrön / Thubten Chodron, mismo apellido fonético, personas distintas).
Campo `to` obligatorio en `queue.json`. Revisar `subscription.json` cada
corrida. `read_status` de enrichment NO confiable para Sofi (Kindle
paralelo); para Andy sí. Buscalibre: siempre
`buscalibre.uy/libros/search/?q=…`; para precio exacto, buscar el link de
producto directo y leer su `"price"`/`"priceCurrency"` en el HTML — la
vista de búsqueda a veces sí lo expone (Craving Mind, 31/08), a veces no.
Un link de Google Play con 404 real (no la página de bloqueo de bots) es
un link malo: declarar la existencia sin publicarlo, nunca inventar un ID.

## 🔭 Qué mirar (próxima corrida — 01/09, régimen diario)
Mañana se invierte: Andy redescub, Sofi nuevo. (1) Confirmar en
`send_log.json` que `2026-08-31-rec-andy`/`-sofi` salieron ~19:00 -03:00.
(2) Si Sofi sigue en cero (7ma semana muda), esta vez ya se le avisó al
dueño directo en la ficha de Andy — revisar si contestó algo distinto a
un botón (p.ej. un rec-nota de Andy sobre ella). (3) Si Andy cierra por
fin un voto de botón en cualquiera de Flow/Huxley/Fogg/Dalai
Lama/Craving Mind, usarlo fuerte: son 5 fichas seguidas de dwell alto sin
veredicto, la señal que se acumule ahí vale más que una nueva jugada a
ciegas. Sin señal todavía: Coyle, Delany M5-014, Rovelli 04/08, Rojas
05/08, Thorogood, vuelo-ebooks.

## 🎬 CINE + 🧳 viaje (fuera del ciclo)
Cine: 1/semana, `todos`, viernes ~19:00. Sofi evita gore/subtítulos
siempre; Andy evita "triste", nunca doblado. Severance "me tienta" Andy —
candidata fuerte para la próxima función. Sin Función Nº2 desde 31/07,
fuera del alcance de esta corrida.

## 🧭 Sugerencias hub
`recs/index.html` lista todo leyendo `recommended.json` por fetch — cero
mantenimiento manual. NO TOCAR (ni este ni `recs/setup.html`).
