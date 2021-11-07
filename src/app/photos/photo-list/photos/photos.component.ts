import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { Photo } from '../../photo/photo';

@Component({
  selector: 'ap-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnChanges {

  // para passar dado para esse componente, tem que ser inbount property
  @Input() photos: Photo[] = []
  rows: any[] = [];

  constructor() { }

  // o OnChanges: recebe todas as posiveis mudanças nas inboud property no componente
  ngOnChanges(changes: SimpleChanges) {
    if(changes.photos) {
      this.rows = this.groupColumns(this.photos);
    }
  }

  groupColumns(photos: Photo[]) {
    const newRows = [];

    for(let index = 0; index < photos.length; index+=3) {
      newRows.push(photos.slice(index, index + 3));
    }

    return newRows;
  }

}
