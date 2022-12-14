import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent  {
  heroes:string[] = ['Iron Man','SpiderMan','Hulk','Thor'];
  heroeeliminado : string = '' ;
  borrarHeroe():void{
    this.heroeeliminado = this.heroes.shift() || '';
  };
}
