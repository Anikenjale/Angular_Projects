import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCompSuccess]',
  standalone: true
})
export class CompSuccessDirective {

  constructor(private obj1:ElementRef)
   { }

   @HostListener('mouseenter')onmouseenter()
   {
    this.obj1.nativeElement.style.color='green';
    this.obj1.nativeElement.style.background='gray'
   }

   

}
