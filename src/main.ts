import { defineCustomElements } from './assets/dist/loader/index.js';

import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

// Registrar los Web Components de Stencil
defineCustomElements();

// Iniciar Angular
bootstrapApplication(AppComponent)
  .catch(err => console.error(err));
