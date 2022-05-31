import { Component, OnInit } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interfaces';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {


  constructor() { }

  nuevoPersonaje: Personaje = {
    nombre: 'Maestro',
    poder: 2000
  }


}
