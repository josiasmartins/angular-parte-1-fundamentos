import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoComponent } from './photo/photo.component';
import { PhotoFormComponent } from './photo-form/photo-form.component';
// esse módulo vai declarar todos os componentes que diz respito a fotos
@NgModule({
  // declarations entra tudo que o módulo tem
  declarations: [
    PhotoComponent,
    PhotoListComponent,
    PhotoFormComponent
  ],
  // para que ele seja visto no appModule, preciso exportar esse componente
  // exports: [ PhotoComponent],
  imports: [
    // O CommonModule tem as declaraçoes da diretivas.
    // O BrowserModule só pode ser declarado no componente principal
    // BrowserModule: além de trazer as diretivas, traz varias questões para minha aplicação angular funcione
    CommonModule,
    HttpClientModule,
   ]
})
export class PhotosModule {}
