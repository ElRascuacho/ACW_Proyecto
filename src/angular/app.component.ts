import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <nav class="container module-nav">
      <a routerLink="/" routerLinkActive="active-page" [routerLinkActiveOptions]="{ exact: true }">Inicio</a>
      <a routerLink="/proyectos" routerLinkActive="active-page">Proyectos</a>
      <a routerLink="/cotizador" routerLinkActive="active-page">Cotizador</a>
    </nav>
    <router-outlet />
  `,
})
export class AppComponent {}
