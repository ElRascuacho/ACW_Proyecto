import { NavLink } from 'react-router-dom';
import { useTickets } from '../context/TicketContext';

export default function SoporteNav() {
  const { ticketsAbiertos, modoTecnico, toggleModoTecnico } = useTickets();

  return (
    <nav className="container module-nav">
      <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : undefined)}>
        Tickets
      </NavLink>
      <NavLink to="/nuevo" className={({ isActive }) => (isActive ? 'active' : undefined)}>
        Nuevo ticket
      </NavLink>
      <span className="module-nav-meta">Abiertos: {ticketsAbiertos}</span>
      <span className="module-nav-spacer" />
      <button type="button" className="btn-secondary btn-sm" onClick={toggleModoTecnico}>
        {modoTecnico ? 'Salir tecnico' : 'Modo tecnico'}
      </button>
    </nav>
  );
}
