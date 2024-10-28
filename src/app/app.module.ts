import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'; // Importar FormsModule aquí

// Angular Material
import { MatRadioModule } from '@angular/material/radio';
import { AlertModule } from '@coreui/angular';

// CoreUI Angular
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from '@coreui/angular';
import { RouterModule } from '@angular/router'; // Importar RouterModule

// Importa los componentes
import { TablaPaisesComponent } from './components/tabla-paises/tabla-paises.component'; // Asegúrate de que la ruta sea correcta

@NgModule({
  declarations: [
    AppComponent,
    TablaPaisesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // Asegúrate de incluir FormsModule aquí
    MatRadioModule,
    AlertModule,
    BrowserAnimationsModule,
    CarouselModule,
    RouterModule.forRoot([]) // Configura las rutas aquí
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
