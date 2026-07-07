import { ScreenNotes } from "../components/ScreenNotes";
import { Field, SectionIntro, StateStrip, StatusBadge } from "../components/WireframePrimitives";
import type { ScreenDefinition } from "../data/screens";

export function SupportWireframe({ screen }: { screen: ScreenDefinition }) {
  return (
    <div className="grid gap-6">
      <SectionIntro
        eyebrow="Ticket center"
        title="Soporte sin complicaciones"
        description="Wireframe para registrar tickets y consultar solicitudes activas con estados simples."
      />
      <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
        <section className="grid gap-6 lg:grid-cols-[.9fr_1.1fr]">
          <form className="wire-panel grid gap-4 p-5">
            <h2 className="text-xl font-extrabold">Nuevo ticket</h2>
            <Field label="Asunto" />
            <label className="grid gap-2">
              <span className="text-sm font-bold">Prioridad</span>
              <select className="wire-input">
                <option>Baja</option>
                <option>Media</option>
                <option>Alta</option>
                <option>Critica</option>
              </select>
            </label>
            <Field label="Descripcion" area />
            <button className="wire-button" type="button">Crear ticket</button>
          </form>
          <div className="wire-panel grid content-start gap-4 p-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h2 className="text-xl font-extrabold">Tickets activos</h2>
              <button className="wire-button-secondary">Modo tecnico</button>
            </div>
            {[["Configurar correo corporativo", "En proceso"], ["Actualizacion de modulo", "Resuelto"], ["Error en pagina de pago", "Critico"]].map(([title, status]) => (
              <article key={title} className="grid gap-3 border border-wire-line p-4 md:grid-cols-[1fr_auto]">
                <div className="grid gap-2">
                  <h3 className="font-extrabold">{title}</h3>
                  <div className="h-8 wire-box" />
                </div>
                <StatusBadge label={status} />
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
