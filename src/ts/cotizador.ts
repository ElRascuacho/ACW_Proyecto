interface QuoteData {
  total: number;
  items: Array<{ name: string; price: number }>;
  pages: number;
  weeks: number;
  tech: string;
  techLabel: string;
}

const prices: Record<string, number> = {
  web: 350,
  app: 1200,
  ecom: 1800,
  seo: 250,
  cloud: 150
};

document.addEventListener('DOMContentLoaded', () => {
  const serviceOptions = document.querySelectorAll('.service-option');
  const pagesSlider = document.getElementById('pagesSlider');
  const weeksSlider = document.getElementById('weeksSlider');
  const techSelect = document.getElementById('techSelect');
  const btnPDF = document.getElementById('btnGenerarPDF');

  serviceOptions.forEach((el) => {
    el.addEventListener('click', () => {
      const chk = el.querySelector('input[type="checkbox"]') as HTMLInputElement | null;
      if (chk) {
        chk.checked = !chk.checked;
        el.classList.toggle('active', chk.checked);
        updateQuote();
      }
    });
  });

  if (pagesSlider) {
    pagesSlider.addEventListener('input', updateQuote);
  }
  if (weeksSlider) {
    weeksSlider.addEventListener('input', updateQuote);
  }
  if (techSelect) {
    techSelect.addEventListener('change', updateQuote);
  }
  if (btnPDF) {
    btnPDF.addEventListener('click', generarPDF);
  }
});

function updateQuote(): QuoteData {
  const pagesSlider = document.getElementById('pagesSlider') as HTMLInputElement | null;
  const weeksSlider = document.getElementById('weeksSlider') as HTMLInputElement | null;
  const techSelect = document.getElementById('techSelect') as HTMLSelectElement | null;
  const pagesLabel = document.getElementById('pagesLabel');
  const weeksLabel = document.getElementById('weeksLabel');
  const container = document.getElementById('previewItems');

  const pages = pagesSlider ? parseInt(pagesSlider.value) : 1;
  const weeks = weeksSlider ? parseInt(weeksSlider.value) : 4;
  const tech = techSelect ? techSelect.value : 'wordpress';

  if (pagesLabel) pagesLabel.textContent = pages.toString();
  if (weeksLabel) weeksLabel.textContent = weeks.toString();

  if (container) {
    container.innerHTML = '';
  }

  const selected: Array<{ name: string; price: number }> = [];
  let total = 0;

  const options = document.querySelectorAll('.service-option');
  options.forEach((el) => {
    const chk = el.querySelector('input[type="checkbox"]') as HTMLInputElement | null;
    if (chk && chk.checked) {
      const key = chk.id.replace('chk-', '');
      const price = prices[key] || 0;
      const nameEl = el.querySelector('.service-info h4');
      const name = nameEl ? nameEl.textContent || '' : '';
      total += price;
      selected.push({ name, price });
    }
  });

  if (container) {
    if (selected.length === 0) {
      container.innerHTML = '<p style="color:var(--text-muted); font-size:0.9rem;">Selecciona servicios para ver el resumen</p>';
    } else {
      selected.forEach((s) => {
        const div = document.createElement('div');
        div.className = 'preview-item';
        div.innerHTML = `<span class="item-name">${s.name}</span><span class="item-price">$${s.price}</span>`;
        container.appendChild(div);
      });
    }
  }

  const pageFactor = 1 + (pages - 1) * 0.03;
  const weekFactor = 1 + (16 - weeks) * 0.01;
  const techFactor = tech === 'custom' ? 1.5 : 1.0;

  const finalTotal = Math.round(total * pageFactor * weekFactor * techFactor);

  const totalPriceEl = document.getElementById('totalPrice');
  const totalFinalEl = document.getElementById('totalFinal');

  if (totalPriceEl) totalPriceEl.textContent = `$${finalTotal}`;
  if (totalFinalEl) totalFinalEl.textContent = `$${finalTotal}`;

  const techLabel = tech === 'custom' ? 'Código a Medida (React / Node)' : 'No-Code / WordPress';

  return { total: finalTotal, items: selected, pages, weeks, tech, techLabel };
}

function generarPDF() {
  const data = updateQuote();
  if (data.items.length === 0) {
    alert('Selecciona al menos un servicio para generar la propuesta.');
    return;
  }

  const itemsList = data.items.map((s) => `- ${s.name}: $${s.price}`).join('\n');
  const subtotal = data.items.reduce((acc, curr) => acc + curr.price, 0);
  const pagePercentage = Math.round((data.pages - 1) * 3);
  const timePercentage = Math.round((16 - data.weeks) * 1);

  const content = [
    '========================================',
    '  PROPUESTA COMERCIAL — MACALLY',
    '========================================',
    '',
    `Fecha: ${new Date().toLocaleDateString('es-EC')}`,
    'Cliente: ___________________________',
    '',
    '--- DESGLOSE DE SERVICIOS ---',
    itemsList,
    '',
    `Subtotal Base: $${subtotal}`,
    `Tecnología: ${data.techLabel}`,
    `Páginas/Pantallas: ${data.pages} (+${pagePercentage}% por volumen)`,
    `Plazo de entrega: ${data.weeks} semanas (+${timePercentage}% por urgencia)`,
    '',
    '----------------------------------------',
    `TOTAL PROPUESTO: $${data.total}`,
    '----------------------------------------',
    '',
    'Condiciones comerciales:',
    '- Validez de la propuesta: 15 días.',
    '- Forma de pago: 50% de anticipo y 50% al finalizar.',
    '',
    '========================================',
    '  Macally · Soluciones Digitales',
    '  Manta, Manabí, Ecuador',
    '  hola@macally.ec',
    '========================================'
  ].join('\n');

  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = `Propuesta_Macally_${Date.now()}.txt`;
  link.click();
  URL.revokeObjectURL(link.href);
  alert('Propuesta comercial descargada correctamente.');
}
