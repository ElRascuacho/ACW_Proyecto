import { Routes } from '@angular/router';
import { CotizadorPageComponent } from './pages/cotizador-page.component';
import { HomeComponent } from './pages/home.component';
import { ProyectoDetailComponent } from './pages/proyecto-detail.component';
import { ProyectoListComponent } from './pages/proyecto-list.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'proyectos', component: ProyectoListComponent },
  { path: 'proyectos/:id', component: ProyectoDetailComponent },
  { path: 'cotizador', component: CotizadorPageComponent },
  { path: '**', redirectTo: '' },
];
