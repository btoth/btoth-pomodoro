import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'doubleDigit'
})
export class DoubleDigitPipe implements PipeTransform {
  transform(value: number, args?: any): string {
    if(value < 10)
      return '0' + Math.floor(value);
    return '' + Math.floor(value);
  }

}