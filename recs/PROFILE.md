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

## 🚨 09/11 — canal de Sofi: 5+ semanas en cero
Sigue sin NINGÚN evento de Sofi desde 2026-08-05 (no respondió
`rec-alerta-sofi` del 09/09 ni el diagnóstico del 08/09; tampoco hoy).
`subscription.json` en `active` para ambos — no es la suscripción, es
el canal de Sofi en sí. **Faltan 5 días para el umbral del 16/09**: si
sigue en cero ahí sí re-escalar fuerte en la ficha de Andy (no repetí
el bloque de alerta hoy para no espamear). Sigo eligiendo con la misma
disciplina de guardia — el silencio es de canal, no evidencia de
contenido fallando.

## ✅ Canal de Andy — activo, un patrón claro
"Abrió y no votó" domina desde hace 6 fichas seguidas (Haidt, Chodron,
Seligman, Wood, Hoyle, Sapolsky, Saint-Exupéry, Mack: click/dwell alto
pero sin veredicto) vs. el período previo con voto cerrado (Coelho
`ya_lo_lei`, Kiyosaki `ya_lo_lei`+`like`+dwell 178s). Sapolsky (08/09)
usó el mini-quiz de testosterona (`no`). Mack (10/09) solo clickeó.
Vigilar si hace falta simplificar el CTA o si es el ritmo real de
lectura de Andy — no asumir desinterés.

## 📅 09/11 — hoy
Cero eventos nuevos relevantes salvo el click de Mack (ya arriba).
Régimen: ayer Andy=nuevo (Mack) → hoy redescub; Sofi=redescub
(Doyle-Regreso) ayer → hoy nuevo. **Andy → *Hábitos Atómicos*, James
Clear (2018, redescub, L4-002)**: cierra el hilo de Fogg (29/08, dwell
493s sin voto) — Clear usó el modelo B=MAP de Fogg para escribir este
libro, ya en su estante sin abrir. Cuarta prueba del patrón "autor/libro
ya-en-casa gana sobre riesgo de fama" (tras Bach x2, Holiday, Rovelli).
**Sofi → *La sociedad secreta de brujas rebeldes*, Sangu Mandanna
(2022, nuevo)**: banco nuevo de Sofi estaba agotado — repuesto con
WebSearch. Misma fórmula que dio su única señal positiva en fantasía
(Klune, me_tienta+love, 05/08: found-family cálido, sin gore) con
autora nueva, ya que Klune está agotado (3 usados). Cruza también su
pedido del 24/07 de romance con final feliz (acá secundario). Guardia:
ambos verificados contra catálogo (437 vol.) y `recommended.json`
completo, sin coincidencias; Mandanna nunca usada, no es de los 50
King. Compra y ambos audiolibros (Google Play, español) confirmados.

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
  Regreso (M5-006, hoy), Haig x3, Christie x2, Peters-Egipto, Backman-Ove,
  Flynn-Heridas, French-Silencio del Bosque, Hawkins-chica-del-tren.
- Banco redescub (sin uso desde el corte, sin señal para priorizar):
  M5-016 Delany 2, M5-034 *Su Último Saludo* (canon Doyle, cuarto de la
  serie) y M5-033 (compendio DK).
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
  Saint-Exupéry, Mack, Hábitos Atómicos (L4-002, hoy) — lote pendiente.
- Neurociencia/hábitos: Sapolsky y Fogg (493s dwell) abrieron la veta,
  sin cerrar aún. Banco mindfulness sigue (Thich Nhat Hanh, Kabat-Zinn).
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
(1) ¿Contestó Andy el `rec-alerta-sofi` del 09/09, o llegó señal nueva
de Sofi? Quedan 5 días para el umbral del 16/09 — si sigue en cero,
escalar más fuerte en la ficha de Andy. (2) Veredicto de Haidt, Chodron,
Seligman, Wood, Hoyle, Sapolsky, Saint-Exupéry, Mack, Hábitos Atómicos
(Andy) y de las cuatro fichas sin voto de Sofi (Doyle Aventuras/
Memorias/Regreso, Mandanna). (3) Confirmar 201 en `send_log.json` de
los dos pushes de hoy (09/11). (4) Reponer banco nuevo de astronomía
para Andy (Sean Carroll) antes de que vuelva a tocarle esa veta; sumar
2-3 nombres más a fantasía cálida found-family para Sofi (Becky
Chambers, Heather Fawcett) ahora que Klune y Mandanna están usados.

## 🎬 CINE + 🧳 viaje (fuera del ciclo)
Cine: 1/semana, `todos`, viernes ~19:00. Sofi evita gore/subtítulos;
Andy evita "triste", nunca doblado. Severance "me tienta" Andy —
candidata fuerte. Sin Función Nº2 desde 31/07.

## 🧭 Sugerencias hub
`recs/index.html` lee `recommended.json` por fetch — cero mantenimiento
manual. NO TOCAR (ni este ni `recs/setup.html`).
