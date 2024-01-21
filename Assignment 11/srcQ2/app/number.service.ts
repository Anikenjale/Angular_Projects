import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService {

  constructor() { }

  public ChkPrime(No1:number):boolean
  {
    if(No1%1==0 && No1%No1==0 && No1%2!=0)
{
    return true;
}
else
{
    return false;
}
  }
}
