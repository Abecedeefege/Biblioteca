# Perfil de gustos — recomendador de Bibliotequeando

## ⚖️ RÉGIMEN — 🚨 15/09: Andy pasó a Miércoles+Domingo, Sofi sigue diaria
Cambio real de cadencia (no mío): Andy entró a `suscripcion/libros.html`
el 15/09 (15:09 -03:00) y puso su dispositivo en `days:[3,7]`
(miércoles/domingo), `per_week:2` — `notifications/preferences.json →
devices.Andy.libros`, SOLO LECTURA, manda sobre cualquier régimen previo
(incluido el diario del 20/08). Sofi no tiene override: sigue heredando
`streams.libros` (diario). **Los días que NO son miércoles ni domingo,
la ficha es SOLO de Sofi** — no fabricar una de Andy que el despachador
va a marcar `skipped`. Miércoles/domingo vuelven las DOS fichas (par
nuevo+biblioteca por persona). Push personal ~19:00 -03:00
(`"to":"Andy"`/`"to":"Sofi"`). Fichas pre-armadas cuentan para su
destinatario. Cine: viernes ~19:00 `todos`, vía `streams.cine`.
**Sin sincronizar**: `.claude/commands/recomendacion.md` sigue con el
régimen semanal del 05/08 — esta sección manda; no es territorio mío.

## 🎧 Audio 30s + Google Play, en TODA ficha (desde 04/09)
Botón de resumen en audio (Web Speech API, cliente puro) + audiolibro de
Google Play si existe, por título+autor(+narrador). Si Google Play no da
200 en vivo pero otra fuente (Audible/Amazon) confirma el contenido, se
declara igual pero SIN linkear el URL.

## 🚨 Canal de Sofi: cero desde 05/08 — mañana 16/09 es el umbral
`sync/engagement.json` sin ningún evento de Sofi desde 2026-08-05 (5+
semanas). `subscription.json` en `active`. Si la corrida del 16/09 sigue
en cero, escalar fuerte en la ficha de Andy. `rec-canal` repetida hoy en
su ficha, sin respuesta desde el 12/09. Guardia sin relajar pese al silencio.

## ✅ Canal de Andy: activo, pero 9 fichas de libro sin veredicto
Última vez que votó un libro: Kiyosaki `ya_lo_lei` (05/09). Desde
entonces 9 sin veredicto (última: Carroll 14/09). Hoy SÍ hubo actividad
real: cambió su cadencia, resolvió a fondo la pista de cine (ver abajo)
y reabrió la ficha de Carroll (click+visita, sin dwell/veredicto) desde
el push de confirmación — no es silencio de canal, es que no cierra
veredicto en libros. `rec-canal` de Carroll (14/09) sigue sin respuesta.

## 📅 09/15 — hoy
Gate de día: MARTES → solo Sofi. Cero feedback nuevo de libros (Hanh,
Delany, Doidge, Fawcett, Carroll, Instituto siguen sin veredicto).
**Cine ya resuelto al empezar la corrida** (lo hizo una sesión anterior
hoy mismo): Función Nº 2 construida a pedido de Andy, `severance`
marcada `ya_la_vimos` — solo se verificó que página y push estén en
orden, no se tocó de nuevo.
**Sofi → *Monje y Robot* (A Psalm for the Wild-Built), Becky Chambers
(2021, Hugo a mejor novela corta, nuevo)**: banco de misterio/cozy casi
agotado de nombres frescos → se sigue el pivot found-family cálido que
abrieron Mandanna (11/09) y Fawcett (13/09) — ninguna de las tres tiene
veredicto todavía; la próxima señal real decide si seguir por acá o
volver al oscuro calibrado (Dicker/Hill). Verificado contra catálogo
(331 vol., recontado hoy — la cifra de 437 que circulaba estaba vieja)
y los 100 registros de `recommended.json`: sin coincidencias. A
diferencia de Carroll, la edición en español (Crononauta, ómnibus con
los 2 tomos) SÍ está en stock en Buscalibre UY (45% dcto., ~USD 33).
Audiolibro en inglés (Em Grosland) confirmado sin linkear. `rec-canal`
repetida.

## 📚 Contexto fijo
Catálogo: 331 volúmenes reales (re-extraer `/tmp/catalog.json` cada
corrida). Suscripción: Andy y Sofi `active`.

### Sofi — vetas confirmadas
Salas: King (R4+R5, 50 libros — usados: R5-018 `ya_lo_lei`, R5-025
14/09). Aciertos duros (pre-20/08): Dicker HQ `lo_quiero`+`love`;
Klune-mar-azul `me_tienta`+`love`; Haig *Medianoche* `lo_quiero`+`love`
(única `todos`). Romance contemporáneo (Henry x2): descartado. Guardia
máxima misterio/cozy: `ya_lo_lei` en King R5-018, Katzenbach, Carlisle,
Benavent, Henry.
- Quemados (autoridad única: `recommended.json`): Osman, Dicker, Hill,
  Katzenbach, Carlisle, Benavent, Coyle, Klune, Heap House, Bennett,
  canon Doyle, Delany, Haig, Christie, Peters, Backman, Flynn, French,
  Hawkins, Mandanna, Fawcett, Chambers (15/09).
- Banco redescub M5: M5-034 *Su Último Saludo* (Doyle, con cautela) y
  M5-033 (compendio DK). Los 49 King restantes son el banco más seguro.
  Reponer M5 con 2-3 autoras de nicho.
- Banco nuevo found-family: EN CERO tras Chambers — reponer 2-3 nombres
  (línea Chambers/Klune: cozy sci-fi o fantasía suave, sin gore) antes
  del próximo turno "nuevo" de Sofi.

### Andy — datos duros
Estante L4 (28+5), L5 astronomía (33). Gustos: wellness, autosuperación,
positividad, astronomía, neurociencia, oriental, finanzas, fábulas.
Idioma indistinto. Autor identitario > clásico sin dueño; fábula corta
sigue siendo el combo más seguro.
- Botón cerrado: Rovelli, Bach Ilusiones, Holiday, Coelho, Kiyosaki.
  Sin veredicto (9): Haidt, Chodron, Seligman, Wood, Hoyle, Sapolsky,
  Saint-Exupéry, Mack, Hábitos Atómicos, Milagro de Mindfulness, Doidge,
  Carroll.
- Astronomía: Rovelli (ACIERTO PLENO) y Cosmos (acierto redescub) únicos
  con señal real; Hawking/Mack sin veredicto. Banco nuevo corto —
  reponer. Oriental: tocada con Hanh (12/09), banco mindfulness solo
  Kabat-Zinn — reponer. Neurociencia: pausa tras Doidge (13/09).

## 🛡️ Guardia
Título+autor contra catálogo (sin tildes) y `recommended.json` —
variantes de nombre incluidas. Campo `to` obligatorio en `queue.json`.
Revisar `subscription.json` cada corrida. `read_status` de enrichment no
confiable para Sofi (Kindle paralelo); para Andy sí. Si TODAS las
ediciones de Buscalibre figuran agotadas, declararlo y sumar alternativa
verificada en vez de ocultarlo.

## 🔭 Qué mirar (próxima corrida)
(1) ¿Señal nueva de Sofi? Umbral 16/09 — si sigue en cero, escalar en la
ficha de Andy. (2) Respuestas a `rec-canal` (Andy y Sofi) — prioridad
máxima. (3) Veredictos pendientes: Carroll/Instituto (14/09),
Doidge/Fawcett (13/09), Hanh/Delany (12/09). (4) Confirmar 201 en
`send_log.json` del push de Sofi de hoy. (5) Reponer banco nuevo de
astronomía/mindfulness (Andy) y found-family (Sofi, en cero); 2-3
autoras de nicho al banco redescub M5.

## 🎬 CINE + 🧳 viaje (fuera del ciclo)
Cine: viernes ~19:00, `todos` (`to:["Andy","Sofi"]`; C-test no es de la
casa), cadencia en `streams.cine` (elegida por Andy 15/09). Función Nº2
publicada 15/09, encolada para el viernes 18/09:
`recs/2026-09-18-sala-02.html` (Un hombre infiltrado / Upload / Colegio
Abbott). La Nº3 se arma sobre SUS votos, no los de la Nº1.
- **LAS TRES DE LA Nº1 ESTÁN VISTAS**: omitb, arrival y severance con
  `ya_la_vimos` (severance marcada por Andy el 15/09). Nunca reofrecerlas.
- Instrucción vigente de Andy (15/09, `rec-nota:2026-07-31-sala-01`):
  "vimos todas, partí de esas para más recomendaciones similares" → la
  Nº2 desciende de las dos semillas vivas (Only Murders, Separación).
  Seguir así hasta que diga otra cosa.
- La Nº2 pregunta `cine-semilla:<id>` — si contestan, la Nº3 sale entera
  de ahí. `cine-vistas:<id>` se lee siempre antes de elegir títulos;
  cada título que escriban queda vetado para siempre.
- Sofi pidió UNA por función, Andy TRES (se dan tres, una es el plan,
  capítulos ≤46 min). Intersección de géneros: comedia, histórico,
  animación, biopic. Plataformas: Netflix, Prime, Disney+, Max. Apple
  TV+ NO.
- Descartado: `Fallout` encaja con Andy pero es el corte de gore de
  Sofi — sirve si algún día se pide algo solo para él.
- `La llegada` NO es semilla: Sofi la marcó `no_va`. Las semillas vivas
  son Only Murders (comedia con crimen) y Separación (rarezas con reglas).
- **FORMATO VIGENTE DE LAS FICHAS DE CINE = STORIES** (pedido de Andy el
  15/09: "muchísimo más breve, andá directo a las recomendaciones, menos
  relleno, más datos e info, estilo insta stories"). Patrón: portada + una
  pantalla por título + cierre, se pasa con el dedo. Cada título = rejilla
  de datos (plataforma / duración / temporadas / estado / creador) + chips
  de puntajes + trama en 3 líneas + elenco + 3 líneas de match (Sofi /
  Andy / Ojo) + links + voto. **Nada de ensayo antes de los títulos**: el
  porqué va en el badge del poster. Copiar `recs/2026-09-18-sala-02.html`.

## 🧭 Sugerencias hub
`recs/index.html` lee `recommended.json` por fetch — cero mantenimiento
manual. NO TOCAR (ni este ni `recs/setup.html`).
