import { outputAst } from '@angular/compiler';
import { Component, Input, OnInit, Output } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

 // @Input() personajes: Personaje[] = [];


  @Input () nuevo: Personaje  = {
    nombre: '',
    poder: 0
  }

 // @Output() nuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  //nuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();
  constructor(private dbzService: DbzService) {}

  agregar() {
    if(this.nuevo.nombre.trim().length==0) {
      return;
    }

    this.dbzService.agregarNuevoPersonaje(this.nuevo);

    // this.nuevoPersonaje.emit(this.nuevo);
    this.nuevo = {
        nombre: '',
        poder: 0
      }

    // console.log(this.nuevo);
    // this.personajes.push(this.nuevo);
    // this.nuevo = {
    //   nombre: '',
    //   poder: 0
    // }
    // console.log(this.nuevo);
  }


}
