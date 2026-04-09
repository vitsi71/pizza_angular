import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {CartService} from '../../shared/servises/cart';
import {ProductService} from '../../shared/servises/product';

@Component({
  selector: 'app-order',
  standalone: false,
  templateUrl: './order.html',
  styleUrl: './order.scss',
})
export class Order implements OnInit, OnDestroy {

  constructor(private cartService: CartService,
              private activatedRoute: ActivatedRoute,
              private productService: ProductService,
              private cd: ChangeDetectorRef) {
  }

  public formValues = {
    productTitle: '',
    address: '',
    phone: ''
  }

  private subscription: Subscription | null = null;
  private subscriptionOrder: Subscription | null = null;

  ngOnInit() {
    // общий сервис cartService с переменной product-card используется для передачи данных между страницами
    // if(  this.cartService.product-card){
    //   this.formValues.productTitle=this.cartService.product-card;
    // }

    //отслеживание через снимок URL параметров в момент загрузки без отслеживания изменений
    // const productParam=this.activatedRoute.snapshot.queryParamMap.get('product');
    //   if(productParam){
    //     this.formValues.productTitle=productParam;
    //   }


    //отслеживание через изменение URL параметров
    // в   this.subscription находится подписка, а не результат ее обработки
    this.subscription = this.activatedRoute.queryParams.subscribe((params) => {
      if (params['product']) {
        this.formValues.productTitle = params['product'];
      }
    })
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe() // отписаться от подписки
    this.subscriptionOrder?.unsubscribe() // отписаться от подписки
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

//ajax
    this.subscriptionOrder = this.productService.createOrder({
      product: this.formValues.productTitle,
      address: this.formValues.address, phone: this.formValues.phone
    })
      .subscribe(response => {
        if (response.success && !response.message) {
          this.formValues = {
            productTitle: '',
            address: '',
            phone: ''
          }
          alert('Спасибо за заказ');
          this.cd.detectChanges();
        } else {
          alert('Ошибка');
        }
      })
    // по идее нужен обработчик ошибок error:{...}
  }
}
