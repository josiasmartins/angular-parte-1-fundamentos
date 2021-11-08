import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Photo } from './../photo/photo';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

   // title = 'alurapic';
  // description = "mar";
  // url = '.'

  // cada item do objeto array, é um objeto photo
  photos: Photo[] = [];
  filter: string = '';
  hasMore: boolean = true;
  currencyPage: number = 1;
  userName: string = '';

  // uma classe abstrata, não usar o operador new
  // deve importar o HttpClientModule no appModule e no componente para fazer requisição ajax

  constructor(
    private photoService: PhotoService,
    // atraves do activatedRoute, conseguimos ter acesso ao valor que foi passado para rota
    private activatedRoute: ActivatedRoute
    ) {

    // http, realiza uma requisição get
    // Observable: vai observar
    // o observaeble não vai nesse endereço, mas o subscribe() vai avisa

  }

  // qualquer codigo de inicialização, configuração faz no ngOnIniti()
  ngOnInit(): void {

    // snapshot: como se vosse uma fotografia que está acontecendo no momento
    // const userName = this.activatedRoute.snapshot.params.userName
    // this.photoService
    // .listfromUser(userName)
    // .subscribe(photos => {
    //     console.log(photos[0].userId),
    //     this.photos = photos
    //   });

    // esse snapshot data permite pegar o valor do resolver
    this.userName = this.activatedRoute.snapshot.params.userName;
    this.photos = this.activatedRoute.snapshot.data['photos'];

    // Observable só pode emitir e obter valores deles
    // Subject: pode emiter um valor através do next(); e escutar esse valor e escrever nesse sub para ter acesso ao valor
    // this.debounce.next('f');

  }

  // ciclo de vida do componente
  // ele destroi o componente quando for navegar para outra rota

  load() {
    // realiza um incremento
    this.photoService
      .listfromUserPaginated(this.userName, ++this.currencyPage)
      .subscribe(photos => {
        this.filter = '';
        this.photos = this.photos.concat(photos);
        if(!photos.length) this.hasMore = false;
      })
  }
}
