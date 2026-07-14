import { Injectable, computed, signal } from '@angular/core';
import { PROYECTOS_MOCK, Proyecto } from '../models/proyecto';

@Injectable({ providedIn: 'root' })
export class ProyectoService {
  private readonly proyectos = signal<Proyecto[]>(PROYECTOS_MOCK);
  readonly filtro = signal('');

  readonly proyectosFiltrados = computed(() => {
    const termino = this.filtro().toLowerCase().trim();
    if (!termino) return this.proyectos();
    return this.proyectos().filter(
      (p) =>
        p.nombre.toLowerCase().includes(termino) ||
        p.categoria.toLowerCase().includes(termino)
    );
  });

  readonly totalProyectos = computed(() => this.proyectosFiltrados().length);

  getById(id: number): Proyecto | undefined {
    return this.proyectos().find((p) => p.id === id);
  }

  setFiltro(valor: string): void {
    this.filtro.set(valor);
  }
}
