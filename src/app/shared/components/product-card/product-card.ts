import {
  Component,  ElementRef, EventEmitter, Input,  Output,
  ViewChild
} from '@angular/core';
import {Title} from '../title/title'
import {CartProduct} from '../../servises/cart-product';
import {ProductType} from '../../../../types/product.type';


@Component({
  selector: 'product-card',
  standalone: false,
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
 providers:[CartProduct]
})
export class ProductCard {

  @Input() productChild:ProductType;

  @Output() addToCardEvent: EventEmitter<string>= new EventEmitter<string>();

  @ViewChild(Title)

  private titleComponent!:Title;

  @ViewChild('elem')
  private elem!:ElementRef;  //ElementRef тип элемент ссылка

  constructor(public cartProductService:CartProduct) {
    this.productChild={
      id:0,
      image: '',
        title: '',
        description:'',
      datetime:''
    }
  }

  // можно убрать, так как прописали явное добавление через ссылку в html коде
//   // через экземпляр дочернего компонента
//   addProductToCard(){
//     this.cartProductService.count++;
// this.addToCardEvent.emit(this.titleComponent.toUpper());
//   }
}

