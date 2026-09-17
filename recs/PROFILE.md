# Perfil de gustos — recomendador de Bibliotequeando

## ⚖️ RÉGIMEN — Miércoles+Domingo = par doble para Andy, Sofi diaria
`notifications/preferences.json → devices.Andy.libros` (`days:[3,7]`,
SOLO LECTURA) manda sobre cualquier régimen previo. Sofi sigue heredando
`streams.libros` (diario). **Días que NO son miércoles ni domingo:
ficha SOLO de Sofi.** Miércoles/domingo: DOS fichas, nuevo + biblioteca,
alternando quién recibe cada una según el último día doble (no el
calendario). Push personal ~19:00 -03:00. Cine: viernes ~19:00 `todos`.
**Sin sincronizar**: `.claude/commands/recomendacion.md` sigue con el
régimen semanal del 05/08 — esta sección manda.

## 🎧 Audio 30s + Google Play, en TODA ficha (desde 04/09)
Botón de resumen en audio (Web Speech API, cliente puro) + audiolibro de
Google Play si existe, por título+autor(+narrador). Si Google Play no da
200 en vivo pero otra fuente (Audible/Amazon) confirma el contenido, se
declara igual pero SIN linkear el URL.

## 🚨 Canal de Sofi: SIGUE EN CERO — Andy no respondió la nota
`sync/engagement.json` sin ningún evento de Sofi desde 2026-08-05 (6+
semanas), `subscription.json` en `active`. Escalado el 16/09 en la ficha
de Andy (pedile que le pregunte a Sofi en persona + caja de texto).
**Revisado hoy (17/09): Andy interactuó con esa ficha (`me_tienta`,
`like`, `leer-esta-noche:ya_leido`) pero NO usó la caja de nota — sigue
sin responder.** Hoy es jueves, no le toca ficha a Andy (días 3/7):
re-escalar recién el domingo 20/09, primera prioridad de esa corrida.
La ficha de hoy para Sofi es en sí misma una prueba de canal.

## ✅ Canal de Andy: activo, cadencia miércoles+domingo (desde 15/09)
Votó Gawdat *Solve for Happy* el 16/09 (procesado hoy): `me_tienta` +
`like` + `leer-esta-noche:ya_leido` — acierto de veta (positividad,
enfoque ingeniero) pero SIN descubrimiento: ya lo había leído sin
ninguna señal previa. Guardia nueva: `read_status` "desconocido" tampoco
garantiza no-leído para Andy (no es solo el Kindle paralelo de Sofi).
Siguen sin veredicto: Haidt, Chodron, Seligman, Wood, Hoyle, Sapolsky,
Saint-Exupéry, Mack, Hábitos Atómicos, Milagro de Mindfulness, Doidge,
Carroll.

## 📅 09/17 — hoy (jueves, NO es día doble)
Gate de día: jueves no está en `devices.Andy.libros.days` ([3,7]) →
**ficha SOLO para Sofi**. Cine (viernes) no toca hoy — Función Nº2 ya
armada y encolada desde el 15/09. **Sofi → *El Visitante* (The
Outsider), Stephen King (redescubrimiento, R5-022)**: alternancia
individual (ayer 'nuevo' con Michaelides → hoy biblioteca); de sus 49
King restantes, nunca antes ofrecido. Punto intermedio entre sus dos
vetas ganadoras: procedural de investigación con evidencia imposible
(combo Dicker/Osman) que pivota a oscuro sobrenatural calibrado, sin
escalar más allá de su "justo así". Standalone, no requiere la trilogía
Bill Hodges. Guardia a fondo contra catálogo (437 vol.) y los 104
registros de `recommended.json`: sin coincidencias.

## 📚 Contexto fijo
Catálogo: 437 volúmenes reales en los 20 estantes con libros (recontado
09/16 con el extractor estándar — la cifra de "331" que circuló el 15/09
parece haber sido un subconteo parcial; usar siempre el recuento en vivo
de `/tmp/catalog.json`, no un número fijo). Suscripción: Andy y Sofi
`active`.

### Sofi — vetas confirmadas
Salas: King (R4+R5, 51 libros — usados: R5-018 `ya_lo_lei`, R5-025
14/09 sin veredicto, R5-022 *El Visitante* hoy 17/09, 48 restantes sin
tocar). Aciertos duros: Dicker HQ `lo_quiero`+`love` (único acierto
pleno de thriller/misterio); Klune-mar-azul `me_tienta`+`love` (único
acierto pleno found-family); Haig *Medianoche* `lo_quiero`+`love`
(única `todos`). Found-family (Mandanna/Fawcett/Chambers): 3 fichas sin
señal — pausado el pivot, no descartado, a la espera de que alguna
cierre veredicto. Romance contemporáneo (Henry x2): descartado. Guardia
máxima misterio/cozy: `ya_lo_lei` en King R5-018, Katzenbach, Carlisle,
Benavent, Henry.
- Quemados (autoridad única: `recommended.json`): Osman, Dicker, Hill,
  Katzenbach, Carlisle, Benavent, Coyle, Klune, Heap House, Bennett,
  canon Doyle, Delany, Haig, Christie, Peters, Backman, Flynn, French,
  Hawkins, Mandanna, Fawcett, Chambers, Michaelides (16/09), King
  R5-018/R5-025/R5-022.
- Banco redescub M5: M5-034 *Su Último Saludo* (Doyle, con cautela) y
  M5-033 (compendio DK). Los 48 King restantes son el banco más seguro
  (tratar con cautela igual: 2/3 King ofrecidos hasta ahora resultaron
  `ya_lo_lei`).
- Banco nuevo oscuro/thriller: EN CERO tras Michaelides — reponer 2-3
  nombres en la línea Dicker/Michaelides (giro estructural, un
  escenario, narrador no confiable) antes del próximo turno "nuevo".

### Andy — datos duros
Estante L4 (28+5), L5 astronomía (33). Gustos: wellness, autosuperación,
positividad, astronomía, neurociencia, oriental, finanzas, fábulas.
Idioma indistinto. Autor identitario > clásico sin dueño; fábula corta
sigue siendo el combo más seguro.
- Botón cerrado: Rovelli, Bach Ilusiones, Holiday, Coelho, Kiyosaki,
  Gawdat (`me_tienta`, pero `ya_leido` — sin descubrimiento real).
  Sin veredicto (10): Haidt, Chodron, Seligman, Wood, Hoyle, Sapolsky,
  Saint-Exupéry, Mack, Hábitos Atómicos, Milagro de Mindfulness, Doidge,
  Carroll.
- Astronomía: Rovelli (ACIERTO PLENO) y Cosmos (acierto redescub) únicos
  con señal real; Hawking/Mack/Carroll sin veredicto. Banco nuevo corto
  — reponer. Oriental: tocada con Hanh (12/09). Neurociencia: pausa tras
  Doidge (13/09). Positividad: veta abierta con Gawdat (`me_tienta`,
  `ya_leido`) — puntería correcta pero ya conocido; próximo intento en
  esta veta, buscar un ángulo o autor menos consagrado.

## 🛡️ Guardia
Título+autor contra catálogo (sin tildes) y `recommended.json` —
variantes incluidas. Campo `to` obligatorio en `queue.json`. Revisar
`subscription.json` cada corrida. `read_status` de enrichment NO es
confiable para ninguno de los dos ("desconocido" no es garantía de "no
leído"): confirmado para Sofi (Kindle paralelo, 3 casos) y ahora también
para Andy (Gawdat 16/09, `ya_leido` sin ninguna señal previa). Tratar
todo redescubrimiento con esa cautela, para ambos lectores. Si TODAS las
ediciones de Buscalibre figuran agotadas, declararlo y sumar
alternativa. Si no se puede extraer precio en vivo (render JS), no
inventar un número: linkear igual (URL 200) y decir que el precio está
en el link.

## 🔭 Qué mirar (próxima corrida)
(1) **Prioridad máxima**: re-escalar la nota de Sofi en la ficha de Andy
del domingo 20/09 (hoy no tocaba, jueves). (2) ¿Reaccionó Sofi a *El
Visitante* — primera señal suya desde 05/08? (3) Veredicto de
Michaelides (16/09) y pila vieja (Instituto, Doidge/Fawcett, Hanh/
Delany). (4) Confirmar 201 en `send_log.json` del push de hoy. (5)
Reponer banco astronomía/mindfulness (Andy) y oscuro/thriller (Sofi, en
cero). (6) Domingo 20/09 día doble: preparar par nuevo+redescub ambos.

## 🎬 CINE + 🧳 viaje (fuera del ciclo)
Cine: viernes ~19:00, `todos`, cadencia en `streams.cine`. Función Nº2
encolada para el 18/09: `recs/2026-09-18-sala-02.html` (Un hombre
infiltrado / Upload / Colegio Abbott); Andy ya votó `me_tienta` en
Upload. La Nº3 sale de SUS votos (semillas vivas: Only Murders,
Separación — instrucción de Andy 15/09), no de la Nº1. **Las tres de la
Nº1 (omitb, arrival, severance) están `ya_la_vimos`: nunca reofrecerlas.**
`cine-vistas:<id>` se lee siempre antes de elegir títulos — vetado
permanente. Sofi: UNA por función; Andy: TRES (capítulos ≤46 min).
Géneros: comedia, histórico, animación, biopic. Netflix/Prime/Disney+/Max
— Apple TV+ NO. **Formato = stories** (pedido 15/09): portada + una
pantalla por título + cierre. Copiar `recs/2026-09-18-sala-02.html`.

## 🧭 Sugerencias hub
`recs/index.html` lee `recommended.json` por fetch — cero mantenimiento
manual. NO TOCAR (ni este ni `recs/setup.html`).
