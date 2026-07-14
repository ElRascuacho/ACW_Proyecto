export interface Ticket {
  id: number;
  asunto: string;
  prioridad: string;
  descripcion: string;
  fecha: string;
  estado: 'abierto' | 'en_proceso' | 'resuelto';
}

export const TICKETS_MOCK: Ticket[] = [
  {
    id: 1,
    asunto: 'Configurar correo corporativo',
    prioridad: 'Media',
    descripcion: 'Necesitamos configurar el correo empresarial en Outlook.',
    fecha: '12 May 2026',
    estado: 'en_proceso',
  },
  {
    id: 2,
    asunto: 'Actualizacion de modulo inventarios',
    prioridad: 'Alta',
    descripcion: 'El modulo de inventarios no actualiza stock en tiempo real.',
    fecha: '10 May 2026',
    estado: 'resuelto',
  },
  {
    id: 3,
    asunto: 'Error 404 en pagina de pago',
    prioridad: 'Critica',
    descripcion: 'Los clientes no pueden completar el pago en checkout.',
    fecha: '14 May 2026',
    estado: 'en_proceso',
  },
];
