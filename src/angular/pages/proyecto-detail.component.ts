import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ProyectoService } from '../services/proyecto.service';
import type { Proyecto } from '../models/proyecto';

@Component({
  selector: 'app-proyecto-detail',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="section-padding">
      <div class="container">
        @if (proyecto()) {
          <div class="section-header">
            <p class="section-label">Detalle del proyecto</p>
            <h2 class="section-title">{{ proyecto()!.nombre }}</h2>
            <p class="section-desc">ID desde URL: {{ proyecto()!.id }}</p>
          </div>

          <div class="detail-card">
            <div class="contact-info-card" style="background:transparent;border:none;padding:0">
              <i class="fas" [class]="proyecto()!.icono"></i>
              <div>
                <h4>Categoria: {{ proyecto()!.categoria }}</h4>
                <p>{{ proyecto()!.descripcion }}</p>
                <div class="project-tags" style="margin-top:12px">
                  @for (tech of proyecto()!.tecnologias; track tech) {
                    <span>{{ tech }}</span>
                  }
                </div>
              </div>
            </div>
          </div>

          <div class="detail-actions">
            <button type="button" class="btn-secondary" (click)="volver()">Volver al listado</button>
            <a routerLink="/cotizador" class="btn-primary">Cotizar proyecto</a>
          </div>
        } @else {
          <p>Proyecto no encontrado.</p>
          <a routerLink="/proyectos" class="btn-secondary detail-actions">Volver</a>
        }
      </div>
    </section>
  `,
})
export class ProyectoDetailComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly proyectoService = inject(ProyectoService);
  readonly proyecto = signal<Proyecto | undefined>(undefined);

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.proyecto.set(this.proyectoService.getById(id));
  }

  volver(): void {
    this.router.navigate(['/proyectos']);
  }
}
