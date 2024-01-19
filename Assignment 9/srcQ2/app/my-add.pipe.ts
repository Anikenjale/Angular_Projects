import { Pipe, PipeTransform } from '@angular/core';
import { __param } from 'tslib';

@Pipe({
  name: 'myAdd',
  standalone: true
})
export class MyAddPipe implements PipeTransform {

  transform(value:number,value1:number): number {
    var sum:number=value+value1;
    return sum;
  }

}
