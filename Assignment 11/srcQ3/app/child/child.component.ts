import { Component } from '@angular/core';
import { NumberService } from '../number.service';
import { StringService } from '../string.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
  providers:[NumberService,StringService]
})
export class ChildComponent {

  public Result:any;
  public result:any;

  constructor(private obj1:NumberService,private obj2:StringService)
  {
      this.Result=this.obj1.ChkPrime(11);
      this.result=this.obj2.CountCapital("MarvellousInfosystems");
  }

}
