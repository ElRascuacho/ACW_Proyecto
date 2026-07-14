import { createContext, useContext, useMemo, useState, ReactNode } from 'react';
import { CONSULTAS_MOCK, Consulta } from '../models/consulta';

interface ConsultaContextValue {
  consultas: Consulta[];
  filtro: string;
  setFiltro: (v: string) => void;
  consultasFiltradas: Consulta[];
  totalPendientes: number;
  agregarConsulta: (data: Omit<Consulta, 'id' | 'fecha' | 'estado'>) => void;
  getById: (id: number) => Consulta | undefined;
}

const ConsultaContext = createContext<ConsultaContextValue | null>(null);

export function ConsultaProvider({ children }: { children: ReactNode }) {
  const [consultas, setConsultas] = useState<Consulta[]>(CONSULTAS_MOCK);
  const [filtro, setFiltro] = useState('');
  const [nextId, setNextId] = useState(3);

  const consultasFiltradas = useMemo(() => {
    const term = filtro.toLowerCase().trim();
    if (!term) return consultas;
    return consultas.filter(
      (c) => c.nombre.toLowerCase().includes(term) || c.email.toLowerCase().includes(term)
    );
  }, [consultas, filtro]);

  const totalPendientes = useMemo(
    () => consultas.filter((c) => c.estado === 'pendiente').length,
    [consultas]
  );

  function agregarConsulta(data: Omit<Consulta, 'id' | 'fecha' | 'estado'>) {
    const fecha = new Date().toLocaleDateString('es-EC', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
    setConsultas((prev) => [{ id: nextId, ...data, fecha, estado: 'pendiente' }, ...prev]);
    setNextId((id) => id + 1);
  }

  function getById(id: number) {
    return consultas.find((c) => c.id === id);
  }

  return (
    <ConsultaContext.Provider
      value={{ consultas, filtro, setFiltro, consultasFiltradas, totalPendientes, agregarConsulta, getById }}
    >
      {children}
    </ConsultaContext.Provider>
  );
}

export function useConsultas() {
  const ctx = useContext(ConsultaContext);
  if (!ctx) throw new Error('useConsultas debe usarse dentro de ConsultaProvider');
  return ctx;
}
