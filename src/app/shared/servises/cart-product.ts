import { Injectable } from '@angular/core';
import {CartService} from './cart';

@Injectable()
export class CartProduct {
  count:number=0;
  constructor(private cartService:CartService) {
  }

  // gerCommonCount(){
  //   // return this.count+ '/'+ this.cartService.count;
  //   return this.count+ '/'+ this.cartService.count();
  // }
}
