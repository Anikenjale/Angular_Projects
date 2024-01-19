import { ReturnStatement } from '@angular/compiler';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvellousChk',
  standalone: true
})
export class MarvellousChkPipe implements PipeTransform {

  transform(value:number,param:string): string 
  {
    
    if(param=="Prime")
    {
        if(value%1==0 && value%value==0 && value%2!=0)
        {
          return value +" is Prime number";
        }
        else
        {
          return value + " not Prime number";
        }
    }

    if(param=="Perfect")
    {
        var sum:number=1;
        for(var i:number=2;i*i<value;i++)
        {
          if(value%i==0)
          {
            if (i*i!=value)
            {
              sum=sum+i+(value/i);
            }
            else
            {
              sum =sum +i;
            }
          }
        }
        if(sum==value && value!=1)
        {
          return value +" is perfect number";
        }
        else
        {
          return value +" is not perfect number";
        }
    }

    if(param=="Even")
    {
      if(value%2==0)
      {
        return value +" is Even number";
      }
      else
      {
        return value +" is not Even number";
      }
    }

    if (param=="Odd")
    {
      if(value%2!=0)
      {
        return value +" is Odd number";
      }
      else 
      {
        return value +" is not Odd number";
      }
    }
    

     return "Enter valid number";

  }

}
