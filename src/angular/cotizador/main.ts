import 'zone.js';
import '@angular/compiler';
import { createApplication } from '@angular/platform-browser';
import { createComponent } from '@angular/core';
import { CotizadorComponent } from './cotizador.component';

async function bootstrap() {
  const host = document.querySelector('app-cotizador');
  if (!host) return;

  const app = await createApplication();
  const componentRef = createComponent(CotizadorComponent, {
    hostElement: host,
    environmentInjector: app.injector,
  });
  app.attachView(componentRef.hostView);
}

bootstrap().catch((err) => console.error(err));
