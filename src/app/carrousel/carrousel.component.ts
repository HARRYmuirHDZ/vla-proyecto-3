import { Component } from '@angular/core';
import { PaisService } from '../services/pais.service'; // Ajusta la ruta si es necesario


@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
})
export class TablaPaisesComponent {
  paises = [
    { id: '+1', nombre: 'Estados Unidos', capital: 'Washington, D.C.', moneda: 'Dólar estadounidense' },
    { id: '+34', nombre: 'España', capital: 'Madrid', moneda: 'Euro' },
    { id: '+49', nombre: 'Alemania', capital: 'Berlín', moneda: 'Euro' },
    { id: '+55', nombre: 'Brasil', capital: 'Brasilia', moneda: 'Real brasileño' },
    { id: '+44', nombre: 'Reino Unido', capital: 'Londres', moneda: 'Libra esterlina' },
    { id: '+91', nombre: 'India', capital: 'Nueva Delhi', moneda: 'Rupia india' },
    { id: '+81', nombre: 'Japón', capital: 'Tokio', moneda: 'Yen japonés' },
    { id: '+61', nombre: 'Australia', capital: 'Canberra', moneda: 'Dólar australiano' },
    { id: '+7', nombre: 'Rusia', capital: 'Moscú', moneda: 'Rublo ruso' },
    { id: '+86', nombre: 'China', capital: 'Pekín', moneda: 'Yuan renminbi' },
  ];
  
  filtro: string = '';

  filtrarPaises() {
    // Esta función puede ser usada para manejar la lógica de filtrado si se desea.
  }
}
