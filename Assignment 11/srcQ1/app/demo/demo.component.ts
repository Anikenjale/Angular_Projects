import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArithmeticService } from '../arithmetic.service';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css',
  providers:[ArithmeticService]
})
export class DemoComponent {

  public Addition:number;
  public Subtraction:number;

  constructor(private obj:ArithmeticService)
  {
    this.Addition=this.obj.Add(54,45);
    this.Subtraction=this.obj.Sum(25,5);
  }

}
