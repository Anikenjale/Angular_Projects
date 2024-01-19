import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myMult',
  standalone: true
})
export class MyMultPipe implements PipeTransform {

  transform(value: number,value1:number): number {


    var sum:number=value*value1;
    return sum;
  }

}
