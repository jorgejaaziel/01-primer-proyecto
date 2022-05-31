import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  private _listaPersonajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 1000
    },
    {
      nombre: 'Vegeta',
      poder: 9000
    },
    {
      nombre: 'Piccolo',
      poder: 1000
    }
  ];

  get listaPersonajes() {
    return [...this._listaPersonajes]
  }

  agregarNuevoPersonaje(argumento: Personaje) {
    console.log(argumento)
    this._listaPersonajes.push(argumento);
  }

}
