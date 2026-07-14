import { Link } from 'react-router-dom';
import { Ticket } from '../models/ticket';

interface Props {
  ticket: Ticket;
  modoTecnico: boolean;
  onResolver: (id: number) => void;
}

export default function TicketCard({ ticket, modoTecnico, onResolver }: Props) {
  const badgeClass = ticket.estado === 'resuelto' ? 'badge-done' : 'badge-progress';
  const badgeText = ticket.estado === 'resuelto' ? 'Resuelto' : 'En proceso';

  return (
    <div className="ticket-item">
      <div className="ticket-item-left">
        <h4>{ticket.asunto}</h4>
        <p>
          <i className="far fa-clock" style={{ marginRight: '4px' }}></i>
          Creado: {ticket.fecha} · {ticket.prioridad}
        </p>
        <Link to={`/tickets/${ticket.id}`} className="btn-secondary btn-sm" style={{ marginTop: '10px' }}>
          Ver detalle
        </Link>
      </div>
      <div className="ticket-item-right">
        <span className={`badge ${badgeClass}`}>{badgeText}</span>
        {modoTecnico && ticket.estado !== 'resuelto' && (
          <button type="button" className="btn-secondary btn-sm" onClick={() => onResolver(ticket.id)}>
            Resolver
          </button>
        )}
      </div>
    </div>
  );
}
