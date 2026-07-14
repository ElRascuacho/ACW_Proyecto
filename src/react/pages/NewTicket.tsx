import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SoporteNav from '../components/SoporteNav';
import { useTickets } from '../context/TicketContext';

export default function NewTicket() {
  const { agregarTicket } = useTickets();
  const navigate = useNavigate();
  const [asunto, setAsunto] = useState('');
  const [prioridad, setPrioridad] = useState('Media');
  const [descripcion, setDescripcion] = useState('');

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!asunto.trim() || !descripcion.trim()) {
      alert('Completa asunto y descripcion.');
      return;
    }
    agregarTicket({ asunto: asunto.trim(), prioridad, descripcion: descripcion.trim() });
    navigate('/');
  }

  return (
    <section className="section-padding">
      <div className="container">
        <SoporteNav />

        <div className="section-header">
          <p className="section-label">Nuevo ticket</p>
          <h2 className="section-title">
            Crear <span className="highlight">solicitud</span>
          </h2>
        </div>

        <div className="ticket-form" style={{ maxWidth: '640px' }}>
          <h3><i className="fas fa-plus-circle ticket-icon"></i>Nuevo Ticket</h3>
          <p className="form-sub">Cuentanos que necesitas y te atenderemos a la brevedad.</p>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="ticket-asunto">Asunto</label>
              <input
                id="ticket-asunto"
                placeholder="Ej: Error en el inicio de sesion"
                value={asunto}
                onChange={(e) => setAsunto(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="ticket-prioridad">Prioridad</label>
              <select id="ticket-prioridad" value={prioridad} onChange={(e) => setPrioridad(e.target.value)}>
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
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
              />
            </div>
            <div className="detail-actions" style={{ marginTop: 0 }}>
              <button type="submit" className="btn-primary">
                <i className="fas fa-paper-plane"></i> Crear Ticket
              </button>
              <button type="button" className="btn-secondary" onClick={() => navigate('/')}>
                Cancelar
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
