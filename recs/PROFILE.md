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

## 🚨 09/10 — canal de Sofi: 5+ semanas en cero, escalado a Andy el 09/09
Sigue sin NINGÚN evento de Sofi desde 2026-08-05 (tampoco respondió el
`rec-alerta-sofi` del 09/09 ni el diagnóstico del 08/09).
`subscription.json` en `active` para ambos — no es un problema de
suscripción caída, es algo del canal de Sofi en sí. **Faltan 6 días
para el umbral del 16/09**: si sigue en cero, escalar más directo
(nota insistente en la ficha de Andy, o reinstalar la PWA en su
iPhone). Sigo eligiendo con la misma disciplina de guardia mientras
tanto — el silencio es de canal, no evidencia de contenido fallando.

## ✅ Canal de Andy — activo, dos patrones
"Abrió y no votó" (dwell/click sin veredicto: Fogg, Herrigel, Haidt,
Chodron, Seligman) vs. veredicto cerrado (Coelho `ya_lo_lei`, Kiyosaki
`ya_lo_lei`+`like`+dwell 178s). Wood (06/09) y Hoyle (07/09) quedaron
sin señal — coincide con el corte de 3 días, no asumir desinterés en
hábitos/astronomía todavía. Sapolsky (08/09): clickeó el push y usó el
mini-quiz de testosterona (`no`) pero sin veredicto de libro aún.

## 📅 09/10 — hoy
Cero eventos nuevos en `sync/engagement.json` desde el cutoff del
09/09 (10:58 UTC) — nada que procesar de feedback hoy; Sapolsky,
Principito y chica del tren siguen sin veredicto. Régimen: ayer
09/09 Andy=redescub (Principito) → hoy Andy=nuevo; Sofi=nuevo ayer →
hoy redescub (alternancia por par). **Andy → *El fin de todo
(Astrofísicamente hablando)*, Katie Mack (2020, nuevo, astronomía)**:
siguiente escalón de su veta más consistente (Rovelli ACIERTO PLENO,
Sagan/Hawking bien en redescub, Tyson 28/07) — Mack era el próximo
nombre señalado desde el learning original de Rovelli. Ojo: edición en
papel agotada hoy en Buscalibre UY, declarado en la ficha con
alternativa de ebook verificada (~€9,49) en vez de ocultarlo. **Sofi →
*El Regreso de Sherlock Holmes*, Arthur Conan Doyle (1905, redescub,
M5-006)**: tercer libro de la serie Doyle (Aventuras 04/09, Memorias
06/09, ninguna con feedback aún) — cierra narrativamente el cliffhanger
de Reichenbach con el que terminan Las Memorias. Banco redescub
explícito en PROFILE, sin señal de lectura previa en enrichment.
Guardia: ambos títulos verificados contra catálogo (437 vol.) y
`recommended.json` previo, sin coincidencias; Doyle-Regreso no es
ninguno de los 50 King.

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
- Banco nuevo: círculo cozy agotado; Hawkins y Doyle-Regreso ya usados.
  Sin candidata fuerte siguiente — reponer con WebSearch cuando toque su
  próximo nuevo.

### Andy — datos duros
Estante L4 (28+5), L5 astronomía (33). Gustos: wellness, autosuperación,
positividad, astronomía, neurociencia, oriental, finanzas, fábulas.
Idioma indistinto. Regla confirmada: autor identitario > clásico sin
dueño; fábula corta sigue siendo el combo más seguro (ahora con
Saint-Exupéry también usado).
- Botón cerrado: Rovelli, Bach Ilusiones, Holiday, Coelho, Kiyosaki.
  Sin veredicto: Haidt, Chodron, Seligman, Wood, Hoyle, Sapolsky,
  Saint-Exupéry, Mack (hoy) — la mayoría con click/dwell ya confirmado.
- Neurociencia: abierta 08/09 con Sapolsky, sin veredicto todavía. Si
  cierra bien, banco sigue con mindfulness (Thich Nhat Hanh, Kabat-Zinn)
  evitando repetir oriental (3 usados seguidos en agosto).
- Hábitos: mejor engagement crudo pre-corte (Fogg 493s dwell). Wood
  (06/09) sigue sin señal — no asumir desinterés, esperar más datos.
- Astronomía: retomada 07/09 (Hoyle, L5-024) y llevada un paso más
  allá hoy con Mack (nuevo, "el fin" en vez de "el origen"), ninguna
  con señal aún. L5-021 queda si el redescub repite bien. Banco nuevo
  de astronomía se queda corto tras Mack — reponer (Sean Carroll es el
  siguiente nombre natural) antes de que vuelva a tocarle. Finanzas:
  cerrada con Kiyosaki, sin urgencia.

## 🛡️ Guardia
Título+autor contra catálogo (sin tildes) y `recommended.json` —
incluir variantes de nombre. Campo `to` obligatorio en `queue.json`.
Revisar `subscription.json` cada corrida. `read_status` de enrichment
no confiable para Sofi (Kindle paralelo); para Andy sí. Si TODAS las
ediciones de Buscalibre figuran agotadas, declararlo y sumar
alternativa verificada en vez de ocultarlo.

## 🔭 Qué mirar (próxima corrida)
(1) ¿Contestó Andy el `rec-alerta-sofi` del 09/09, o llegó señal nueva
de Sofi (aunque sea al fin al diagnóstico del 08/09)? Van quedando 6
días para el umbral del 16/09 — si sigue en cero, escalar más fuerte.
(2) Veredicto de Haidt, Chodron, Seligman, Wood, Hoyle, Sapolsky,
Saint-Exupéry, Mack (Andy) y de las tres fichas Doyle sin voto de Sofi
(Aventuras, Memorias, Regreso). (3) Confirmar 201 en `send_log.json` de
los dos pushes de hoy (09/10). (4) Reponer banco nuevo de astronomía
para Andy (Sean Carroll) antes de que vuelva a tocarle esa veta.

## 🎬 CINE + 🧳 viaje (fuera del ciclo)
Cine: 1/semana, `todos`, viernes ~19:00. Sofi evita gore/subtítulos;
Andy evita "triste", nunca doblado. Severance "me tienta" Andy —
candidata fuerte. Sin Función Nº2 desde 31/07.

## 🧭 Sugerencias hub
`recs/index.html` lee `recommended.json` por fetch — cero mantenimiento
manual. NO TOCAR (ni este ni `recs/setup.html`).
