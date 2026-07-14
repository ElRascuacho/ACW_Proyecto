import 'zone.js';
import '@angular/compiler';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withHashLocation } from '@angular/router';
import { AppComponent } from './app.component';
import { routes } from './app.routes';

if (window.location.pathname.includes('cotizador.html') && !window.location.hash) {
  window.location.hash = '#/cotizador';
}

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes, withHashLocation())],
}).catch((err) => console.error(err));
