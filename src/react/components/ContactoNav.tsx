import { NavLink } from 'react-router-dom';
import { useConsultas } from '../context/ConsultaContext';

export default function ContactoNav() {
  const { totalPendientes } = useConsultas();

  return (
    <nav className="container module-nav">
      <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : undefined)}>
        Enviar mensaje
      </NavLink>
      <NavLink to="/consultas" className={({ isActive }) => (isActive ? 'active' : undefined)}>
        Consultas
      </NavLink>
      <span className="module-nav-meta">Pendientes: {totalPendientes}</span>
    </nav>
  );
}
