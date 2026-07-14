import { Component, input, output } from '@angular/core';
import { Proyecto } from '../models/proyecto';

@Component({
  selector: 'app-proyecto-card',
  standalone: true,
  template: `
    <article class="project-card">
      <div class="project-img project-img-icon">
        <i class="fas" [class]="proyecto().icono"></i>
      </div>
      <div class="project-body">
        <h3>{{ proyecto().nombre }}</h3>
        <p>{{ proyecto().descripcion }}</p>
        <div class="project-tags">
          @for (tech of proyecto().tecnologias; track tech) {
            <span>{{ tech }}</span>
          }
        </div>
        <button type="button" class="btn-secondary btn-sm" style="margin-top:14px" (click)="ver.emit(proyecto().id)">
          Ver detalle
        </button>
      </div>
    </article>
  `,
})
export class ProyectoCardComponent {
  proyecto = input.required<Proyecto>();
  ver = output<number>();
}
