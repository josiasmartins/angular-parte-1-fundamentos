import { Component } from '@angular/core';

// decorate: é uma sintaxe especial que pode colocar uma meta informação sobre uma determinada classe
// meta-informação: crio instancia dela classe, crio um objeto
// selector: permite usar componente em template
// templateUrl: diz qual apresentação desse componente
// styleUrls: fala onde o css desse componente

// Date Binding: associal de dados. Faz uma asscociação com uma fonte de dados
// expression {{title}}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'alurapic';
  description = "mar";
  url = '../assets/6457dc8f063f284fe17e519dc28b5437.jpg'
}
