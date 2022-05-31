import { Component, OnInit } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interfaces';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  listaPersonajes: Personaje[] = [
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
  ]

  constructor() { }

  nuevoPersonaje: Personaje = {
    nombre: 'Maestro',
    poder: 2000
  }

  agregarNuevoPersonaje(argumento: Personaje) {
    console.log(argumento)
    this.listaPersonajes.push(argumento);

  }
}
