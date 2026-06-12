document.addEventListener('DOMContentLoaded', () => {
  const btnEnviar = document.getElementById('btnEnviarContacto');
  if (btnEnviar) {
    btnEnviar.addEventListener('click', enviarContacto);
  }
});

function enviarContacto() {
  const nameInput = document.getElementById('contact-name') as HTMLInputElement | null;
  const emailInput = document.getElementById('contact-email') as HTMLInputElement | null;
  const msgInput = document.getElementById('contact-msg') as HTMLTextAreaElement | null;

  if (nameInput && emailInput && msgInput) {
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const msg = msgInput.value.trim();

    if (!name || !email || !msg) {
      alert('Por favor completa todos los campos del formulario.');
      return;
    }

    alert('Mensaje enviado. Te contactaremos pronto a ' + email);

    nameInput.value = '';
    emailInput.value = '';
    msgInput.value = '';
  }
}
