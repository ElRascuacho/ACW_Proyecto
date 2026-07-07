import { ScreenNotes } from "../components/ScreenNotes";
import { SectionIntro, StateStrip } from "../components/WireframePrimitives";
import type { ScreenDefinition } from "../data/screens";

export function QuoteWireframe({ screen }: { screen: ScreenDefinition }) {
  return (
    <div className="grid gap-6">
      <SectionIntro
        eyebrow="Smart cotizador"
        title="Construye tu presupuesto"
        description="Wireframe para seleccionar servicios, ajustar alcance y revisar una estimacion antes de generar propuesta."
      />
      <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
        <section className="grid gap-6 lg:grid-cols-[1fr_360px]">
          <div className="grid gap-3">
            {["Sitio web profesional", "Aplicacion movil", "E-commerce completo", "SEO y optimizacion", "Infraestructura cloud"].map((service) => (
              <label key={service} className="wire-panel grid grid-cols-[auto_48px_1fr] gap-4 p-4">
                <input type="checkbox" className="mt-4 h-4 w-4" />
                <span className="h-12 w-12 wire-box" />
                <span className="grid gap-2">
                  <span className="font-extrabold">{service}</span>
                  <span className="h-8 wire-box" />
                </span>
              </label>
            ))}
          </div>
          <aside className="wire-panel grid content-start gap-5 p-5">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-extrabold">Resumen</h2>
              <span className="h-8 w-24 wire-box" />
            </div>
            <div className="min-h-28 wire-box p-3 text-sm text-wire-muted">Estado vacio: selecciona servicios para poblar el resumen.</div>
            <div className="grid gap-2">
              <span className="text-sm font-bold">Paginas / pantallas</span>
              <input type="range" min="1" max="20" defaultValue="4" />
            </div>
            <div className="grid gap-2">
              <span className="text-sm font-bold">Plazo de entrega</span>
              <input type="range" min="2" max="16" defaultValue="6" />
            </div>
            <select className="wire-input">
              <option>Tipo de tecnologia</option>
            </select>
            <button className="wire-button">Generar propuesta</button>
          </aside>
        </section>
        <ScreenNotes screen={screen} />
      </div>
      <StateStrip states={screen.states} />
    </div>
  );
}
