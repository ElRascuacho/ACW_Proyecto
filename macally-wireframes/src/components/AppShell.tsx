import { screens } from "../data/screens";
import type { ReactNode } from "react";

type AppShellProps = {
  activeRoute: string;
  onNavigate: (route: string) => void;
  children: ReactNode;
};

export function AppShell({ activeRoute, onNavigate, children }: AppShellProps) {
  return (
    <div className="min-h-screen bg-[#f3f6fa] text-wire-ink">
      <header className="sticky top-0 z-20 border-b border-wire-line bg-white/95 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-4 md:flex-row md:items-center md:justify-between md:px-6">
          <button className="flex items-center gap-3 text-left" onClick={() => onNavigate("/")}>
            <span className="grid h-10 w-10 place-items-center border border-wire-ink bg-wire-ink text-base font-extrabold text-white">
              M
            </span>
            <span>
              <span className="block text-lg font-extrabold">Macally</span>
              <span className="block text-xs font-semibold text-wire-muted">Wireframes navegables</span>
            </span>
          </button>
          <div className="flex flex-wrap gap-2">
            {screens.map((screen) => (
              <button
                key={screen.id}
                className={`border px-3 py-2 text-sm font-bold ${
                  activeRoute === screen.route
                    ? "border-wire-ink bg-wire-ink text-white"
                    : "border-wire-line bg-white text-wire-ink"
                }`}
                onClick={() => onNavigate(screen.route)}
              >
                {screen.name.split(" / ")[0]}
              </button>
            ))}
          </div>
        </nav>
      </header>
      <main className="mx-auto max-w-7xl px-4 py-6 md:px-6 md:py-10">{children}</main>
      <footer className="border-t border-wire-line bg-white">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 py-6 text-sm text-wire-muted md:grid-cols-[1fr_auto] md:px-6">
          <p>Macally wireframe kit. Estructura derivada de Figma y supuestos documentados.</p>
          <p>Estado: baja fidelidad</p>
        </div>
      </footer>
    </div>
  );
}
