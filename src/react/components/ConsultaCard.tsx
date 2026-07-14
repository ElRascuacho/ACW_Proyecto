import { Link } from 'react-router-dom';
import { Consulta } from '../models/consulta';

interface Props {
  consulta: Consulta;
}

export default function ConsultaCard({ consulta }: Props) {
  const badgeClass = consulta.estado === 'respondida' ? 'badge-done' : 'badge-progress';
  const badgeText = consulta.estado === 'respondida' ? 'Respondida' : 'Pendiente';

  return (
    <div className="contact-info-card">
      <i className="fas fa-envelope"></i>
      <div style={{ flex: 1 }}>
        <h4>{consulta.nombre}</h4>
        <p>{consulta.email}</p>
        <span className={`badge ${badgeClass}`} style={{ marginTop: '8px' }}>
          {badgeText}
        </span>
        <Link to={`/consultas/${consulta.id}`} className="btn-secondary btn-sm" style={{ marginTop: '10px' }}>
          Ver detalle
        </Link>
      </div>
    </div>
  );
}
