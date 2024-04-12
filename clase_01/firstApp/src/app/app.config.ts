import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

/* Este archivo remplaza algunas cosas de app.module */
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};
