import { useNavigate, useParams } from 'react-router-dom';
import SoporteNav from '../components/SoporteNav';
import { useTickets } from '../context/TicketContext';

export default function TicketDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getById, modoTecnico, resolverTicket } = useTickets();
  const ticket = getById(Number(id));

  if (!ticket) {
    return (
      <section className="section-padding">
        <div className="container">
          <SoporteNav />
          <p style={{ marginTop: '24px' }}>Ticket no encontrado.</p>
          <div className="detail-actions">
            <button type="button" className="btn-secondary" onClick={() => navigate('/')}>
              Volver al listado
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding">
      <div className="container">
        <SoporteNav />

        <div className="section-header">
          <p className="section-label">Detalle del ticket</p>
          <h2 className="section-title">{ticket.asunto}</h2>
          <p className="section-desc">ID desde URL: {id}</p>
        </div>

        <div className="detail-card">
          <div className="contact-info-card" style={{ background: 'transparent', border: 'none', padding: 0 }}>
            <i className="fas fa-ticket-alt"></i>
            <div>
              <h4>Prioridad: {ticket.prioridad}</h4>
              <p>
                Estado:{' '}
                <span className={`badge ${ticket.estado === 'resuelto' ? 'badge-done' : 'badge-progress'}`}>
                  {ticket.estado === 'resuelto' ? 'Resuelto' : 'En proceso'}
                </span>
              </p>
              <p style={{ marginTop: '12px' }}>{ticket.descripcion}</p>
              <p style={{ marginTop: '12px', color: 'var(--text-muted)' }}>
                <i className="far fa-clock" style={{ marginRight: '4px' }}></i>
                Creado: {ticket.fecha}
              </p>
            </div>
          </div>
        </div>

        <div className="detail-actions">
          <button type="button" className="btn-secondary" onClick={() => navigate('/')}>
            Volver al listado
          </button>
          {modoTecnico && ticket.estado !== 'resuelto' && (
            <button type="button" className="btn-primary" onClick={() => resolverTicket(ticket.id)}>
              Marcar resuelto
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
