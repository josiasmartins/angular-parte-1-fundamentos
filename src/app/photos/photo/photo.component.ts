import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html'
})
export class PhotoComponent {
  title = 'alurapic';

  //Input(): é um decorator. Recebe um parâmetro de fora. (inbound property pode receber esse valor)
  // ela aceita receber um valor, atraves de sua forma declarativa
  @Input() description = "";
  @Input()  url = ''
}
