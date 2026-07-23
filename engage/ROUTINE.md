# Cómo activar la Routine diaria (la creás vos, no el agente)

El sistema ya está completo en el repo; lo único que falta para que corra
solo es el scheduler. **Prerequisitos antes de activarla**: (1) esta rama
mergeada a `main`, (2) el secret `VAPID_PRIVATE_KEY` cargado en Actions,
(3) suscripción hecha desde el teléfono en
`https://abecedeefege.github.io/Biblioteca/engage/setup.html` y un push de
prueba recibido.

## Opción A — pedírselo a Claude (recomendada)

Abrí una sesión de Claude Code en [claude.ai/code](https://claude.ai/code)
sobre el entorno que tiene **Abecedeefege/Biblioteca** como source y pegale:

> Creá una Routine diaria que corra a las 06:00 hora de America/Montevideo
> (09:00 UTC, Uruguay no tiene DST), en una **sesión nueva** cada vez, sobre
> este entorno, con este prompt exacto: `/engagement`
> Nombre: "Bibliotequeando — agente diario".

## Opción B — a mano en la UI

1. [claude.ai/code](https://claude.ai/code) → tu entorno con este repo → **Routines**.
2. New routine:
   - **Nombre**: `Bibliotequeando — agente diario`
   - **Cron**: `0 6 * * *` en hora de Montevideo — si el campo se interpreta
     en UTC, usá `0 9 * * *` (UY = UTC-3 fijo, sin DST).
   - **Sesión**: nueva por corrida (fresh session) — la memoria del agente
     vive en `engage/learnings.md`, no en el chat.
   - **Prompt**: literalmente `/engagement`

## Por qué a las 06:00

El agente corre antes de la primera ventana de envío (11:15 — piso duro:
ninguna notificación de la casa sale antes de las 11:00 UY, reforzado en
`tools/send_push.js`): le da tiempo a leer el feedback de anoche, construir
las experiencias, pushear, que Pages deploye, y que el primer push (≥60 min
después de la corrida, y nunca antes de las 11:00) linkee a páginas que ya
existen.

## Control sin intervenir

La primera semana, mirá la sesión que deja cada corrida: el reporte final
(datos de ayer, decisiones sobre proposals, pushes de hoy, SHA) es tu
ventana de control. Para cambiar la cadencia no toques código: decíselo al
agente por chat en cualquier sesión (o respondé los botones de las
experiencias) — él actualiza `CADENCIA VIGENTE` en `engage/learnings.md`.
