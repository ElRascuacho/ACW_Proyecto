import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ContactoNav from '../components/ContactoNav';
import { useConsultas } from '../context/ConsultaContext';

export default function ContactoForm() {
  const { agregarConsulta } = useConsultas();
  const navigate = useNavigate();
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!nombre.trim() || !email.trim() || !mensaje.trim()) {
      alert('Completa todos los campos.');
      return;
    }
    agregarConsulta({ nombre: nombre.trim(), email: email.trim(), mensaje: mensaje.trim() });
    alert('Mensaje enviado correctamente.');
    navigate('/consultas');
  }

  return (
    <section className="section-padding" id="contacto">
      <div className="container">
        <ContactoNav />

        <div className="section-header">
          <p className="section-label">Contacto</p>
          <h2 className="section-title">
            Hablemos de tu <span className="highlight">proximo proyecto</span>
          </h2>
          <p className="section-desc">Estamos en Manta, Manabi. Cuentanos tu idea y la hacemos realidad.</p>
        </div>

        <div className="contact-grid">
          <form className="contact-form" onSubmit={handleSubmit}>
            <h3>
              <i className="fas fa-envelope contact-form-icon"></i>Envia un mensaje
            </h3>
            <div className="form-group">
              <label htmlFor="contact-name">Nombre</label>
              <input
                id="contact-name"
                placeholder="Tu nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="contact-email">Correo electronico</label>
              <input
                id="contact-email"
                type="email"
                placeholder="correo@ejemplo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="contact-msg">Mensaje</label>
              <textarea
                id="contact-msg"
                placeholder="Cuentanos sobre tu proyecto..."
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
              />
            </div>
            <button type="submit" className="btn-primary">
              <i className="fas fa-paper-plane"></i> Enviar mensaje
            </button>
          </form>

          <div className="contact-info">
            <div className="contact-info-card">
              <i className="fas fa-map-marker-alt"></i>
              <div>
                <h4>Ubicacion</h4>
                <p>Manta, Manabi, Ecuador</p>
              </div>
            </div>
            <div className="contact-info-card">
              <i className="fas fa-envelope"></i>
              <div>
                <h4>Correo</h4>
                <p>hola@macally.ec</p>
              </div>
            </div>
            <div className="contact-info-card">
              <i className="fas fa-phone-alt"></i>
              <div>
                <h4>Telefono</h4>
                <p>+593 98 765 4321</p>
              </div>
            </div>
            <div className="contact-info-card">
              <i className="fas fa-clock"></i>
              <div>
                <h4>Horario</h4>
                <p>Lun – Vie, 9:00 – 18:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
