import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre:string = 'Guillermo';
  arreglo:number[] = [1,2,3,4,5,6,7,8,9,10];
  PI:number = Math.PI;
  a:number = 0.234;
  salario:number = 1234.5;
  heroe:object = {
    nombre: "Logan",
    clave: "Wolverine",
    edad: 500,
    direccion: {
      calle: "Primera",
      casa: 78
    }
  };
  promesa:object = new Promise((resolve, reject) => {
    setTimeout(function() {
      resolve("Llegó la data");
    }, 3500);
  });
  fecha:Date = new Date();
  nombre2:string = 'esTeBan ANDres mOlInA rIQUELMe';
  video:string = 'PZAlkYRbhMo';
  clave:string = 'Cl4v35ecr3t4';
  show:boolean = false;

  changeShow():void{
    this.show = !this.show;
  }
}
