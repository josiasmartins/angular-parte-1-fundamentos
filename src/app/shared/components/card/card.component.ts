import { NgComponentOutlet } from '@angular/common';
import { Component, Input, NgModule } from '@angular/core';

@Component({
  selector: 'ap-card',
  templateUrl: './card.component.html'
})
export class CardComponent {

  @Input() title: string = ''

}

