import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {ProductType} from '../../../../types/product.type';
import {ProductService} from '../../../shared/servises/product';

@Component({
  selector: 'app-product',
  standalone: false,
  templateUrl: './product.html',
  styleUrl: './product.scss',
})
export class Product implements OnInit,OnDestroy {

  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService,
             private router:Router,private cd:ChangeDetectorRef) {
  }
  private subscription: Subscription | null = null;
  private subscriptionProduct: Subscription | null = null;

  product: ProductType = {
    id: 0,
    image: '',
    title: '',
    description: '',
    datetime: ''
  }
  ngOnDestroy() {
    this.subscription?.unsubscribe() // отписаться от подписки
    this.subscriptionProduct?.unsubscribe() // отписаться от подписки
  }

  ngOnInit() {

    // отслеживание через изменение URL параметров
    this.subscription=this.activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        // const product= this.productService.getProduct(+params['id']);
        this.subscriptionProduct = this.productService.getProduct(+params['id'])
          .subscribe(
            {next:(data) =>
              {
                this.product = data;
                this.cd.detectChanges();
              },
              error:(error) =>
              {
                this.router.navigate(['/']);
              },

            })
      }
    })

  }

}
