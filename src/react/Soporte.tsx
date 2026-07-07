import { useState } from 'react';

interface Ticket {
  id: number;
  asunto: string;
  prioridad: string;
  fecha: string;
  estado: 'progress' | 'done';
}

const TICKETS_INICIALES: Ticket[] = [
  { id: 1, asunto: 'Configurar correo corporativo', prioridad: 'Media', fecha: '12 May 2026', estado: 'progress' },
  { id: 2, asunto: 'Actualizacion de modulo inventarios', prioridad: 'Alta', fecha: '10 May 2026', estado: 'done' },
  { id: 3, asunto: 'Error 404 en pagina de pago', prioridad: 'Critica', fecha: '14 May 2026', estado: 'progress' },
];

export default function Soporte() {
  const [tickets, setTickets] = useState<Ticket[]>(TICKETS_INICIALES);
  const [asunto, setAsunto] = useState('');
  const [prioridad, setPrioridad] = useState('Media');
  const [desc, setDesc] = useState('');
  const [isTechnicalMode, setIsTechnicalMode] = useState(false);
  const [nextId, setNextId] = useState(4);

  function toggleModoTecnico() {
    if (isTechnicalMode) {
      setIsTechnicalMode(false);
    } else {
      const pass = prompt('Ingresa la contraseña técnica (Tip: admin):');
      if (pass === 'admin') {
        setIsTechnicalMode(true);
      } else {
        alert('Contraseña incorrecta.');
      }
    }
  }

  function crearTicket() {
    if (!asunto.trim() || !desc.trim()) {
      alert('Completa el asunto y la descripción del ticket.');
      return;
    }

    const dateStr = new Date().toLocaleDateString('es-EC', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });

    setTickets((prev) => [
      { id: nextId, asunto: asunto.trim(), prioridad, fecha: dateStr, estado: 'progress' },
      ...prev,
    ]);
    setNextId((id) => id + 1);
    setAsunto('');
    setDesc('');
  }

  function resolverTicket(id: number) {
    setTickets((prev) =>
      prev.map((t) => (t.id === id ? { ...t, estado: 'done' } : t))
    );
  }

  return (
    <section className="section-padding" id="tickets">
      <div className="container">
        <div className="section-header">
          <p className="section-label">Ticket Center</p>
          <h2 className="section-title">Soporte <span className="highlight">sin complicaciones</span></h2>
          <p className="section-desc">Reporta incidencias y da seguimiento a tus solicitudes en tiempo real.</p>
        </div>

        <div className="ticket-grid">
          <div className="ticket-form">
            <h3><i className="fas fa-plus-circle ticket-icon"></i>Nuevo Ticket</h3>
            <p className="form-sub">Cuentanos que necesitas y te atenderemos a la brevedad.</p>
            <div className="form-group">
              <label htmlFor="ticket-asunto">Asunto</label>
              <input
                type="text"
                id="ticket-asunto"
                placeholder="Ej: Error en el inicio de sesion"
                value={asunto}
                onChange={(e) => setAsunto(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="ticket-prioridad">Prioridad</label>
              <select
                id="ticket-prioridad"
                value={prioridad}
                onChange={(e) => setPrioridad(e.target.value)}
              >
                <option value="Baja">Baja</option>
                <option value="Media">Media</option>
                <option value="Alta">Alta</option>
                <option value="Critica">Critica</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="ticket-desc">Descripcion</label>
              <textarea
                id="ticket-desc"
                placeholder="Describe el problema o solicitud en detalle..."
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
              />
            </div>
            <button type="button" className="btn-primary" onClick={crearTicket}>
              <i className="fas fa-paper-plane"></i> Crear Ticket
            </button>
          </div>

          <div className="ticket-list">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem', flexWrap: 'wrap', gap: '10px' }}>
              <h3 style={{ marginBottom: 0 }}><i className="fas fa-ticket-alt ticket-icon"></i>Tickets Activos</h3>
              <button
                type="button"
                id="btnModoTecnico"
                className="btn-secondary"
                style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem', borderRadius: '4px', cursor: 'pointer' }}
                onClick={toggleModoTecnico}
              >
                <i className={isTechnicalMode ? 'fas fa-sign-out-alt' : 'fas fa-user-cog'}></i>{' '}
                {isTechnicalMode ? 'Salir Técnico' : 'Modo Técnico'}
              </button>
            </div>
            <p
              id="tecnicoStatus"
              className="list-sub"
              style={isTechnicalMode ? { color: '#38bdf8' } : undefined}
            >
              {isTechnicalMode
                ? 'Panel de Soporte Técnico Activo. Puedes resolver tickets.'
                : 'Seguimiento de tus solicitudes actuales.'}
            </p>
            <div id="ticketList">
              {tickets.map((ticket) => (
                <div key={ticket.id} className="ticket-item">
                  <div className="ticket-item-left">
                    <h4>{ticket.asunto}</h4>
                    <p>
                      <i className="far fa-clock" style={{ marginRight: '4px' }}></i>
                      Creado: {ticket.fecha} · {ticket.prioridad}
                    </p>
                  </div>
                  <span className={`badge badge-${ticket.estado === 'done' ? 'done' : 'progress'}`}>
                    {ticket.estado === 'done' ? 'Resuelto' : 'En proceso'}
                  </span>
                  {isTechnicalMode && ticket.estado === 'progress' && (
                    <button
                      type="button"
                      className="btn-resolver-ticket btn-secondary"
                      style={{ padding: '0.2rem 0.6rem', fontSize: '0.75rem', borderRadius: '4px', cursor: 'pointer', marginTop: '0.5rem', display: 'block' }}
                      onClick={() => resolverTicket(ticket.id)}
                    >
                      Resolver
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
