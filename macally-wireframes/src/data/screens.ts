export type ScreenState = "base" | "empty" | "loading" | "success" | "error" | "authenticated" | "unauthenticated";

export type ScreenDefinition = {
  id: string;
  name: string;
  route: string;
  purpose: string;
  structure: string[];
  components: string[];
  hierarchy: string[];
  navigation: string[];
  states: ScreenState[];
  source: "figma-detected" | "workspace-assumption";
};

export const screens: ScreenDefinition[] = [
  {
    id: "inicio",
    name: "Inicio / Portafolio",
    route: "/",
    purpose: "Presentar la propuesta de valor de Macally y mostrar una vista inicial de servicios/proyectos.",
    structure: ["Header fijo", "Hero con CTA", "Panel visual de servicios", "Grid de proyectos", "Footer"],
    components: ["AppShell", "WireHeader", "HeroWireframe", "ServiceMatrix", "PortfolioGrid", "FooterWireframe"],
    hierarchy: ["Marca", "Mensaje principal", "Acciones primarias", "Servicios", "Proyectos"],
    navigation: ["Cotizador", "Soporte", "Contacto"],
    states: ["base"],
    source: "workspace-assumption"
  },
  {
    id: "cotizador",
    name: "Cotizador",
    route: "/cotizador",
    purpose: "Permitir seleccionar servicios digitales y visualizar una estimacion de presupuesto.",
    structure: ["Header", "Titulo de pantalla", "Lista de servicios seleccionables", "Panel de resumen", "Controles de alcance"],
    components: ["AppShell", "SectionIntro", "OptionList", "SummaryPanel", "RangeControl", "FooterWireframe"],
    hierarchy: ["Contexto", "Opciones", "Parametros", "Total estimado", "Accion de propuesta"],
    navigation: ["Inicio", "Contacto"],
    states: ["base", "empty", "success"],
    source: "workspace-assumption"
  },
  {
    id: "soporte",
    name: "Soporte / Ticket Center",
    route: "/soporte",
    purpose: "Crear tickets y revisar el estado de solicitudes de soporte.",
    structure: ["Header", "Formulario de ticket", "Listado de tickets", "Indicadores de estado"],
    components: ["AppShell", "TicketFormWireframe", "TicketListWireframe", "StatusBadge", "FooterWireframe"],
    hierarchy: ["Crear solicitud", "Prioridad", "Descripcion", "Tickets activos", "Estado"],
    navigation: ["Inicio", "Contacto"],
    states: ["base", "empty", "authenticated", "error"],
    source: "workspace-assumption"
  },
  {
    id: "contacto",
    name: "Contacto",
    route: "/contacto",
    purpose: "Capturar mensajes comerciales y mostrar datos de contacto de Macally.",
    structure: ["Header", "Intro", "Formulario de contacto", "Tarjetas informativas", "Footer"],
    components: ["AppShell", "ContactFormWireframe", "ContactInfoGrid", "FooterWireframe"],
    hierarchy: ["Invitacion", "Datos del usuario", "Mensaje", "Canales de contacto"],
    navigation: ["Inicio", "Cotizador"],
    states: ["base", "success", "error"],
    source: "workspace-assumption"
  }
];

export const figmaInspection = {
  fileName: "Macally",
  fileKey: "lMdamfvyVXQzRyAkKAVzvV",
  inspectedAt: "2026-06-12",
  pages: [{ id: "0:1", name: "Page 1", childCount: 0 }],
  detectedScreens: 0,
  note: "La pagina de Figma inspeccionada no contenia frames, textos, componentes ni variables locales."
};
