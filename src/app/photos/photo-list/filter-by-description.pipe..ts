import { Photo } from './../photo/photo';
import { Pipe, PipeTransform } from '@angular/core';

// o nome tem que ser igual ao componente
@Pipe({name: 'filterByDescription'})
export class FilterByDescriptionPipe implements PipeTransform {

  // transform(): o primeiro parâmetro é sempre quem vc quer implementar uma transformação
  // o segundo, é um array com todos os parâmetros que voce passar
  transform(photos: Photo[], descriptionQuery: string) {
    descriptionQuery = descriptionQuery.trim().toLowerCase() // trim(): serve para remover todos os espaços
    if(descriptionQuery) {
      return photos.filter(photo => photo.description.toLowerCase().includes(descriptionQuery));
    } else {
      return photos;
    }
  }

}
