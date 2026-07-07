import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  template: `
    <section class="hero" id="hero">
      <div class="container hero-grid">
        <div class="hero-content animate-in">
          <div class="hero-badge"><i class="fas fa-bolt"></i> Manabí · Ecuador</div>
          <h1>Digitalizamos el <span class="highlight">comercio de Manabí</span></h1>
          <p>En Macally creamos soluciones web modernas que impulsan tu negocio al siguiente nivel. Transformamos ideas en experiencias digitales de alto impacto.</p>
          <div class="hero-actions">
            <a href="cotizador.html" class="btn-primary"><i class="fas fa-calculator"></i> Cotiza tu proyecto</a>
            <a href="#portafolio" class="btn-secondary"><i class="fas fa-arrow-right"></i> Ver proyectos</a>
          </div>
        </div>
        <div class="hero-visual animate-in" style="animation-delay:0.15s">
          <div class="hero-card">
            <div class="hero-card-grid">
              <div class="hero-card-item">
                <i class="fas fa-globe"></i>
                <h4>Web</h4>
                <p>Sitios corporativos</p>
              </div>
              <div class="hero-card-item">
                <i class="fas fa-mobile-alt"></i>
                <h4>App</h4>
                <p>Aplicaciones moviles</p>
              </div>
              <div class="hero-card-item">
                <i class="fas fa-shopping-cart"></i>
                <h4>E‑commerce</h4>
                <p>Tiendas online</p>
              </div>
              <div class="hero-card-item">
                <i class="fas fa-cloud"></i>
                <h4>Cloud</h4>
                <p>Infraestructura</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-padding" id="portafolio">
      <div class="container">
        <div class="section-header">
          <p class="section-label">Portafolio</p>
          <h2 class="section-title">Proyectos que <span class="highlight">transforman</span></h2>
          <p class="section-desc">Conoce algunas de las soluciones que hemos desarrollado para nuestros clientes en Manabí y todo Ecuador.</p>
        </div>
        <div class="portfolio-grid">
          <article class="project-card">
            <div class="project-img project-img-icon"><i class="fas fa-store"></i></div>
            <div class="project-body">
              <h3>MarketGo · E-commerce</h3>
              <p>Tienda online con carrito de compras, pasarela de pago y panel administrador.</p>
              <div class="project-tags">
                <span>React</span><span>Node.js</span><span>Stripe</span><span>MongoDB</span>
              </div>
            </div>
          </article>
          <article class="project-card">
            <div class="project-img project-img-icon"><i class="fas fa-clinic-medical"></i></div>
            <div class="project-body">
              <h3>HealthApp · Gestion Medica</h3>
              <p>Sistema de agendamiento de citas e historias clinicas para consultorios locales.</p>
              <div class="project-tags">
                <span>Angular</span><span>Firebase</span><span>TypeScript</span>
              </div>
            </div>
          </article>
          <article class="project-card">
            <div class="project-img project-img-icon"><i class="fas fa-utensils"></i></div>
            <div class="project-body">
              <h3>RestoApp · Delivery</h3>
              <p>App de pedidos con seguimiento en tiempo real y notificaciones push.</p>
              <div class="project-tags">
                <span>Flutter</span><span>Dart</span><span>Google Maps</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  `,
})
export class PortfolioComponent {}
