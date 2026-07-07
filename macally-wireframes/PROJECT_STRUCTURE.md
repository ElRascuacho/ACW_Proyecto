# Project Structure

Proyecto React + TypeScript + Tailwind CSS generado como wireframe navegable.

```text
macally-wireframes/
  index.html
  package.json
  postcss.config.js
  tailwind.config.ts
  tsconfig.json
  vite.config.ts
  WIREFRAMES.md
  PROJECT_STRUCTURE.md
  src/
    main.tsx
    App.tsx
    styles.css
    components/
      AppShell.tsx
      ScreenNotes.tsx
      WireframePrimitives.tsx
    data/
      screens.ts
    pages/
      ContactWireframe.tsx
      HomeWireframe.tsx
      QuoteWireframe.tsx
      SupportWireframe.tsx
```

## Arquitectura

- `src/data/screens.ts`: fuente central de verdad para pantallas, rutas, proposito, estructura, componentes, jerarquia, estados y notas de inspeccion Figma.
- `src/App.tsx`: enrutador simple basado en hash (`#/`, `#/cotizador`, `#/soporte`, `#/contacto`).
- `src/components/AppShell.tsx`: layout compartido para todas las pantallas.
- `src/components/WireframePrimitives.tsx`: bloques atomicos de baja fidelidad usados por los wireframes.
- `src/components/ScreenNotes.tsx`: panel de documentacion visible por pantalla.
- `src/pages/*Wireframe.tsx`: una pagina funcional por pantalla.
- `src/styles.css`: Tailwind base y clases utilitarias de wireframe.

## Decisiones tecnicas

- Se uso Vite en lugar de Next.js para mantener una entrega rapida y portable dentro del workspace.
- Se mantuvo React + TypeScript, como pide la preferencia tecnica.
- Tailwind CSS centraliza layout responsive y estilos de baja fidelidad.
- No se agrego logica compleja de negocio porque Figma no sugeria reglas funcionales.
- No se modifico el proyecto HTML existente; todo vive en `macally-wireframes/`.

## Comandos

```bash
npm install
npm run dev
npm run build
```

El servidor de desarrollo usa el puerto `5174` por defecto.
