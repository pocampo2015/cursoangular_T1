import { Component } from '@angular/core';
@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'

})


export class Heroe {
  nombre: string = 'Iron Man';
  edad: number = 45;
  get nombreCapitalizado():string{
    return this.nombre.toUpperCase();
  };
  obternerNombre():string{
    return `${this.nombre} - ${this.edad}`;
  };
  cambiarNombre():void{
    this.nombre='SpiderMan';
  };
  cambiarEdad(newedad:number):void{
    this.edad=newedad;
  };
};