import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators'

import { Photo } from './../photo/photo';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit, OnDestroy {

   // title = 'alurapic';
  // description = "mar";
  // url = '.'

  // cada item do objeto array, é um objeto photo
  photos: Photo[] = [];
  filter: string = '';
  debounce: Subject<string> = new Subject<string>()

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
    this.photos = this.activatedRoute.snapshot.data.photos

    // Observable só pode emitir e obter valores deles
    // Subject: pode emiter um valor através do next(); e escutar esse valor e escrever nesse sub para ter acesso ao valor
    // this.debounce.next('f');
    this.debounce
      .pipe(debounceTime(300))
      .subscribe(filter => this.filter = filter);
  }

  // ciclo de vida do componente
  // ele destroi o componente quando for navegar para outra rota
  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }
}
