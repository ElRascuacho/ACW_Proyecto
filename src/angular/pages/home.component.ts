import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="hero" id="hero">
      <div class="container hero-grid">
        <div class="hero-content animate-in">
          <div class="hero-badge"><i class="fas fa-bolt"></i> Manabi · Ecuador</div>
          <h1>Digitalizamos el <span class="highlight">comercio de Manabi</span></h1>
          <p>En Macally creamos soluciones web modernas que impulsan tu negocio al siguiente nivel.</p>
          <div class="hero-actions">
            <a routerLink="/cotizador" class="btn-primary"><i class="fas fa-calculator"></i> Cotiza tu proyecto</a>
            <a routerLink="/proyectos" class="btn-secondary"><i class="fas fa-arrow-right"></i> Ver proyectos</a>
          </div>
        </div>
        <div class="hero-visual animate-in" style="animation-delay:0.15s">
          <div class="hero-card">
            <div class="hero-card-grid">
              <div class="hero-card-item"><i class="fas fa-globe"></i><h4>Web</h4><p>Sitios corporativos</p></div>
              <div class="hero-card-item"><i class="fas fa-mobile-alt"></i><h4>App</h4><p>Aplicaciones moviles</p></div>
              <div class="hero-card-item"><i class="fas fa-shopping-cart"></i><h4>E-commerce</h4><p>Tiendas online</p></div>
              <div class="hero-card-item"><i class="fas fa-cloud"></i><h4>Cloud</h4><p>Infraestructura</p></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class HomeComponent {}
