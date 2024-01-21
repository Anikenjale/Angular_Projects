import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCompFailure]',
  standalone: true
})
export class CompFailureDirective {

  constructor(private obj1:ElementRef) 
  { }

  @HostListener('mouseleave')onmouseleave()
   {
    this.obj1.nativeElement.style.color='red';
   }

}
