import {
  Component,  ElementRef, EventEmitter, Input,  Output,
  ViewChild
} from '@angular/core';
import {ProductType} from '../../types/product.type';
import {Title} from '../title/title';


@Component({
  selector: 'product',
  standalone: false,
  templateUrl: './product.html',
  styleUrl: './product.scss',
  // encapsulation:ViewEncapsulation.None
})
export class Product {

  @Input() productChild:ProductType;
  // get product():ProductType {return this._product; }
  // set product(param:ProductType) {
  //   param.title=param.title.toUpperCase();
  // this._product=param;}
  //
  // private _product:ProductType;


  @Output() addToCardEvent: EventEmitter<string>= new EventEmitter<string>();

  @ViewChild(Title)

  private titleComponent!:Title;

  @ViewChild('elem')
  private elem!:ElementRef;  //ElementRef тип элемент ссылка

  constructor() {
    this.productChild={
      image: '',
        title: '',
        description:'',
      datetime:''
    }
  }
  // через экземпляр дочернего компонента
  addProductToCard(){
this.addToCardEvent.emit(this.titleComponent.toUpper());
  }
}

