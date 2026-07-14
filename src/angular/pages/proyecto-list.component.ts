import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ProyectoCardComponent } from '../components/proyecto-card.component';
import { ProyectoFiltroComponent } from '../components/proyecto-filtro.component';
import { ProyectoService } from '../services/proyecto.service';

@Component({
  selector: 'app-proyecto-list',
  standalone: true,
  imports: [ProyectoCardComponent, ProyectoFiltroComponent],
  template: `
    <section class="section-padding" id="portafolio">
      <div class="container">
        <div class="section-header">
          <p class="section-label">Portafolio</p>
          <h2 class="section-title">Proyectos que <span class="highlight">transforman</span></h2>
          <p class="section-desc">Conoce las soluciones que hemos desarrollado en Manabi y Ecuador.</p>
        </div>

        <app-proyecto-filtro />

        @if (proyectoService.proyectosFiltrados().length === 0) {
          <p style="color:var(--text-muted);text-align:center">No hay proyectos con ese filtro.</p>
        } @else {
          <div class="portfolio-grid">
            @for (proyecto of proyectoService.proyectosFiltrados(); track proyecto.id) {
              <app-proyecto-card [proyecto]="proyecto" (ver)="irADetalle($event)" />
            }
          </div>
        }
      </div>
    </section>
  `,
})
export class ProyectoListComponent {
  readonly proyectoService = inject(ProyectoService);
  private readonly router = inject(Router);

  irADetalle(id: number): void {
    this.router.navigate(['/proyectos', id]);
  }
}
