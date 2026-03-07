import {ChangeDetectorRef, Component, OnInit, signal} from '@angular/core';
import {ProductType} from './types/product.type';
import {ProductService} from './servises/product';
import {CartService} from './servises/cart';


@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss',
  // providers:[ProductService]
})
export class App implements OnInit {


  protected readonly title = signal('Pizza');
 products: ProductType[] = [];
  // public products: ProductType[] = [
  //   {
  //     image: 'pizza1.png',
  //     title: 'Мясная Делюкс',
  //     description: 'Пепперони, лук, бекон, томатная паста, колбаски, перец, грибы, соус чили,ананасы',
  //     datetime: '2022-12-31 15:00:00'
  //   },
  //   {
  //     image: '',//'pizza2.png',
  //     title: 'Морская Премиум',
  //     description: 'Перец, сыр, креветки, кальмары, мидии, лосось',
  //     datetime: '2022-12-30 05:00:00'
  //   },
  //   {
  //     image: 'pizza3.png',
  //     title: 'Бекон и Сосиски',
  //     description: 'Бекон, сыр, сосиски, ананас, томатная паста',
  //     datetime: '2022-12-01 05:30:00'
  //   },
  //   {
  //     image: 'pizza4.png',
  //     title: 'Куриная Делюкс',
  //     description: 'Курица, ананас, сыр Пепперони, соус для пиццы, томатная паста',
  //     datetime: '2021-12-12 17:40:10'
  //   },
  //   {
  //     image: 'pizza5.png',
  //     title: 'Барбекю Премиум',
  //     description: 'Свинина BBQ, соус Барбкею, сыр, курица, соус для пиццы, соус чили',
  //     datetime: '2022-01-03 05:00:00'
  //   },
  //   {
  //     image: 'pizza6.png',
  //     title: 'Пепперони Дабл',
  //     description: 'Пепперони, сыр, колбаса 2 видов: обжаренная и вареная',
  //     datetime: '2022-12-30 05:00:00'
  //   },
  //   {
  //     image: 'pizza7.png',
  //     title: 'Куриное трио',
  //     description: 'Жареная курица, Тушеная курица, Куриные наггетсы,перец, сыр, грибы, соус для пиццы',
  //     datetime: '2022-12-30 05:00:00'
  //   },
  //   {
  //     image: 'pizza8.png',
  //     title: 'Сырная',
  //     description: 'Сыр Джюгас, Сыр с плесенью, Сыр Моцарелла, Сыр секретный',
  //     datetime: '2022-12-30 05:00:00'
  //   },
  // ];

  public formValues = {
    productTitle: '',
    address: '',
    phone: ''
  }

  lateData: Promise<string> | null = null;

  constructor(public cartService:CartService, private productService:ProductService,
              private cdr: ChangeDetectorRef
              ) {
  }

  ngOnInit() {
    this.lateData = new Promise<string>(
      function (resolve) {
        setTimeout(() => {
          resolve('Hello');
        }, 3000);
      });
     this.products=this.productService.getProducts();
  }

  public scrollTo(target: HTMLElement): void {
    target.scrollIntoView({behavior: "smooth"});
  }

  public addToCart(title: string, target: HTMLElement): void {
    this.scrollTo(target);
    this.formValues.productTitle = title;
    this.cartService.count++;
    this.cdr.detectChanges();  // принудительно обновляем
  }


  public createOrder() {

    if (!this.formValues.productTitle) {
      alert('Заполните пиццу');
      return;
    }
    if (!this.formValues.address) {
      alert('Заполните адрес');
      return;
    }
    if (!this.formValues.phone) {
      alert('Заполните телефон');
      return;
    }
    alert('Спасибо за заказ');
    this.formValues = {
      productTitle: '',
      address: '',
      phone: ''
    }

  }
}
