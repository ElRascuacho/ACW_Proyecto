# Macally Wireframes

## Resultado de inspeccion Figma

- Archivo: `Macally`
- File key: `lMdamfvyVXQzRyAkKAVzvV`
- Fecha de inspeccion: `2026-06-12`
- Pagina detectada: `Page 1` (`0:1`)
- Pantallas detectadas directamente en Figma: `0`

La pagina inspeccionada no contenia frames, textos, componentes, secciones ni variables locales. Para no detener el trabajo, se generaron wireframes a partir de supuestos razonables apoyados en el proyecto existente del workspace: `index.html`, `cotizador.html`, `soporte.html` y `contacto.html`.

## Pantallas generadas

| Pantalla | Ruta | Componente | Descripcion |
| --- | --- | --- | --- |
| Inicio / Portafolio | `#/` | `src/pages/HomeWireframe.tsx` | Presenta propuesta de valor, CTAs, servicios y proyectos destacados. |
| Cotizador | `#/cotizador` | `src/pages/QuoteWireframe.tsx` | Permite seleccionar servicios, ajustar alcance y revisar una estimacion. |
| Soporte / Ticket Center | `#/soporte` | `src/pages/SupportWireframe.tsx` | Crea tickets y lista solicitudes activas con estados. |
| Contacto | `#/contacto` | `src/pages/ContactWireframe.tsx` | Captura mensajes y muestra datos de contacto. |

## Detalle por pantalla

### Inicio / Portafolio

- Proposito: presentar Macally y guiar hacia cotizacion o portafolio.
- Estructura visual: header, hero de dos columnas, matriz de servicios, grid de proyectos, footer.
- Componentes reutilizables: `AppShell`, `SectionIntro`, `PlaceholderMedia`, `ScreenNotes`, `StateStrip`.
- Jerarquia: marca, mensaje principal, acciones, servicios, proyectos.
- Navegacion: hacia Cotizador, Soporte y Contacto.
- Estados: base.

### Cotizador

- Proposito: estructurar una experiencia de presupuesto estimado.
- Estructura visual: listado de opciones a la izquierda y resumen persistente a la derecha.
- Componentes reutilizables: `AppShell`, `SectionIntro`, `ScreenNotes`, `StateStrip`.
- Jerarquia: contexto, servicios, parametros, total, accion.
- Navegacion: hacia Inicio y Contacto.
- Estados: base, vacio, exito.

### Soporte / Ticket Center

- Proposito: registrar solicitudes y revisar estado de tickets.
- Estructura visual: formulario y lista de tickets en columnas.
- Componentes reutilizables: `Field`, `StatusBadge`, `ScreenNotes`, `StateStrip`.
- Jerarquia: asunto, prioridad, descripcion, tickets activos, estado.
- Navegacion: hacia Inicio y Contacto.
- Estados: base, vacio, autenticado, error.

### Contacto

- Proposito: recibir mensajes comerciales y mostrar canales de comunicacion.
- Estructura visual: formulario de contacto y tarjetas informativas.
- Componentes reutilizables: `Field`, `ScreenNotes`, `StateStrip`.
- Jerarquia: invitacion, datos del usuario, mensaje, canales.
- Navegacion: hacia Inicio y Cotizador.
- Estados: base, exito, error.

## Componentes compartidos

- `AppShell`: layout general, header, navegacion y footer.
- `SectionIntro`: encabezado comun de pantalla.
- `PlaceholderMedia`: placeholder para imagenes, graficos o capturas.
- `Field`: input/textarea estandar para wireframes.
- `StatusBadge`: etiqueta de estado para tickets u otros registros.
- `StateStrip`: documenta estados considerados dentro de cada pantalla.
- `ScreenNotes`: panel lateral con estructura, componentes y flujo.

## Suposiciones tomadas

- El archivo Figma enlazado estaba vacio al momento de la inspeccion.
- Las pantallas base se infirieron desde los archivos HTML existentes en el workspace.
- No se usaron colores finales, assets definitivos ni iconografia final.
- La navegacion se implemento con hash routing para mantener el proyecto simple y portable.
- Las variantes responsive se resolvieron con grids que pasan de una columna en mobile a dos/tres columnas en desktop.

## Pendientes y preguntas

- Agregar frames reales en Figma o compartir una version con pantallas visibles.
- Confirmar si las pantallas inferidas son las definitivas.
- Definir sistema visual final: color, tipografia, componentes y assets.
- Confirmar si el cotizador requiere reglas reales de calculo o solo estructura visual.
- Confirmar si soporte requiere autenticacion real o solo formulario publico.
