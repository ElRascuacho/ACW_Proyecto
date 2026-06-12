let isTechnicalMode = false;

document.addEventListener('DOMContentLoaded', () => {
  const btnCrear = document.getElementById('btnCrearTicket');
  const btnModoTecnico = document.getElementById('btnModoTecnico');

  if (btnCrear) {
    btnCrear.addEventListener('click', crearTicket);
  }

  if (btnModoTecnico) {
    btnModoTecnico.addEventListener('click', toggleModoTecnico);
  }

  const ticketList = document.getElementById('ticketList');
  if (ticketList) {
    ticketList.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      if (target && target.classList.contains('btn-resolver-ticket')) {
        const ticketItem = target.closest('.ticket-item');
        if (ticketItem) {
          const badge = ticketItem.querySelector('.badge');
          if (badge) {
            badge.className = 'badge badge-done';
            badge.textContent = 'Resuelto';
          }
          target.remove();
        }
      }
    });
  }
});

function toggleModoTecnico() {
  const btnModoTecnico = document.getElementById('btnModoTecnico');
  const tecnicoStatus = document.getElementById('tecnicoStatus');

  if (!btnModoTecnico || !tecnicoStatus) return;

  if (isTechnicalMode) {
    isTechnicalMode = false;
    btnModoTecnico.innerHTML = '<i class="fas fa-user-cog"></i> Modo Técnico';
    tecnicoStatus.textContent = 'Seguimiento de tus solicitudes actuales.';
    tecnicoStatus.style.color = '';

    document.querySelectorAll('.btn-resolver-ticket').forEach((btn) => btn.remove());
  } else {
    const pass = prompt('Ingresa la contraseña técnica (Tip: admin):');
    if (pass === 'admin') {
      isTechnicalMode = true;
      btnModoTecnico.innerHTML = '<i class="fas fa-sign-out-alt"></i> Salir Técnico';
      tecnicoStatus.textContent = 'Panel de Soporte Técnico Activo. Puedes resolver tickets.';
      tecnicoStatus.style.color = '#38bdf8';

      const tickets = document.querySelectorAll('.ticket-item');
      tickets.forEach((ticket) => {
        const badge = ticket.querySelector('.badge');
        if (badge && badge.classList.contains('badge-progress')) {
          if (!ticket.querySelector('.btn-resolver-ticket')) {
            const btn = document.createElement('button');
            btn.className = 'btn-resolver-ticket btn-secondary';
            btn.textContent = 'Resolver';
            btn.setAttribute('style', 'padding: 0.2rem 0.6rem; font-size: 0.75rem; border-radius: 4px; cursor: pointer; margin-top: 0.5rem; display: block;');
            ticket.appendChild(btn);
          }
        }
      });
    } else {
      alert('Contraseña incorrecta.');
    }
  }
}

function crearTicket() {
  const asuntoInput = document.getElementById('ticket-asunto') as HTMLInputElement | null;
  const prioridadSelect = document.getElementById('ticket-prioridad') as HTMLSelectElement | null;
  const descInput = document.getElementById('ticket-desc') as HTMLTextAreaElement | null;
  const list = document.getElementById('ticketList');

  if (asuntoInput && prioridadSelect && descInput && list) {
    const asunto = asuntoInput.value.trim();
    const prioridad = prioridadSelect.value;
    const desc = descInput.value.trim();

    if (!asunto || !desc) {
      alert('Completa el asunto y la descripción del ticket.');
      return;
    }

    const item = document.createElement('div');
    item.className = 'ticket-item';

    const dateStr = new Date().toLocaleDateString('es-EC', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });

    const safeAsunto = asunto.replace(/</g, '&lt;').replace(/>/g, '&gt;');

    item.innerHTML = `
      <div class="ticket-item-left">
        <h4>${safeAsunto}</h4>
        <p><i class="far fa-clock" style="margin-right:4px;"></i> Creado: ${dateStr} · ${prioridad}</p>
      </div>
      <span class="badge badge-progress">En proceso</span>
    `;

    if (isTechnicalMode) {
      const btn = document.createElement('button');
      btn.className = 'btn-resolver-ticket btn-secondary';
      btn.textContent = 'Resolver';
      btn.setAttribute('style', 'padding: 0.2rem 0.6rem; font-size: 0.75rem; border-radius: 4px; cursor: pointer; margin-top: 0.5rem; display: block;');
      item.appendChild(btn);
    }

    list.prepend(item);

    asuntoInput.value = '';
    descInput.value = '';
  }
}
