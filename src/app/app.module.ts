import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ErrorsModule } from './errors/errors.module';
import { AppRoutingModule } from './app.routing.module';
import { PhotosModule } from './photos/photos.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // BrowserAngular: traz varios recursos para o navegador
    BrowserModule,
    PhotosModule,
    AppRoutingModule,
    // ErrorsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
