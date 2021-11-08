import { DarkOnHoverModule } from './../../shared/directives/dark-on-hover/dark-on-hover.module';
import { CardModule } from './../../shared/components/card/card.module';
import { PhotoModule } from './../photo/photo.module';
import { CommonModule } from '@angular/common';
import { FilterByDescriptionPipe } from './filter-by-description.pipe.';
import { LoadButtonComponent } from './load-button/load-button.component';
import { PhotosComponent } from './photos/photos.component';
import { NgModule } from '@angular/core';
import { PhotoListComponent } from './photo-list.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    PhotoListComponent,
    PhotosComponent,
    LoadButtonComponent,
    FilterByDescriptionPipe,
    SearchComponent,
  ],
  imports: [
    CommonModule,
    PhotoModule,
    CardModule,
    DarkOnHoverModule
  ]
})
export class PhotoListModule {}
