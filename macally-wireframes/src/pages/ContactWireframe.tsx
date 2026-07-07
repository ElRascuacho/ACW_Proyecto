import { ScreenNotes } from "../components/ScreenNotes";
import { Field, SectionIntro, StateStrip } from "../components/WireframePrimitives";
import type { ScreenDefinition } from "../data/screens";

export function ContactWireframe({ screen }: { screen: ScreenDefinition }) {
  return (
    <div className="grid gap-6">
      <SectionIntro
        eyebrow="Contacto"
        title="Hablemos de tu proximo proyecto"
        description="Wireframe para mensaje comercial, datos de contacto y canales principales."
      />
      <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
        <section className="grid gap-6 lg:grid-cols-[1fr_.8fr]">
          <form className="wire-panel grid gap-4 p-5">
            <h2 className="text-xl font-extrabold">Enviar mensaje</h2>
            <Field label="Nombre" />
            <Field label="Correo electronico" />
            <Field label="Mensaje" area />
            <button className="wire-button" type="button">Enviar mensaje</button>
          </form>
          <div className="grid gap-3">
            {["Ubicacion", "Correo", "Telefono", "Horario"].map((item) => (
              <article key={item} className="wire-panel grid grid-cols-[48px_1fr] gap-4 p-4">
                <span className="h-12 w-12 wire-box" />
                <span className="grid gap-2">
                  <span className="font-extrabold">{item}</span>
                  <span className="h-8 wire-box" />
                </span>
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
