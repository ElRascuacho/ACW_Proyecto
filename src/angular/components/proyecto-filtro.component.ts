import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProyectoService } from '../services/proyecto.service';

@Component({
  selector: 'app-proyecto-filtro',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="form-group" style="max-width:320px;margin-bottom:24px">
      <label for="filtro-proyectos">Filtrar por nombre o categoria</label>
      <input
        id="filtro-proyectos"
        type="text"
        placeholder="Ej: E-commerce, Salud..."
        [ngModel]="proyectoService.filtro()"
        (ngModelChange)="proyectoService.setFiltro($event)"
      />
      <p style="color:var(--text-muted);font-size:0.85rem;margin-top:8px">
        Mostrando {{ proyectoService.totalProyectos() }} proyecto(s)
      </p>
    </div>
  `,
})
export class ProyectoFiltroComponent {
  readonly proyectoService = inject(ProyectoService);
}
