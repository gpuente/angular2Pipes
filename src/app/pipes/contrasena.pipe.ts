import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value:string, show:boolean = false):string {
    if(!show) return '*'.repeat(value.length);
    return value;
  }

}
