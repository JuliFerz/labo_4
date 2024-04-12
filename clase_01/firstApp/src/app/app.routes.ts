import { Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { ErrorComponent } from './componentes/error/error.component';
import { EdadesComponent } from './componentes/edades/edades.component';

export const routes: Routes = [
  {
    path: 'edades',
    component: EdadesComponent,
    title: 'Edades'
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'Login'
  },
  {
    path: 'bienvenido',
    component: BienvenidoComponent,
    title: 'Welcome'
  },
  {
    path: 'error',
    component: ErrorComponent,
    title: 'Error'
  },
  {
    path: '**',
    redirectTo: 'login'
  }
]
