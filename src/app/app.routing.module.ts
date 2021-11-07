import { ErrorsComponent } from './errors/erros.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { NotFoundComponent} from '@angular/router/router'

import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { PhotoListResolver } from './photos/photo-list/photo-list.resolver';

const routes: Routes = [
  // parametro para o params
  // assim, conseguimos parametrizar as rotas
  { path: 'user/:userName',
  component: PhotoListComponent,
  // na propriedade resolve, ...o componente tem acesso a propriedade photos com resultado do listResolver
  resolve: {
    photos: PhotoListResolver
  }
},
  { path: 'p/add', component: PhotoFormComponent},
  // { path: '**', component: ErrorsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  // exports: [RouterModule]
})
export class AppRoutingModule {}
