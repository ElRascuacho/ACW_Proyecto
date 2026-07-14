import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CotizacionResumenComponent } from '../components/cotizacion-resumen.component';
import { CotizacionService } from '../services/cotizacion.service';

const ICONOS: Record<string, string> = {
  web: 'fa-globe',
  app: 'fa-mobile-alt',
  ecom: 'fa-shopping-cart',
  seo: 'fa-search',
  cloud: 'fa-server',
};

const DESCRIPCIONES: Record<string, string> = {
  web: 'Landing page, 5 secciones, formulario, responsive',
  app: 'iOS / Android, UI/UX, integracion con API',
  ecom: 'Catalogo, carrito, pasarela de pago, panel admin',
  seo: 'Auditoria, keywords, posicionamiento local Manta',
  cloud: 'Hosting, dominio, SSL, mantenimiento mensual',
};

@Component({
  selector: 'app-cotizador-page',
  standalone: true,
  imports: [FormsModule, CotizacionResumenComponent],
  template: `
    <section class="section-padding" id="cotizador">
      <div class="container">
        <div class="section-header">
          <p class="section-label">Smart Cotizador</p>
          <h2 class="section-title">Construye tu <span class="highlight">presupuesto</span></h2>
          <p class="section-desc">Selecciona servicios y obten un precio estimado al instante.</p>
        </div>

        <div class="cotizador-grid">
          <div>
            @for (servicio of cotizacionService.servicios(); track servicio.key) {
              <div
                class="service-option"
                [class.active]="servicio.seleccionado"
                (click)="cotizacionService.toggleServicio(servicio.key)"
              >
                <input type="checkbox" [checked]="servicio.seleccionado" />
                <div class="service-icon"><i class="fas" [class]="icono(servicio.key)"></i></div>
                <div class="service-info">
                  <h4>{{ servicio.nombre }}</h4>
                  <p>{{ descripcion(servicio.key) }}</p>
                </div>
              </div>
            }
          </div>

          <div class="preview-card">
            <div class="preview-header">
              <h3>Resumen</h3>
              <span class="preview-price">{{ '$' + cotizacionService.totalEstimado() }}</span>
            </div>
            <div class="preview-items">
              @if (seleccionados().length === 0) {
                <p style="color:var(--text-muted);font-size:0.9rem">Selecciona servicios para ver el resumen</p>
              } @else {
                @for (item of seleccionados(); track item.key) {
                  <div class="preview-item">
                    <span class="item-name">{{ item.nombre }}</span>
                    <span class="item-price">{{ '$' + item.precio }}</span>
                  </div>
                }
              }
            </div>
            <div class="slider-group">
              <label><span>Paginas / Pantallas</span> <span>{{ cotizacionService.paginas() }}</span></label>
              <input type="range" min="1" max="20" [ngModel]="cotizacionService.paginas()" (ngModelChange)="cotizacionService.paginas.set($event)" />
            </div>
            <div class="slider-group">
              <label><span>Plazo (semanas)</span> <span>{{ cotizacionService.semanas() }}</span></label>
              <input type="range" min="2" max="16" [ngModel]="cotizacionService.semanas()" (ngModelChange)="cotizacionService.semanas.set($event)" />
            </div>
            <div class="slider-group">
              <label><span>Tecnologia</span></label>
              <select
                [ngModel]="cotizacionService.tecnologia()"
                (ngModelChange)="cotizacionService.tecnologia.set($event)"
                style="width:100%;padding:12px 16px;border-radius:10px;background:rgba(255,255,255,0.04);color:#fff;border:1px solid var(--card-border);font-family:inherit;font-size:0.9rem;margin-top:0.4rem"
              >
                <option value="wordpress">WordPress (tarifa base)</option>
                <option value="custom">A medida (+50%)</option>
              </select>
            </div>
            <app-cotizacion-resumen />
            <button type="button" class="btn-primary btn-full" (click)="generarPDF()">
              <i class="fas fa-file-pdf"></i> Generar Propuesta
            </button>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class CotizadorPageComponent {
  readonly cotizacionService = inject(CotizacionService);

  seleccionados() {
    return this.cotizacionService.servicios().filter((s) => s.seleccionado);
  }

  icono(key: string): string {
    return ICONOS[key] ?? 'fa-cube';
  }

  descripcion(key: string): string {
    return DESCRIPCIONES[key] ?? '';
  }

  generarPDF(): void {
    if (this.seleccionados().length === 0) {
      alert('Selecciona al menos un servicio.');
      return;
    }
    alert(`Propuesta generada. Total: $${this.cotizacionService.totalEstimado()}`);
  }
}
