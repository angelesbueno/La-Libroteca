import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stars'
})

// PIPE QUE DEVUELVE ARRAY DE BOOLEANS PARA PINTAR LAS ESTRELLAS DE LA PUNTUACIÓN DE LIBRO LEÍDO
export class StarsPipe implements PipeTransform {

  transform(stars: number): boolean[] {
    return Array(5)
        .fill(true, 0, stars)
        .fill(false, stars);
  }

}
