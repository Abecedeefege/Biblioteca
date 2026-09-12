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

## 🚨 09/12 — canal de Sofi: 5+ semanas en cero
Sigue sin NINGÚN evento de Sofi desde 2026-08-05 (tampoco hoy).
`subscription.json` en `active` para ambos — no es la suscripción, es
el canal de Sofi en sí. **Faltan 4 días para el umbral del 16/09**: si
sigue en cero ahí sí re-escalar fuerte en la ficha de Andy (no repetí
el bloque de alerta hoy para no espamear). Sigo eligiendo con la misma
disciplina de guardia — el silencio es de canal, no evidencia de
contenido fallando.

## ✅ Canal de Andy — activo, un patrón claro
"Abrió y no votó" domina desde hace 7 fichas seguidas (Haidt, Chodron,
Seligman, Wood, Hoyle, Sapolsky, Saint-Exupéry, Mack, Hábitos Atómicos):
click/dwell alto pero sin veredicto, vs. el período previo con voto
cerrado (Coelho `ya_lo_lei`, Kiyosaki `ya_lo_lei`+`like`+dwell 178s).
Hábitos Atómicos (11/09) sumó click (12/09 00:41) + dwell 86s/43%
scroll — en curso, sin veredicto. Vigilar si hace falta simplificar el
CTA o si es el ritmo real de lectura de Andy — no asumir desinterés.

## 📅 09/12 — hoy
Único evento nuevo: click+dwell de Andy en Hábitos Atómicos (ya arriba).
Régimen: ayer Andy=redescub (Clear) → hoy nuevo; Sofi=nuevo (Mandanna)
ayer → hoy redescub. **Andy → *El Milagro de Mindfulness*, Thich Nhat
Hanh (1975, nuevo)**: rota de hábitos/conducta a espiritualidad
oriental — veta declarada 15/07 y nunca tocada de frente (solo
Siddhartha, ficción, sin veredicto). Formato corto (160p) y poético,
mismo combo que dio el ACIERTO PLENO con Rovelli. Historia de origen
fuerte: carta real a un monje en guerra, 1974-75. **Sofi → *Un cadáver
en Baker Street*, Vicki Delany (2017, redescub, M5-016)**: banco
"Delany 2" — secuela de *Elemental, querida lectora* (M5-014, 02/08,
sin señal), rompe la racha de canon Doyle puro en sus últimos 2
redescub (Memorias, Regreso — ninguno votado). Guardia: ambos
verificados contra catálogo (437 vol.) y `recommended.json` completo,
sin coincidencias nuevas; M5-016 nunca usado, distinto de M5-014.
Ninguna cita verificable del interior de Delany en Goodreads — se usó
una reseña real de Publishers Weekly en su lugar, citada tal cual, en
vez de inventar una cita de libro. Audiolibro de Hanh confirmado en
español (Audible, Miguel Ángel Jenner) pero sin link estable a Google
Play encontrado — declarado sin linkear, como pide la guardia de
honestidad. Mismo criterio con el audiolibro en inglés de Delany
(narradora Kelly Clare): existencia confirmada, sin link verificado.

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
  Heap House, Bennett+secuela, Doyle-Baskerville/Aventuras/Memorias/
  Regreso (M5-006), Delany M5-014/M5-016 (hoy), Haig x3, Christie x2,
  Peters-Egipto, Backman-Ove, Flynn-Heridas, French-Silencio del Bosque,
  Hawkins-chica-del-tren.
- Banco redescub: queda M5-034 *Su Último Saludo* (canon Doyle, cuarto
  de la serie) y M5-033 (compendio DK) — reponer con 2-3 nombres más
  antes de la próxima corrida de redescub (evitar más canon Doyle
  seguido; buscar otra autora de nicho tipo Delany/Minix).
- Banco nuevo: círculo cozy agotado; Hawkins, Doyle-Regreso y Mandanna
  (09/11) ya usados. Fantasía cálida found-family confirmada como veta
  viva (Klune agotado x3, Mandanna nueva hoy) — buscar más nombres de
  esa veta (Becky Chambers, Heather Fawcett) para el banco antes de que
  vuelva a tocarle un nuevo.

### Andy — datos duros
Estante L4 (28+5), L5 astronomía (33). Gustos: wellness, autosuperación,
positividad, astronomía, neurociencia, oriental, finanzas, fábulas.
Idioma indistinto. Regla confirmada: autor identitario > clásico sin
dueño; fábula corta sigue siendo el combo más seguro (ahora con
Saint-Exupéry también usado).
- Botón cerrado: Rovelli, Bach Ilusiones, Holiday, Coelho, Kiyosaki.
  Sin veredicto: Haidt, Chodron, Seligman, Wood, Hoyle, Sapolsky,
  Saint-Exupéry, Mack, Hábitos Atómicos, Milagro de Mindfulness (hoy)
  — lote pendiente, cada vez más largo.
- Neurociencia/hábitos: Sapolsky y Fogg (493s dwell) abrieron la veta,
  sin cerrar aún. Espiritualidad oriental: tocada de frente por primera
  vez hoy (Hanh) — banco mindfulness ahora solo con Kabat-Zinn, reponer.
- Astronomía: retomada con Hoyle y llevada un paso más con Mack, sin
  señal aún. Banco nuevo corto tras Mack — reponer con Sean Carroll.
  Finanzas cerrada con Kiyosaki, sin urgencia.

## 🛡️ Guardia
Título+autor contra catálogo (sin tildes) y `recommended.json` —
incluir variantes de nombre. Campo `to` obligatorio en `queue.json`.
Revisar `subscription.json` cada corrida. `read_status` de enrichment
no confiable para Sofi (Kindle paralelo); para Andy sí. Si TODAS las
ediciones de Buscalibre figuran agotadas, declararlo y sumar
alternativa verificada en vez de ocultarlo.

## 🔭 Qué mirar (próxima corrida)
(1) ¿Llegó señal nueva de Sofi? Quedan 4 días para el umbral del
16/09 — si sigue en cero, escalar más fuerte en la ficha de Andy.
(2) Veredicto del lote pendiente de Andy (9 fichas sin voto, ver
arriba) y de las cinco fichas sin voto de Sofi (Doyle Aventuras/
Memorias/Regreso, Mandanna, Delany-Baker-Street). (3) Confirmar 201 en
`send_log.json` de los dos pushes de hoy (09/12). (4) Reponer banco
nuevo de astronomía para Andy (Sean Carroll) y banco mindfulness
(Kabat-Zinn queda solo); sumar 2-3 nombres a fantasía cálida
found-family para Sofi (Becky Chambers, Heather Fawcett) y 2-3 autoras
de nicho tipo Delany/Minix al banco redescub de Sofi (que se está
quedando corto: solo M5-033/034).

## 🎬 CINE + 🧳 viaje (fuera del ciclo)
Cine: 1/semana, `todos`, viernes ~19:00. Sofi evita gore/subtítulos;
Andy evita "triste", nunca doblado. Severance "me tienta" Andy —
candidata fuerte. Sin Función Nº2 desde 31/07.

## 🧭 Sugerencias hub
`recs/index.html` lee `recommended.json` por fetch — cero mantenimiento
manual. NO TOCAR (ni este ni `recs/setup.html`).
