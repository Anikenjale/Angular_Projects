import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringService {

  constructor()
   { }

   public CountCapital(str:string):number
  {
      var upper:number=0;

      for(var i:number=0;i<str.length;i++)
      {
        if(str[i]>="A" && str[i]<="Z")
        {
          upper ++;
        }
      }
      return upper;
  }
}
