import { Component, Input, OnInit } from '@angular/core';
import { Photo } from '../../photo/photo';

@Component({
  selector: 'ap-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  // para passar dado para esse componente, tem que ser inbount property
  @Input() photos: Photo[] = []

  constructor() { }

  ngOnInit() {
  }

}
