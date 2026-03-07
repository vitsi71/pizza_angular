import {
  Component,  ElementRef, EventEmitter, Input,  Output,
  ViewChild
} from '@angular/core';
import {ProductType} from '../../types/product.type';
import {Title} from '../title/title';
import {CartProduct} from '../../servises/cart-product';


@Component({
  selector: 'product',
  standalone: false,
  templateUrl: './product.html',
  styleUrl: './product.scss',
 providers:[CartProduct]
})
export class Product {

  @Input() productChild:ProductType;

  @Output() addToCardEvent: EventEmitter<string>= new EventEmitter<string>();

  @ViewChild(Title)

  private titleComponent!:Title;

  @ViewChild('elem')
  private elem!:ElementRef;  //ElementRef тип элемент ссылка

  constructor(public cartProductService:CartProduct) {
    this.productChild={
      image: '',
        title: '',
        description:'',
      datetime:''
    }
  }
  // через экземпляр дочернего компонента
  addProductToCard(){
    this.cartProductService.count++;
this.addToCardEvent.emit(this.titleComponent.toUpper());
  }
}

