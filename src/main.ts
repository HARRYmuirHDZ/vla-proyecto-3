import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { AppComponent } from './app/app.component'; // Asegúrate de que esta ruta sea correcta

bootstrapApplication(AppComponent, {
  providers: [
    provideAnimations(),
    // otros proveedores si es necesario
  ],
}).catch(err => console.error(err));
