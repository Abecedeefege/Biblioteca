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

## 🚨 09/14 — canal de Sofi: sigue en cero, 2 días para el umbral del 16/09
Sigue sin NINGÚN evento de Sofi (ni de Andy) desde 2026-08-05 — cero
eventos nuevos desde el 12/09 00:42 UTC, otra vez. `subscription.json`
en `active` para ambos. **Quedan 2 días para el umbral del 16/09**: si
sigue en cero ahí, re-escalar fuerte en la ficha de Andy. Se repitió hoy
la micro-pregunta `rec-canal` en ambas fichas (ya se había probado con
Sofi el 12-13/09, sin respuesta todavía; hoy se sumó también a la de
Andy — ver abajo). Se sigue eligiendo con la misma disciplina de guardia.

## ✅ Canal de Andy — activo pero sin cerrar veredicto hace 9 fichas
Última vez que votó: Kiyosaki `ya_lo_lei` (05/09). Desde entonces, 8
fichas seguidas sin veredicto (Buenos/Malos Hábitos, Frontiers of
Astronomy, Compórtate, Principito, Mack, Hábitos Atómicos, Milagro de
Mindfulness, Doidge) — con la de hoy (Carroll), 9 en juego. Click/dwell
siguen apareciendo (abre y a veces queda rato), pero no cierra. Primer
cambio real hoy: en vez de seguir ajustando la estructura de página a
ciegas, se sumó una micro-pregunta directa `rec-canal` (3 opciones: notis
ok pero no vota / notis tarde-mal / ficha muy larga) para diagnosticar en
vez de adivinar. Revisar respuesta en la próxima corrida antes de decidir
el siguiente ajuste.

## 📅 09/14 — hoy
Cero eventos nuevos de feedback desde el cutoff (2026-09-12T00:42:32Z) —
tercer día seguido sin ninguna señal de ninguno de los dos (ni Hanh/Delany
del 12/09, ni Doidge/Fawcett del 13/09 alcanzaron a votarse todavía; son
fichas muy recientes, no se interpreta aún como fallo). Ambos pushes del
13/09 salieron 201 (confirmado en `send_log.json`). Régimen: ayer Andy
tuvo redescub (Doidge) → hoy le toca la nueva; Sofi tuvo nueva (Fawcett)
→ hoy le toca la biblioteca. **Andy → *El Gran Cuadro* (The Big Picture),
Sean Carroll (2016, nuevo)**: repone el banco de astronomía tras Mack
(10/09, sin señal aún) con el nombre que ya estaba anotado para reponer,
pero cruzándolo con la otra veta fuerte de Andy (sentido: Frankl, Bucay,
Haig) en vez de ser "otro libro de física" más — Carroll dedica el libro
entero a esa intersección. Rota fuera de neurociencia (turno anterior,
Doidge). Cuatro citas verificadas contra Goodreads. Edición en español
agotada en Buscalibre UY (declarado en la ficha); se ofreció la edición
en inglés en su lugar (HTTP 200 en vivo, ~USD 20), coherente con que
lee indistinto es/en. Audiolibro en inglés (narrado por el propio autor)
declarado sin linkear — Google Play dio error en el chequeo en vivo.
**Sofi → *El Instituto* (The Institute), Stephen King (2019,
redescub, R5-025)**: de sus 50 King, ninguno ofrecido hasta hoy salvo
R5-018 (18/07, resultó `ya_lo_lei`). Se evitó a propósito volver a canon
Doyle (M5-034 quedaba de candidato, pero ya van dos redescub seguidos con
sabor Sherlock: Regreso 10/09 y Delany 12/09) y volver a autoras ya
falladas (Carlisle, `ya_lo_lei`+`meh` el 22/07). El Instituto pega en el
punto medio entre sus dos vetas ganadoras — investigación (Osman, Dicker)
y oscuro (Hill) — sin ser terror sobrenatural puro, para variar el
registro. Verificado contra catálogo (437 vol.) y `recommended.json`
completo: sin coincidencias. Dato del Goodreads Choice Award 2019
(75.717 votos, 9° premio de King) verificado contra la página oficial.
Audiolibro en español (Alberto Santillán) declarado sin linkear por el
mismo motivo que arriba.

## 📚 Contexto fijo
Catálogo: 437 volúmenes (re-extraer `/tmp/catalog.json` cada corrida).
Suscripción: Andy y Sofi `active` — el silencio de Sofi no es un
problema de `subscription.json` (ver arriba).

### Sofi — vetas confirmadas
Salas: King (R4+R5, 50 libros — usados: R5-018 `ya_lo_lei`, R5-025 hoy).
Aciertos duros (todos pre-20/08, previos al silencio): **Dicker HQ**
`lo_quiero`+`love`; **Klune-mar-azul** `me_tienta`+`love`; **Haig
*Medianoche*** `lo_quiero`+`love` (única `todos`). Romance contemporáneo
(Henry x2): descartado. Guardia máxima misterio/cozy: `ya_lo_lei` en
King R5-018, Katzenbach, Carlisle, Benavent, Henry.
- Quemados: ver log completo en `recommended.json` (autoridad única).
  Resumen rápido de autores/series ya gastados en M5/M6: Osman, Dicker,
  Hill, Katzenbach, Carlisle, Benavent, Coyle, Klune, Heap House,
  Bennett, canon Doyle (Baskerville/Aventuras/Memorias/Regreso), Delany,
  Haig, Christie, Peters, Backman, Flynn, French, Hawkins, Mandanna,
  Fawcett. En R4/R5: solo King R5-018 (`ya_lo_lei`) y R5-025 (hoy).
- Banco redescub M5: queda M5-034 *Su Último Saludo* (canon Doyle, con
  cautela — dos redescub seguidos ya con sabor Sherlock) y M5-033
  (compendio DK). Los 49 King restantes son el banco más seguro ahora
  (autor con 2/2 aciertos contando a Hill). Reponer M5 con 2-3 autoras
  de nicho antes de la próxima vez que le toque ese estante.
- Banco nuevo: Becky Chambers (Monk & Robot) sigue como próximo nombre de
  fantasía cálida found-family — reponer con 2-3 más antes de que se
  agote. Círculo cozy clásico y Klune siguen agotados.

### Andy — datos duros
Estante L4 (28+5), L5 astronomía (33). Gustos: wellness, autosuperación,
positividad, astronomía, neurociencia, oriental, finanzas, fábulas.
Idioma indistinto. Regla confirmada: autor identitario > clásico sin
dueño; fábula corta sigue siendo el combo más seguro.
- Botón cerrado: Rovelli, Bach Ilusiones, Holiday, Coelho, Kiyosaki.
  Sin veredicto (9 en juego, ver alerta arriba): Haidt, Chodron,
  Seligman, Wood, Hoyle, Sapolsky, Saint-Exupéry, Mack, Hábitos Atómicos,
  Milagro de Mindfulness, Doidge, Carroll (hoy).
- Astronomía: Rovelli (ACIERTO PLENO) y Cosmos (acierto redescub) siguen
  siendo lo único con señal real; Hawking y Mack sin veredicto. Hoy se
  cruza la veta con "sentido" vía Carroll en vez de sumar un tercer
  nombre suelto de física. Banco nuevo corto tras esto — reponer.
- Espiritualidad oriental: tocada de frente con Hanh (12/09), banco
  mindfulness con solo Kabat-Zinn — reponer. Neurociencia: retomada con
  Doidge (13/09, redescub); pausa por ahora, no sumar un tercer nombre
  sin señal de los dos anteriores.

## 🛡️ Guardia
Título+autor contra catálogo (sin tildes) y `recommended.json` —
incluir variantes de nombre. Campo `to` obligatorio en `queue.json`.
Revisar `subscription.json` cada corrida. `read_status` de enrichment
no confiable para Sofi (Kindle paralelo); para Andy sí. Si TODAS las
ediciones de Buscalibre figuran agotadas, declararlo y sumar
alternativa verificada en vez de ocultarlo (hoy: Carroll es, edición ES).

## 🔭 Qué mirar (próxima corrida)
(1) ¿Llegó señal nueva de Sofi o Andy? 2 días para el umbral del 16/09 de
Sofi — si sigue en cero, escalar fuerte en la ficha de Andy. (2)
Respuesta a `rec-canal` de Andy (nueva hoy) y de Sofi (repetida) — es la
señal más importante a revisar. (3) Veredicto de Carroll/Instituto (hoy)
y de Doidge/Fawcett (13/09, todavía sin tiempo de votar). (4) Confirmar
201 en `send_log.json` de los dos pushes de hoy (09/14). (5) Reponer
banco nuevo de astronomía y mindfulness para Andy (Kabat-Zinn); sumar
Becky Chambers al banco found-family de Sofi y 2-3 autoras de nicho al
banco redescub de M5 (fuera de los 49 King disponibles).

## 🎬 CINE + 🧳 viaje (fuera del ciclo)
Cine: viernes ~19:00, `todos` (= `to:["Andy","Sofi"]`; C-test NO es de la
casa). La cadencia ahora la manda `notifications/preferences.json`
(`streams.cine`), elegida por Andy el 15/09. **Función Nº 2 publicada el
15/09 por pedido directo de Andy**, encolada para el viernes 18/09:
`recs/2026-09-18-sala-02.html` (Un hombre infiltrado / Colegio Abbott /
Fallout). La Nº 3 se arma sobre SUS votos, no sobre los de la Nº 1.
Aprendizajes aplicados en la Nº 2, no repetir:
- El error de la Nº 1 fue de INFORMACIÓN: 2 de 3 ya vistas. La Nº 2 abre
  una caja de texto libre `cine-vistas:<id>` — **leerla siempre antes de
  elegir títulos**; cada título que escriban queda vetado para siempre.
- Sofi pidió UNA por función, Andy TRES. Resuelto con roles explícitos:
  plan para los dos (~30 min/cap) + reserva para los dos + una de Andy solo.
- Intersección de géneros de las dos listas: comedia, histórico, animación,
  biopic. Plataformas de ambas: Netflix, Prime, Disney+, Max.
- Severance NO se vuelve a recomendar a ciegas: está en Apple TV+, fuera de
  las dos listas. La Nº 2 lo puso como decisión (`cine-apple:<id>` →
  un_mes / mas_adelante / sacala). **Respetar lo que voten.**

## 🧭 Sugerencias hub
`recs/index.html` lee `recommended.json` por fetch — cero mantenimiento
manual. NO TOCAR (ni este ni `recs/setup.html`).
