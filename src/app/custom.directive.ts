import { Directive, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector:'[custom]'
})
 export class CustomDirective{

  constructor(private el: ElementRef, private ren2: Renderer2){
    this.ren2.setStyle(this.el.nativeElement,'color','red');
    
  }
 }