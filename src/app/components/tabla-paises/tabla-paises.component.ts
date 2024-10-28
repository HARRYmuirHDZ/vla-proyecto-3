import { Component } from '@angular/core';
import { Pais } from '../../models/Pais'; // Asegúrate de que la ruta sea correcta

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.scss']
})
export class TablaPaisesComponent {
  paises: Pais[] = [
    { id: 1, nombre: 'Estados Unidos', capital: 'Washington D.C.', moneda: 'USD' },
    { id: 44, nombre: 'Reino Unido', capital: 'Londres', moneda: 'GBP' },
    { id: 91, nombre: 'India', capital: 'Nueva Delhi', moneda: 'INR' },
    { id: 81, nombre: 'Japón', capital: 'Tokio', moneda: 'JPY' },
    { id: 49, nombre: 'Alemania', capital: 'Berlín', moneda: 'EUR' },
    { id: 86, nombre: 'China', capital: 'Pekín', moneda: 'CNY' },
    { id: 33, nombre: 'Francia', capital: 'París', moneda: 'EUR' },
    { id: 39, nombre: 'Italia', capital: 'Roma', moneda: 'EUR' },
    { id: 7, nombre: 'Rusia', capital: 'Moscú', moneda: 'RUB' },
    { id: 34, nombre: 'España', capital: 'Madrid', moneda: 'EUR' }
  ];

  terminoBusqueda: string = '';

  filtrarPaises() {
    const term = this.terminoBusqueda.toLowerCase();

    // Agrega los logs para depuración
    console.log('Término de búsqueda:', this.terminoBusqueda);
    const resultadoFiltrado = this.paises.filter(pais => 
      pais.nombre.toLowerCase().includes(term) ||
      pais.capital.toLowerCase().includes(term) ||
      pais.moneda.toLowerCase().includes(term) ||
      pais.id.toString().includes(term)
    );
    console.log('Países filtrados:', resultadoFiltrado);

    return resultadoFiltrado;
  }
}
