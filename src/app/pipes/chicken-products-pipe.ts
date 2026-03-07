import { Pipe, PipeTransform } from '@angular/core';
import {ProductType} from '../types/product.type';

@Pipe({
  name: 'chickenProducts',
  standalone: false,
})
export class ChickenProductsPipe implements PipeTransform {

  transform(value: ProductType[]): ProductType[] {
    return value.filter(item=>item.title.toLowerCase().includes('кур'));
  }

}
