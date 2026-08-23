# Perfil lector de C — memoria del agente

_Última corrida: 2026-08-23 (domingo). Sin feedback de C todavía: el perfil
sigue apoyado solo en el catálogo de sus estantes._

## Estado

App entregada a C el **2026-08-19T09:21:35Z** (ver `C/agent/handoff.json`).
Desde esa marca su feedback cuenta; lo anterior eran pruebas del dueño.

**Todavía no hay ni un evento suyo.** En la corrida del 2026-08-23,
`sync/engagement.json` (actualizado 2026-08-23T04:37:52Z, 409 eventos) tenía
0 eventos con `device: "C"` — solo `Andy`, `Sofi`, `C-test` (8, nunca se
leen) y `sin-nombre` (106, todos de julio, anteriores al handoff).

**Tampoco está suscripta**: `notifications/subscription.json` no tiene
entrada de dispositivo `C`, solo `C-test`. Es decir: C todavía no abrió la
app desde su teléfono ni pasó el onboarding. Consecuencias:

- No hay `rec-time`, ni `timezone`, ni `rec-cadence` que leer.
- No se puede fijar `tz` / `min_local_hour` sobre la entrada del
  dispositivo `C` (paso 8 del manual): esa entrada la escribe **solo** el
  browser cuando ella se suscribe. No inventar una a mano. Mientras tanto
  el dispatcher ya la cubre por default: `DEVICE_TZ.c = 'Europe/Paris'` y
  piso de 11:00 locales, ambos compatibles con la entrega de las 17:30.
- El push encolado a `to: "C"` queda `pending` sin destinatario activo y
  se marca `expired` después de su `expires_at`. Si ella se suscribe antes
  de las 17:30 de París, sale; si no, se pierde solo ese push y la ficha
  igual queda publicada en el hub.

**Para Andy**: si querés que le lleguen, hay que confirmar que C abrió
`https://abecedeefege.github.io/Biblioteca/C/recs/` y aceptó las
notificaciones. Hasta entonces esto es un hub que se llena solo.

## Cadencia vigente

`weekly` (default — hasta que llegue su primer `rec-cadence`).

## Lo que dicen sus estantes (351 entradas catalogadas, 13 filas)

- **Ficción literaria contemporánea** (B4, A2, A4): Rooney (3 títulos),
  Batuman (2), Ali Smith (4 estaciones), Ernaux (3), Zevin, Keegan, Awad,
  Stoner, The Secret History. Le gustan las voces formales e interiores.
- **Feminismo** (B3 + B2 + B6): ~45 títulos — teoría (Beauvoir, Manne,
  Federici), historia (Femina, A Kick in the Belly), reportaje (She Said),
  manifiestos (Given, Kendall, Olufemi). La pared más curada de la casa.
  Veta fuerte y específica: feminismo negro y justicia reproductiva
  (Dadzie, Dorothy Roberts ×2, Davis, Lorde ×2, Kendall, Khan-Cullors,
  Ross & Solinger, Radical Reproductive Justice).
- **Historia e historiografía** (A3, A5, B5, B6): Carr, Koselleck, Conrad,
  Said, Fanon, Césaire, Arendt, Assmann + el Princeton Guide to Historical
  Research y What Is History, Now? — le interesa el **método**, no solo el
  relato. Nivel de estudiante/graduada de historia.
- **Tres idiomas**: inglés dominante, alemán fuerte (≈40 títulos), francés
  presente (≈15, varios de escuela). Puede leer originales en los tres.
- **Infancia conservada** (A1): Blyton casi completa, Dahl, Konigsburg —
  sentimental con las series de su niñez. Harry Potter en tapa dura (A6).
- **Volúmenes familiares** (B6): crónicas de la familia Bracklo — la
  historia también es asunto personal.

## Vetas para recomendar (hipótesis iniciales)

1. Ficción literaria con historia adentro (Erpenbeck, Enard, Alexievich…).
2. Feminismo con evidencia (Criado Perez, Fine, D'Ignazio & Klein).
3. Historia grande pero seria, que dialogue con su formación (Graeber &
   Wengrow, Trouillot, Ghosh).
4. **Historiografía discutible** (nueva, 2026-08-23): libros que pelean con
   el método mismo — Hartman, Trouillot (Silencing the Past), Fuentes
   (Dispossessed Lives). Tiene el equipo completo para arbitrar la pelea.
5. Wildcard: japonesas contemporáneas (tiene Murata, Aoyama, Ishiguro).

## Ya entregado (no repetir)

| Fecha | Libro | Veredicto |
|---|---|---|
| 2026-08-18 | Kairos — Jenny Erpenbeck | _pendiente_ |
| 2026-08-18 | Invisible Women — Caroline Criado Perez | _pendiente_ |
| 2026-08-18 | The Dawn of Everything — Graeber & Wengrow | _pendiente_ |
| 2026-08-23 | Wayward Lives, Beautiful Experiments — Saidiya Hartman | _pendiente_ |

## Descartados en corrida (para no volver a evaluarlos)

- **The Unwomanly Face of War (Alexievich)** — ya lo tiene: `B3-010`.
  Ojo con la veta Alexievich: si alguna vez se recomienda, tiene que ser
  otro título (Second-hand Time, Chernobyl Prayer) y avisando que ya tiene
  uno suyo.

## Notas de C

_(ninguna todavía — las `rec-note:*` de sync/engagement.json van acá)_

## Advertencia de datos

El 2026-08-19 (06:32–06:44 UTC) hubo 21 eventos con `device: "C"` que **no
son de C**: fue Andy probando la app (quiz completo, `rec-cadence=weekly`,
`push-optin=skipped`, dwells). Se borraron del relay de Supabase y nunca
entraron a `sync/engagement.json`. No usar nada de esa ventana para el
perfil. La cadencia sigue en default `weekly` hasta que C conteste.
