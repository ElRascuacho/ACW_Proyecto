type SectionIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionIntro({ eyebrow, title, description }: SectionIntroProps) {
  return (
    <section className="mb-6 grid gap-3">
      <p className="wire-label">{eyebrow}</p>
      <h1 className="wire-title">{title}</h1>
      <p className="max-w-2xl text-base leading-7 text-wire-muted">{description}</p>
    </section>
  );
}

export function PlaceholderMedia({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div className={`wire-box grid min-h-32 place-items-center bg-wire-shade p-4 text-center text-sm font-bold text-wire-muted ${className}`}>
      {label}
    </div>
  );
}

export function Field({ label, area = false }: { label: string; area?: boolean }) {
  return (
    <label className="grid gap-2">
      <span className="text-sm font-bold text-wire-ink">{label}</span>
      {area ? <textarea className="min-h-28 wire-input py-3" placeholder="Placeholder de texto largo" /> : <input className="wire-input" placeholder="Placeholder" />}
    </label>
  );
}

export function StateStrip({ states }: { states: string[] }) {
  return (
    <div className="wire-panel mt-6 flex flex-wrap gap-2 p-3">
      <span className="wire-label mr-2 self-center">Estados</span>
      {states.map((state) => (
        <span key={state} className="border border-dashed border-wire-line bg-wire-panel px-2 py-1 text-xs font-bold text-wire-muted">
          {state}
        </span>
      ))}
    </div>
  );
}

export function StatusBadge({ label }: { label: string }) {
  return <span className="border border-wire-line bg-wire-panel px-2 py-1 text-xs font-bold text-wire-muted">{label}</span>;
}
