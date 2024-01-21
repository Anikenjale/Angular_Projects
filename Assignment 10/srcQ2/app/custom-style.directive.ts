import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustomStyle]',
  standalone: true
})
export class CustomStyleDirective {

  constructor(private obj1:ElementRef) 
  { 
    this.obj1.nativeElement.style.background='yellow';
    this.obj1.nativeElement.style.color='Brown'
    this.obj1.nativeElement.style.font='bold';
  }

 

}
