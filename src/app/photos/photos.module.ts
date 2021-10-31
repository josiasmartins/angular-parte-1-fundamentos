import { NgModule } from '@angular/core';

import { PhotoComponent } from './photo/photo.component';
// esse módulo vai declarar todos os componentes que diz respito a fotos
@NgModule({
  // declarations entra tudo que o módulo tem
  declarations: [PhotoComponent],
  // para que ele seja visto no appModule, preciso exportar esse componente
  exports: [ PhotoComponent]
})
export class PhotosModule {}
