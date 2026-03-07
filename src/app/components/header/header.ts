import { Component } from '@angular/core';
import {CartService} from '../../servises/cart';

@Component({
  selector: 'header-component',
  standalone: false,
  // templateUrl: './header.html',
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  constructor( public cartService:CartService) {
  }

}
