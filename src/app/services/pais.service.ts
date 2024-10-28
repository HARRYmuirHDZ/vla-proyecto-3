import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  private paises = [
    { id: 1, nombre: 'Argentina', capital: 'Buenos Aires', moneda: 'Peso' },
    { id: 54, nombre: 'Brasil', capital: 'Brasilia', moneda: 'Real' },
    { id: 56, nombre: 'Chile', capital: 'Santiago', moneda: 'Peso' },
    { id: 124, nombre: 'Canadá', capital: 'Ottawa', moneda: 'Dólar canadiense' },
    { id: 76, nombre: 'Colombia', capital: 'Bogotá', moneda: 'Peso' },
    { id: 34, nombre: 'España', capital: 'Madrid', moneda: 'Euro' },
    { id: 840, nombre: 'Estados Unidos', capital: 'Washington D.C.', moneda: 'Dólar' },
    { id: 484, nombre: 'México', capital: 'Ciudad de México', moneda: 'Peso' },
    { id: 108, nombre: 'Perú', capital: 'Lima', moneda: 'Sol' },
    { id: 250, nombre: 'Venezuela', capital: 'Caracas', moneda: 'Bolívar' }
  ];

  getPaises() {
    return this.paises;
  }
}
