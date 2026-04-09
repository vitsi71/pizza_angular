// import { Injectable } from '@angular/core';
//
// @Injectable({
//   providedIn: 'root',
// })
// export class CartService {
//  count:number=0;
//   constructor() {
//
//  }
// }

import {Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  // count=signal(0);
  // increment() {
  //   this.count.update(v => v + 1);
  // }

  product:string='';
  constructor() {

  }
}
