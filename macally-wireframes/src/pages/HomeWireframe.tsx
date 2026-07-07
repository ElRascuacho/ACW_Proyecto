import { ScreenNotes } from "../components/ScreenNotes";
import { PlaceholderMedia, SectionIntro, StateStrip } from "../components/WireframePrimitives";
import type { ScreenDefinition } from "../data/screens";

export function HomeWireframe({ screen, onNavigate }: { screen: ScreenDefinition; onNavigate: (route: string) => void }) {
  return (
    <div className="grid gap-6">
      <SectionIntro
        eyebrow="Inicio"
        title="Digitalizamos el comercio de Manabi"
        description="Wireframe de pagina inicial con propuesta de valor, llamadas a cotizacion y resumen de servicios/proyectos."
      />
      <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
        <section className="grid gap-6">
          <div className="wire-panel grid gap-6 p-5 md:grid-cols-[1.1fr_.9fr] md:p-8">
            <div className="grid content-center gap-4">
              <div className="h-6 w-40 wire-box" />
              <div className="h-12 max-w-xl wire-box" />
              <div className="h-20 max-w-2xl wire-box" />
              <div className="flex flex-wrap gap-3">
                <button className="wire-button" onClick={() => onNavigate("/cotizador")}>CTA cotizar</button>
                <button className="wire-button-secondary">CTA ver proyectos</button>
              </div>
            </div>
            <PlaceholderMedia label="Placeholder panel visual de servicios" className="min-h-72" />
          </div>
          <div className="grid gap-4 md:grid-cols-4">
            {["Web", "App", "E-commerce", "Cloud"].map((item) => (
              <article key={item} className="wire-panel grid gap-3 p-4">
                <div className="h-10 w-10 wire-box" />
                <div className="h-5 w-24 wire-box" />
                <div className="h-12 wire-box" />
              </article>
            ))}
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <article key={item} className="wire-panel overflow-hidden">
                <PlaceholderMedia label={`Proyecto ${item}`} className="min-h-40 border-0" />
                <div className="grid gap-3 p-4">
                  <div className="h-6 wire-box" />
                  <div className="h-16 wire-box" />
                  <div className="flex gap-2">
                    <span className="h-7 w-16 wire-box" />
                    <span className="h-7 w-20 wire-box" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
        <ScreenNotes screen={screen} />
      </div>
      <StateStrip states={screen.states} />
    </div>
  );
}
