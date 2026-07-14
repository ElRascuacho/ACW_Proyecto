import { Injectable, computed, signal } from '@angular/core';

export interface ServicioCotizacion {
  key: string;
  nombre: string;
  precio: number;
  seleccionado: boolean;
}

@Injectable({ providedIn: 'root' })
export class CotizacionService {
  readonly servicios = signal<ServicioCotizacion[]>([
    { key: 'web', nombre: 'Sitio Web Profesional', precio: 350, seleccionado: false },
    { key: 'app', nombre: 'Aplicacion Movil', precio: 1200, seleccionado: false },
    { key: 'ecom', nombre: 'E-commerce Completo', precio: 1800, seleccionado: false },
    { key: 'seo', nombre: 'SEO y Optimizacion', precio: 250, seleccionado: false },
    { key: 'cloud', nombre: 'Infraestructura Cloud', precio: 150, seleccionado: false },
  ]);

  readonly paginas = signal(1);
  readonly semanas = signal(4);
  readonly tecnologia = signal('wordpress');

  readonly totalEstimado = computed(() => {
    const subtotal = this.servicios()
      .filter((s) => s.seleccionado)
      .reduce((acc, s) => acc + s.precio, 0);
    const pageFactor = 1 + (this.paginas() - 1) * 0.03;
    const weekFactor = 1 + (16 - this.semanas()) * 0.01;
    const techFactor = this.tecnologia() === 'custom' ? 1.5 : 1.0;
    return Math.round(subtotal * pageFactor * weekFactor * techFactor);
  });

  toggleServicio(key: string): void {
    this.servicios.update((list) =>
      list.map((s) => (s.key === key ? { ...s, seleccionado: !s.seleccionado } : s))
    );
  }
}
