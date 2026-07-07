import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Service {
  key: string;
  name: string;
  desc: string;
  price: number;
  icon: string;
  selected: boolean;
}

interface QuoteItem {
  name: string;
  price: number;
}

@Component({
  selector: 'app-cotizador',
  standalone: true,
  imports: [FormsModule],
  template: `
    <section class="section-padding" id="cotizador">
      <div class="container">
        <div class="section-header">
          <p class="section-label">Smart Cotizador</p>
          <h2 class="section-title">Construye tu <span class="highlight">presupuesto</span></h2>
          <p class="section-desc">Selecciona los servicios que necesitas y obten un precio estimado al instante.</p>
        </div>

        <div class="cotizador-grid">
          <div>
            @for (service of services; track service.key) {
              <div
                class="service-option"
                [class.active]="service.selected"
                (click)="toggleService(service)"
              >
                <input type="checkbox" [id]="'chk-' + service.key" [checked]="service.selected" />
                <div class="service-icon"><i class="fas" [class]="service.icon"></i></div>
                <div class="service-info">
                  <h4>{{ service.name }}</h4>
                  <p>{{ service.desc }}</p>
                </div>
              </div>
            }
          </div>

          <div class="preview-card">
            <div class="preview-header">
              <h3>Resumen</h3>
              <span class="preview-price">{{ '$' + finalTotal }}</span>
            </div>
            <div class="preview-items">
              @if (selectedItems.length === 0) {
                <p style="color:var(--text-muted); font-size:0.9rem;">Selecciona servicios para ver el resumen</p>
              } @else {
                @for (item of selectedItems; track item.name) {
                  <div class="preview-item">
                    <span class="item-name">{{ item.name }}</span>
                    <span class="item-price">{{ '$' + item.price }}</span>
                  </div>
                }
              }
            </div>
            <div class="slider-group">
              <label><span>Paginas / Pantallas</span> <span>{{ pages }}</span></label>
              <input type="range" min="1" max="20" [(ngModel)]="pages" (ngModelChange)="recalculate()" />
            </div>
            <div class="slider-group">
              <label><span>Plazo de entrega (semanas)</span> <span>{{ weeks }}</span></label>
              <input type="range" min="2" max="16" [(ngModel)]="weeks" (ngModelChange)="recalculate()" />
            </div>
            <div class="slider-group">
              <label><span>Tecnología de Desarrollo</span></label>
              <select
                [(ngModel)]="tech"
                (ngModelChange)="recalculate()"
                style="width: 100%; padding: 0.6rem; border-radius: 6px; background: var(--bg-card, #202430); color: var(--text-main, #ffffff); border: 1px solid var(--border-color, #2d313f); font-family: inherit; font-size: 0.9rem; margin-top: 0.4rem;"
              >
                <option value="wordpress">No-Code / WordPress (Tarifa Base)</option>
                <option value="custom">A Medida - React / Node (+50%)</option>
              </select>
            </div>
            <div class="preview-total">
              <span>Total estimado</span>
              <span class="preview-total-amount">{{ '$' + finalTotal }}</span>
            </div>
            <button type="button" class="btn-primary btn-full" (click)="generarPDF()">
              <i class="fas fa-file-pdf"></i> Generar Propuesta en PDF
            </button>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class CotizadorComponent {
  services: Service[] = [
    { key: 'web', name: 'Sitio Web Profesional', desc: 'Landing page, 5 secciones, formulario, responsive', price: 350, icon: 'fa-globe', selected: false },
    { key: 'app', name: 'Aplicacion Movil', desc: 'iOS / Android, UI/UX, integracion con API', price: 1200, icon: 'fa-mobile-alt', selected: false },
    { key: 'ecom', name: 'E‑commerce Completo', desc: 'Catalogo, carrito, pasarela de pago, panel admin', price: 1800, icon: 'fa-shopping-cart', selected: false },
    { key: 'seo', name: 'SEO & Optimizacion', desc: 'Auditoria, keywords, posicionamiento local Manta', price: 250, icon: 'fa-search', selected: false },
    { key: 'cloud', name: 'Infraestructura Cloud', desc: 'Hosting, dominio, SSL, mantenimiento mensual', price: 150, icon: 'fa-server', selected: false },
  ];

  pages = 1;
  weeks = 4;
  tech = 'wordpress';
  selectedItems: QuoteItem[] = [];
  finalTotal = 0;

  toggleService(service: Service): void {
    service.selected = !service.selected;
    this.recalculate();
  }

  recalculate(): void {
    this.selectedItems = this.services
      .filter((s) => s.selected)
      .map((s) => ({ name: s.name, price: s.price }));

    const subtotal = this.selectedItems.reduce((acc, curr) => acc + curr.price, 0);
    const pageFactor = 1 + (this.pages - 1) * 0.03;
    const weekFactor = 1 + (16 - this.weeks) * 0.01;
    const techFactor = this.tech === 'custom' ? 1.5 : 1.0;
    this.finalTotal = Math.round(subtotal * pageFactor * weekFactor * techFactor);
  }

  generarPDF(): void {
    if (this.selectedItems.length === 0) {
      alert('Selecciona al menos un servicio para generar la propuesta.');
      return;
    }

    const techLabel = this.tech === 'custom' ? 'Código a Medida (React / Node)' : 'No-Code / WordPress';
    const subtotal = this.selectedItems.reduce((acc, curr) => acc + curr.price, 0);
    const pagePercentage = Math.round((this.pages - 1) * 3);
    const timePercentage = Math.round((16 - this.weeks) * 1);
    const itemsList = this.selectedItems.map((s) => `- ${s.name}: $${s.price}`).join('\n');

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
      `Tecnología: ${techLabel}`,
      `Páginas/Pantallas: ${this.pages} (+${pagePercentage}% por volumen)`,
      `Plazo de entrega: ${this.weeks} semanas (+${timePercentage}% por urgencia)`,
      '',
      '----------------------------------------',
      `TOTAL PROPUESTO: $${this.finalTotal}`,
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
      '========================================',
    ].join('\n');

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `Propuesta_Macally_${Date.now()}.txt`;
    link.click();
    URL.revokeObjectURL(link.href);
    alert('Propuesta comercial descargada correctamente.');
  }
}
