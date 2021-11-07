import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Photo } from '../photo/photo';
import { PhotoService } from './../photo/photo.service';

@Injectable({
  providedIn: 'root'
})
/**  Resolve:
 *    - é uma interface.
      - Quando precisa resolver dados asincronos do
        componente, antes do componenete ser ativado
        , avaliando a rotas do componente.
**/
export class PhotoListResolver implements Resolve<Observable<Photo[]>> {

  constructor(private service: PhotoService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Photo[]> {
    const userName = route.params.userName;

    return this.service.listfromUserPaginated(userName, 1);
  }
}
