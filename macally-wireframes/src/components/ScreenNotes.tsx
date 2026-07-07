import type { ScreenDefinition } from "../data/screens";

export function ScreenNotes({ screen }: { screen: ScreenDefinition }) {
  return (
    <aside className="wire-panel p-4">
      <p className="wire-label mb-3">Anatomia de pantalla</p>
      <div className="grid gap-4 text-sm">
        <NoteList title="Estructura" items={screen.structure} />
        <NoteList title="Componentes" items={screen.components} />
        <NoteList title="Flujo" items={screen.navigation} />
      </div>
    </aside>
  );
}

function NoteList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="mb-2 font-extrabold text-wire-ink">{title}</h3>
      <ul className="grid gap-1 text-wire-muted">
        {items.map((item) => (
          <li key={item}>- {item}</li>
        ))}
      </ul>
    </div>
  );
}
