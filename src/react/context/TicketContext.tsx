import { createContext, useContext, useMemo, useState, ReactNode } from 'react';
import { TICKETS_MOCK, Ticket } from '../models/ticket';

interface TicketContextValue {
  tickets: Ticket[];
  filtro: string;
  setFiltro: (v: string) => void;
  ticketsFiltrados: Ticket[];
  ticketsAbiertos: number;
  modoTecnico: boolean;
  toggleModoTecnico: () => void;
  agregarTicket: (data: Omit<Ticket, 'id' | 'fecha' | 'estado'>) => void;
  resolverTicket: (id: number) => void;
  getById: (id: number) => Ticket | undefined;
}

const TicketContext = createContext<TicketContextValue | null>(null);

export function TicketProvider({ children }: { children: ReactNode }) {
  const [tickets, setTickets] = useState<Ticket[]>(TICKETS_MOCK);
  const [filtro, setFiltro] = useState('');
  const [modoTecnico, setModoTecnico] = useState(false);
  const [nextId, setNextId] = useState(4);

  const ticketsFiltrados = useMemo(() => {
    const term = filtro.toLowerCase().trim();
    if (!term) return tickets;
    return tickets.filter(
      (t) =>
        t.asunto.toLowerCase().includes(term) ||
        t.prioridad.toLowerCase().includes(term)
    );
  }, [tickets, filtro]);

  const ticketsAbiertos = useMemo(
    () => tickets.filter((t) => t.estado !== 'resuelto').length,
    [tickets]
  );

  function toggleModoTecnico() {
    if (modoTecnico) {
      setModoTecnico(false);
      return;
    }
    const pass = prompt('Contrasena tecnica (Tip: admin):');
    if (pass === 'admin') setModoTecnico(true);
    else alert('Contrasena incorrecta.');
  }

  function agregarTicket(data: Omit<Ticket, 'id' | 'fecha' | 'estado'>) {
    const fecha = new Date().toLocaleDateString('es-EC', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
    setTickets((prev) => [
      { id: nextId, ...data, fecha, estado: 'en_proceso' },
      ...prev,
    ]);
    setNextId((id) => id + 1);
  }

  function resolverTicket(id: number) {
    setTickets((prev) =>
      prev.map((t) => (t.id === id ? { ...t, estado: 'resuelto' } : t))
    );
  }

  function getById(id: number) {
    return tickets.find((t) => t.id === id);
  }

  return (
    <TicketContext.Provider
      value={{
        tickets,
        filtro,
        setFiltro,
        ticketsFiltrados,
        ticketsAbiertos,
        modoTecnico,
        toggleModoTecnico,
        agregarTicket,
        resolverTicket,
        getById,
      }}
    >
      {children}
    </TicketContext.Provider>
  );
}

export function useTickets() {
  const ctx = useContext(TicketContext);
  if (!ctx) throw new Error('useTickets debe usarse dentro de TicketProvider');
  return ctx;
}
