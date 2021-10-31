import { PhotoService } from './photos/photo/photo.service';
import { Component, OnInit } from '@angular/core';

// decorate: é uma sintaxe especial que pode colocar uma meta informação sobre uma determinada classe
// meta-informação: crio instancia dela classe, crio um objeto
// selector: permite usar componente em template
// templateUrl: diz qual apresentação desse componente
// styleUrls: fala onde o css desse componente

// Date Binding: associal de dados. Faz uma asscociação com uma fonte de dados
// expression {{title}}

// um modulo é uma maneira de agrupar, inicialmente, componentes afins
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // title = 'alurapic';
  // description = "mar";
  // url = '.'

  // cada item do objeto array, é um objeto photo
  photos: Object = [];
  // uma classe abstrata, não usar o operador new
  // deve importar o HttpClientModule no appModule e no componente para fazer requisição ajax

  constructor(private photoService: PhotoService) {

    // http, realiza uma requisição get
    // Observable: vai observar
    // o observaeble não vai nesse endereço, mas o subscribe() vai avisar
    // http
    //   .get<Object[]>('http://localhost:3000/flavio/photos')
    //   // se der certo, ele vai capturar os dados numa function
    //   .subscribe(
    //     photos => this.photos = photos,
    //     // tratamento de erro
    //     err => console.log(err)
    //     );


  }

  // qualquer codigo de inicialização, configuração faz no ngOnIniti()
  ngOnInit(): void {

    this.photoService
    .listfromUser('flavio')
    .subscribe(photos => {
        console.log(photos[0].userId),
        this.photos = photos
      });
  }
}
