import 'zone.js';
import '@angular/compiler';
import { createApplication } from '@angular/platform-browser';
import { createComponent } from '@angular/core';
import { PortfolioComponent } from './portfolio.component';

async function bootstrap() {
  const host = document.querySelector('app-portfolio');
  if (!host) return;

  const app = await createApplication();
  const componentRef = createComponent(PortfolioComponent, {
    hostElement: host,
    environmentInjector: app.injector,
  });
  app.attachView(componentRef.hostView);
}

bootstrap().catch((err) => console.error(err));
