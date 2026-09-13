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
título+autor(+narrador) — 403 a bots es bloqueo conocido; si otra fuente
(WebFetch directo, Audible/Amazon) confirma el contenido, se declara igual,
pero solo se LINKEA el URL de Google Play si el chequeo en vivo dio 200.

## 🚨 09/13 — canal de Sofi: sigue en cero, 3 días para el umbral
Sigue sin NINGÚN evento de Sofi desde 2026-08-05 (tampoco hoy — cero
eventos nuevos de nadie desde el 12/09 00:42 UTC). `subscription.json`
en `active` para ambos. **Quedan 3 días para el umbral del 16/09**: si
sigue en cero ahí sí re-escalar fuerte en la ficha de Andy. Se sigue
eligiendo con la misma disciplina de guardia — el silencio es de canal,
no evidencia de contenido fallando. Se sumó de nuevo la micro-pregunta
`rec-canal` en la ficha de hoy (barata, puede confirmar si el problema es
de notis).

## ✅ Canal de Andy — activo, racha de "abrió y no votó" crece
Última vez que votó: Kiyosaki `ya_lo_lei` (05/09). Desde entonces, 7
fichas seguidas sin veredicto (Wood, Hoyle, Sapolsky, Principito, Mack,
Hábitos Atómicos, Milagro de Mindfulness) — con la de hoy (Doidge), 8 en
juego. Click/dwell siguen apareciendo (Hábitos Atómicos: 86s/43% scroll),
o sea que abre y lee, pero no cierra veredicto. No cambié la estructura
de página todavía porque es la misma que le funcionó con Rovelli/Bach,
pero si el redescub de Doidge de hoy tampoco cierra, la próxima corrida
prueba algo distinto (veredicto más corto, o pregunta directa de canal).

## 📅 09/13 — hoy
Cero eventos nuevos de feedback desde el cutoff (2026-09-12T00:42:32Z) —
ni Andy ni Sofi interactuaron con las fichas de ayer (Hanh, Delany)
todavía. Ambos pushes del 12/09 salieron 201 (confirmado en
`send_log.json`). Régimen: ayer Andy=nuevo (Hanh) → hoy le toca la
biblioteca; Sofi=redescub (Delany) → hoy le toca la nueva.
**Andy → *The Brain That Changes Itself*, Norman Doidge (2007,
redescub, L4-011)**: este libro ya había sido MENCIONADO dos veces sin
recomendarse (ficha de Pollan 23/07, ficha de Sapolsky 08/09, ambas
señalando que ya lo tiene en L4 sin abrir) — en vez de sumar un tercer
"nuevo" a la veta neurociencia, se le devuelve el libro que ya tiene.
Rota de espiritualidad oriental (ayer) a neurociencia (retoma el hilo
abierto por Sapolsky/Eagleman, ninguno con veredicto aún). Seis casos
del libro verificados contra Wikipedia (capítulos exactos) — se
descartó a propósito usar a Ramachandran/taxistas de Londres por no
poder confirmar que están en ESTE libro. Audiolibro en inglés confirmado
Y linkeado (Google Play, Jim Bond, HTTP 200 en vivo). **Sofi → *Emily
Wilde's Encyclopaedia of Faeries*, Heather Fawcett (2023, nuevo)**:
banco repuesto ayer con Becky Chambers y Fawcett; se elige Fawcett por
cruzar found-family cálido (su único acierto en fantasía, Klune) +
estructura de investigación/expediente (su veta detective) + slow-burn
sin melodrama (su pedido del 24/07) — más ambicioso que repetir found-
family puro. Ambos verificados contra catálogo (437 vol.) y
`recommended.json` completo, sin coincidencias nuevas. Edición española
(Umbriel, feb-2023) verificada en Buscalibre Uruguay en vivo (HTTP 200,
desde ~USD 23). Audiolibro en inglés (Ell Potter/Michael Dodds)
declarado sin linkear: Google Play devolvió error al chequeo en vivo,
aunque la fuente secundaria (Audible/Amazon) confirma que existe.

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
  Regreso (M5-006), Delany M5-014/M5-016, Haig x3, Christie x2,
  Peters-Egipto, Backman-Ove, Flynn-Heridas, French-Silencio del Bosque,
  Hawkins-chica-del-tren, Mandanna, Fawcett-Emily Wilde (hoy).
- Banco redescub: queda M5-034 *Su Último Saludo* (canon Doyle, cuarto
  de la serie) y M5-033 (compendio DK) — reponer con 2-3 nombres más
  antes de la próxima corrida de redescub (evitar más canon Doyle
  seguido; buscar otra autora de nicho tipo Delany/Minix).
- Banco nuevo: Becky Chambers (Monk & Robot) queda como próximo nombre de
  fantasía cálida found-family tras Fawcett hoy — reponer con 2-3 más
  antes de que se agote (Heather Fawcett tiene 3 secuelas si esta
  funciona). Círculo cozy clásico y Klune siguen agotados.

### Andy — datos duros
Estante L4 (28+5), L5 astronomía (33). Gustos: wellness, autosuperación,
positividad, astronomía, neurociencia, oriental, finanzas, fábulas.
Idioma indistinto. Regla confirmada: autor identitario > clásico sin
dueño; fábula corta sigue siendo el combo más seguro (ahora con
Saint-Exupéry también usado).
- Botón cerrado: Rovelli, Bach Ilusiones, Holiday, Coelho, Kiyosaki.
  Sin veredicto: Haidt, Chodron, Seligman, Wood, Hoyle, Sapolsky,
  Saint-Exupéry, Mack, Hábitos Atómicos, Milagro de Mindfulness, Doidge
  (hoy) — lote pendiente, cada vez más largo (ver alerta arriba).
- Neurociencia/hábitos: Sapolsky y Fogg (493s dwell) abrieron la veta;
  hoy se retoma con Doidge (redescub, ya en su estante) en vez de sumar
  otro "nuevo". Espiritualidad oriental: tocada de frente con Hanh
  (12/09) — banco mindfulness ahora solo con Kabat-Zinn, reponer.
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
(1) ¿Llegó señal nueva de Sofi? Quedan 3 días para el umbral del 16/09
— si sigue en cero, escalar más fuerte en la ficha de Andy. (2)
Veredicto de Doidge (hoy) y de Hanh/Delany (ayer, sin señal todavía) —
si Andy tampoco vota Doidge, considerar simplificar el CTA o preguntar
directo por el canal. (3) Confirmar 201 en `send_log.json` de los dos
pushes de hoy (09/13). (4) Reponer banco nuevo de astronomía para Andy
(Sean Carroll) y banco mindfulness (Kabat-Zinn queda solo); sumar Becky
Chambers al banco found-family de Sofi (queda solo ese nombre) y 2-3
autoras de nicho tipo Delany/Minix al banco redescub de Sofi (M5-033/034
nada más).

## 🎬 CINE + 🧳 viaje (fuera del ciclo)
Cine: 1/semana, `todos`, viernes ~19:00. Sofi evita gore/subtítulos;
Andy evita "triste", nunca doblado. Severance "me tienta" Andy —
candidata fuerte. Sin Función Nº2 desde 31/07.

## 🧭 Sugerencias hub
`recs/index.html` lee `recommended.json` por fetch — cero mantenimiento
manual. NO TOCAR (ni este ni `recs/setup.html`).
