import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArithmeticService {

  constructor() { }

  public Add(No1:number,No2:number):number
  {
    var Sum:number=0;
    Sum= No1 + No2;
    return Sum;
  }

  public Sum(No1:number,No2:number):number
  {
    var Diff:number=0;
    Diff=No1-No2;
    return Diff;
  }
}
