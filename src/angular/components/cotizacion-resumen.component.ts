import { Component, inject } from '@angular/core';
import { CotizacionService } from '../services/cotizacion.service';

@Component({
  selector: 'app-cotizacion-resumen',
  standalone: true,
  template: `
    <div class="preview-total" style="margin-top:16px">
      <span>Total global (servicio compartido)</span>
      <span class="preview-total-amount">{{ '$' + cotizacionService.totalEstimado() }}</span>
    </div>
  `,
})
export class CotizacionResumenComponent {
  readonly cotizacionService = inject(CotizacionService);
}
