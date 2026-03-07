import { Component } from '@angular/core';
import {CartService} from '../../servises/cart';

@Component({
  selector: 'footer-component',
  standalone: false,
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  constructor(public cartService:CartService) {
  }

}
