export interface Consulta {
  id: number;
  nombre: string;
  email: string;
  mensaje: string;
  fecha: string;
  estado: 'pendiente' | 'respondida';
}

export const CONSULTAS_MOCK: Consulta[] = [
  {
    id: 1,
    nombre: 'Maria Lopez',
    email: 'maria@empresa.com',
    mensaje: 'Necesito una tienda online para productos artesanales.',
    fecha: '08 May 2026',
    estado: 'respondida',
  },
  {
    id: 2,
    nombre: 'Carlos Ruiz',
    email: 'carlos@startup.ec',
    mensaje: 'Quiero cotizar una app movil de delivery.',
    fecha: '11 May 2026',
    estado: 'pendiente',
  },
];
