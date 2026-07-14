import { useNavigate } from 'react-router-dom';
import TicketCard from '../components/TicketCard';
import SoporteNav from '../components/SoporteNav';
import { useTickets } from '../context/TicketContext';

export default function TicketList() {
  const { ticketsFiltrados, filtro, setFiltro, modoTecnico, resolverTicket } = useTickets();
  const navigate = useNavigate();

  return (
    <section className="section-padding" id="tickets">
      <div className="container">
        <SoporteNav />

        <div className="section-header">
          <p className="section-label">Ticket Center</p>
          <h2 className="section-title">
            Soporte <span className="highlight">sin complicaciones</span>
          </h2>
          <p className="section-desc">Reporta incidencias y da seguimiento a tus solicitudes en tiempo real.</p>
        </div>

        <div className="list-toolbar">
          <div className="form-group">
            <label htmlFor="filtro-tickets">Filtrar tickets</label>
            <input
              id="filtro-tickets"
              type="text"
              value={filtro}
              onChange={(e) => setFiltro(e.target.value)}
              placeholder="Buscar por asunto o prioridad"
            />
          </div>
          <button type="button" className="btn-primary" onClick={() => navigate('/nuevo')}>
            <i className="fas fa-plus"></i> Crear ticket
          </button>
        </div>

        <div className="panel-card">
          <h3><i className="fas fa-ticket-alt ticket-icon"></i>Tickets Activos</h3>
          <p className="panel-sub">Seguimiento de tus solicitudes actuales.</p>

          {ticketsFiltrados.length === 0 ? (
            <p style={{ color: 'var(--text-muted)' }}>No hay tickets con ese filtro.</p>
          ) : (
            <div id="ticketList">
              {ticketsFiltrados.map((ticket) => (
                <TicketCard
                  key={ticket.id}
                  ticket={ticket}
                  modoTecnico={modoTecnico}
                  onResolver={resolverTicket}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
