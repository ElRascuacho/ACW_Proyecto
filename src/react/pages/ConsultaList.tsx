import ContactoNav from '../components/ContactoNav';
import ConsultaCard from '../components/ConsultaCard';
import { useConsultas } from '../context/ConsultaContext';

export default function ConsultaList() {
  const { consultasFiltradas, filtro, setFiltro } = useConsultas();

  return (
    <section className="section-padding">
      <div className="container">
        <ContactoNav />

        <div className="section-header">
          <p className="section-label">Consultas</p>
          <h2 className="section-title">
            Mensajes <span className="highlight">recibidos</span>
          </h2>
        </div>

        <div className="list-toolbar">
          <div className="form-group">
            <label htmlFor="filtro-consultas">Filtrar consultas</label>
            <input
              id="filtro-consultas"
              value={filtro}
              onChange={(e) => setFiltro(e.target.value)}
              placeholder="Nombre o email"
            />
          </div>
        </div>

        <div className="panel-card">
          {consultasFiltradas.length === 0 ? (
            <p style={{ color: 'var(--text-muted)' }}>No hay consultas con ese filtro.</p>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {consultasFiltradas.map((c) => (
                <ConsultaCard key={c.id} consulta={c} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
