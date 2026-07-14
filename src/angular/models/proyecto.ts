export interface Proyecto {
  id: number;
  nombre: string;
  descripcion: string;
  categoria: string;
  tecnologias: string[];
  icono: string;
}

export const PROYECTOS_MOCK: Proyecto[] = [
  {
    id: 1,
    nombre: 'MarketGo · E-commerce',
    descripcion: 'Tienda online con carrito de compras, pasarela de pago y panel administrador.',
    categoria: 'E-commerce',
    tecnologias: ['React', 'Node.js', 'Stripe', 'MongoDB'],
    icono: 'fa-store',
  },
  {
    id: 2,
    nombre: 'HealthApp · Gestion Medica',
    descripcion: 'Sistema de agendamiento de citas e historias clinicas para consultorios locales.',
    categoria: 'Salud',
    tecnologias: ['Angular', 'Firebase', 'TypeScript'],
    icono: 'fa-clinic-medical',
  },
  {
    id: 3,
    nombre: 'RestoApp · Delivery',
    descripcion: 'App de pedidos con seguimiento en tiempo real y notificaciones push.',
    categoria: 'Delivery',
    tecnologias: ['Flutter', 'Dart', 'Google Maps'],
    icono: 'fa-utensils',
  },
];
