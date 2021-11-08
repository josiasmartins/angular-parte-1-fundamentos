import { Directive, ElementRef, HostListener, Input, Renderer, Renderer2 } from '@angular/core';

@Directive({
  // para usar minha directive como atributo, deve colocar entre []
  selector: '[apDarkOnHover]'
})
export class DarkOnHoverDirective {

  @Input() brightness = '70%';

  // ElementRef: vou pegar o elemento do DOM ao qual essa diretiva
  //             esta adicionada e vou te dar uma refêrencia para que possa manipular
  constructor(
    private el: ElementRef,
    private render: Renderer2,
    private render2: Renderer
    ) {}

  // HostListener: posso passar  qual evento quero responder do elemento Host, ou seja qual elemento hospedeiro
  @HostListener('mouseover')
  dakOn() {
    // console.log('darkOn');
    // hender: manipular o elemento do DOM, sem precisar escrever diretamente
    // this.render.setElementStyle(this.el.nativeElement, 'filter', `brightness${this.brightness}`);
    this.render.setStyle(this.el.nativeElement, 'filter', `brightness${this.brightness}`)
  }

  // TODO: O renderer foi depreciado, achar um substituto depois
  @HostListener('mouseleave')
  darkOff() {
    // this.render2.setElementStyle()
    this.render.setStyle(this.el.nativeElement, 'filter', `brightness(100%)`);
    // this.render.setStyle()
    // console.log('darkOff');
  }
}
