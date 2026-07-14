import { useNavigate, useParams } from 'react-router-dom';
import ContactoNav from '../components/ContactoNav';
import { useConsultas } from '../context/ConsultaContext';

export default function ConsultaDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getById } = useConsultas();
  const consulta = getById(Number(id));

  if (!consulta) {
    return (
      <section className="section-padding">
        <div className="container">
          <ContactoNav />
          <p style={{ marginTop: '24px' }}>Consulta no encontrada.</p>
          <button type="button" className="btn-secondary" onClick={() => navigate('/consultas')}>
            Volver
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding">
      <div className="container">
        <ContactoNav />

        <div className="section-header">
          <p className="section-label">Detalle consulta</p>
          <h2 className="section-title">{consulta.nombre}</h2>
          <p className="section-desc">ID desde URL: {id}</p>
        </div>

        <div className="detail-card">
          <div className="contact-info-card" style={{ background: 'transparent', border: 'none', padding: 0 }}>
            <i className="fas fa-user"></i>
            <div>
              <h4>{consulta.email}</h4>
              <p>
                Estado:{' '}
                <span className={`badge ${consulta.estado === 'respondida' ? 'badge-done' : 'badge-progress'}`}>
                  {consulta.estado}
                </span>
              </p>
              <p style={{ marginTop: '12px' }}>{consulta.mensaje}</p>
              <p style={{ marginTop: '12px', color: 'var(--text-muted)' }}>{consulta.fecha}</p>
            </div>
          </div>
        </div>

        <div className="detail-actions">
          <button type="button" className="btn-secondary" onClick={() => navigate('/consultas')}>
            Volver al listado
          </button>
        </div>
      </div>
    </section>
  );
}
