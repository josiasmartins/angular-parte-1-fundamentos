import { Photo } from './photo';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

const API = 'http://localhost:3000'

//quando estiver usando uma classe de service, vc usa o decorate injectable
// precisa tambem dizer o scope desse cara
@Injectable({ providedIn: 'root' })
export class PhotoService {

  // tornando uma propriedade da classe, sem o modificador de acesso do typescript
  // http: HttpClient

  // se colocar private, não só receber o parâmetro do constructor mas tambem torna-lo uma propriedade da classe
  constructor(private http: HttpClient) {}

  listfromUser(userName: string) {

    return  this.http
      .get<Photo[]>(API + '/flavio/photos');
      // não posso fazer o subscribe aqui; só chamo ele quando for buscar os dados
      // .subscribe(photos => this.photo = photos);
  }
}
// diferença entre string e String
// tipo literal           // tipos
const x = "jso";  const y = new String('jsoas');

