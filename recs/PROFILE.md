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

## 🚨 Canal de Sofi: SIGUE EN CERO — 16/09 fue el umbral, escalado hoy
`sync/engagement.json` sin ningún evento de Sofi desde 2026-08-05 (6+
semanas), pese a `subscription.json` en `active`. El umbral que el
PROFILE se había puesto era hoy 16/09: se cumplió sin señal. **Escalado
en la ficha de Andy de hoy** (2026-09-16-gawdat-solve-for-happy.html):
se le pidió explícitamente que le pregunte a Sofi en persona si le están
llegando las notificaciones, con espacio para que conteste en el cuadro
de texto libre. Próxima corrida: revisar si Andy respondió esa nota
ANTES que cualquier otra cosa — es la prioridad número uno.

## ✅ Canal de Andy: activo, cadencia recién cambiada (15/09)
Última vez que votó un libro: Kiyosaki `ya_lo_lei` (05/09). Desde
entonces 10 sin veredicto (última: Carroll 14/09, con click+revisita
pero sin dwell/veredicto). Sí hubo actividad real reciente: cambió su
propia cadencia a miércoles+domingo (15/09) y resolvió a fondo la pista
de cine (votó `me_tienta` en Upload, Función Nº2). No es silencio de
canal — es que no cierra veredicto en libros.

## 📅 09/16 — hoy (miércoles, día doble)
Gate de día: MIÉRCOLES → Andy Y Sofi. Cero feedback nuevo de libros para
ambos (Hanh, Delany, Doidge, Fawcett, Carroll, Instituto, Chambers
siguen sin veredicto). Alternancia: ayer (15/09, solo Sofi) fue nuevo
→ hoy el par del día cierra con **Sofi=nuevo, Andy=redescubrimiento**
(coincide también con la alternancia individual de cada uno).
**Andy → *Solve for Happy*, Mo Gawdat (redescubrimiento, L4-007)**: rota
veta lejos de astronomía (Carroll 14/09) y neurociencia (Doidge 13/09),
abre positividad/felicidad con enfoque de ingeniero — encaja de lleno en
su gusto declarado. Sin read_status en enrichment, nunca recomendado.
**Sofi → *El Paciente Silencioso*, Alex Michaelides (nuevo)**: pivot de
vuelta al oscuro calibrado tras 3 found-family seguidos sin señal
(Mandanna, Fawcett, Chambers) — mismo tipo de acierto que Dicker
(giro estructural, narrador poco fiable) pero autor nuevo. Guardia a
fondo contra catálogo (437 vol., recontado hoy) y los 101 registros
previos: sin coincidencias en ninguno de los dos casos.

## 📚 Contexto fijo
Catálogo: 437 volúmenes reales en los 20 estantes con libros (recontado
09/16 con el extractor estándar — la cifra de "331" que circuló el 15/09
parece haber sido un subconteo parcial; usar siempre el recuento en vivo
de `/tmp/catalog.json`, no un número fijo). Suscripción: Andy y Sofi
`active`.

### Sofi — vetas confirmadas
Salas: King (R4+R5, 50 libros — usados: R5-018 `ya_lo_lei`, R5-025
14/09, ninguno tocado hoy). Aciertos duros: Dicker HQ `lo_quiero`+`love`
(único acierto pleno de thriller/misterio); Klune-mar-azul
`me_tienta`+`love` (único acierto pleno found-family); Haig *Medianoche*
`lo_quiero`+`love` (única `todos`). Found-family (Mandanna/Fawcett/
Chambers): 3 fichas sin señal — pausado el pivot, no descartado, a la
espera de que alguna cierre veredicto. Romance contemporáneo (Henry x2):
descartado. Guardia máxima misterio/cozy: `ya_lo_lei` en King R5-018,
Katzenbach, Carlisle, Benavent, Henry.
- Quemados (autoridad única: `recommended.json`): Osman, Dicker, Hill,
  Katzenbach, Carlisle, Benavent, Coyle, Klune, Heap House, Bennett,
  canon Doyle, Delany, Haig, Christie, Peters, Backman, Flynn, French,
  Hawkins, Mandanna, Fawcett, Chambers, Michaelides (16/09).
- Banco redescub M5: M5-034 *Su Último Saludo* (Doyle, con cautela) y
  M5-033 (compendio DK). Los 49 King restantes son el banco más seguro.
- Banco nuevo oscuro/thriller: EN CERO tras Michaelides — reponer 2-3
  nombres en la línea Dicker/Michaelides (giro estructural, un
  escenario, narrador no confiable) antes del próximo turno "nuevo".

### Andy — datos duros
Estante L4 (28+5), L5 astronomía (33). Gustos: wellness, autosuperación,
positividad, astronomía, neurociencia, oriental, finanzas, fábulas.
Idioma indistinto. Autor identitario > clásico sin dueño; fábula corta
sigue siendo el combo más seguro.
- Botón cerrado: Rovelli, Bach Ilusiones, Holiday, Coelho, Kiyosaki.
  Sin veredicto (10): Haidt, Chodron, Seligman, Wood, Hoyle, Sapolsky,
  Saint-Exupéry, Mack, Hábitos Atómicos, Milagro de Mindfulness, Doidge,
  Carroll, Gawdat (16/09).
- Astronomía: Rovelli (ACIERTO PLENO) y Cosmos (acierto redescub) únicos
  con señal real; Hawking/Mack/Carroll sin veredicto. Banco nuevo corto
  — reponer. Oriental: tocada con Hanh (12/09). Neurociencia: pausa tras
  Doidge (13/09). Positividad: veta nueva abierta hoy con Gawdat — sin
  historial previo específico, buena candidata a próximo veredicto.

## 🛡️ Guardia
Título+autor contra catálogo (sin tildes) y `recommended.json` —
variantes incluidas. Campo `to` obligatorio en `queue.json`. Revisar
`subscription.json` cada corrida. `read_status` no confiable para Sofi
(Kindle paralelo); para Andy sí. Si TODAS las ediciones de Buscalibre
figuran agotadas, declararlo y sumar alternativa. Si no se puede extraer
precio en vivo (render JS), no inventar un número: linkear igual (URL
200) y decir que el precio está en el link.

## 🔭 Qué mirar (próxima corrida)
(1) **Prioridad máxima**: ¿respondió Andy la nota sobre el canal de
Sofi? Leerla antes que cualquier otra cosa. (2) ¿Señal nueva de Sofi,
aunque sea mínima? (3) Veredictos de Gawdat/Michaelides (16/09) primero
que la pila vieja (Carroll/Instituto 14/09, Doidge/Fawcett 13/09,
Hanh/Delany 12/09). (4) Confirmar 201 en `send_log.json` de los dos
pushes de hoy. (5) Reponer banco astronomía/mindfulness (Andy) y
oscuro/thriller (Sofi, en cero).

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
