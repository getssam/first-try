import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tips'
})
export class TipsPipe implements PipeTransform {

  transform(value: any, limit: number[]): unknown {
    return value.substr(0,10) + '...';
  }

}
