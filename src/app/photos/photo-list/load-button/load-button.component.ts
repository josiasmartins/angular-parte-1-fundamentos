import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ap-load-button',
  templateUrl: './load-button.component.html',
  styleUrls: ['./load-button.component.css']
})
export class LoadButtonComponent implements OnInit {

  // se quiser passar um parâmetro via declarativa do componete, use Input
  @Input() hasMore: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
