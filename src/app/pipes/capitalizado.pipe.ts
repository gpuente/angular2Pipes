import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'capitalizado'})
export class CapitalizadoPipe implements PipeTransform {
    transform(value: string, first:boolean = false): string {
        let texto:string = value.toLowerCase();
        let palabras:string[] = texto.split(" ");
        if(first){
            palabras[0] = palabras[0][0].toUpperCase() + palabras[0].substr(1);
        }else{
            for(let i in palabras){
                palabras[i] = palabras[i][0].toUpperCase() + palabras[i].substr(1);
            }
        }
        return palabras.join(" ");;
    }
}