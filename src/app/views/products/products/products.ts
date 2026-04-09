import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {catchError, map, of, retry, tap} from 'rxjs';
import {ProductService} from '../../../shared/servises/product';
import {CartService} from '../../../shared/servises/cart';
import {ProductType} from '../../../../types/product.type';


@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.html',
  styleUrl: './products.scss',
})
export class Products implements OnInit {
constructor(private productService:ProductService,
            private cartService:CartService, private router:Router,private http:HttpClient ,
            private cd: ChangeDetectorRef) {
}
  products: ProductType[] = [];
loading:boolean=false;

  ngOnInit() {
    // this.products=this.productService.getProducts();
    // this.http.get<{data:ProductType[]}>('http://testo logia.ru/pizzas?extraField=1')
    //   .pipe(
    //     tap((result)=>{
    //       console.log(result);}),
    //     map((result)=>(result.data)),
    //     // catchError(error =>{
    //     //  return of([]);
    //     // }),
    //     retry(3), // количество повторных запросов при ошибке
    //   )
    this.loading=true;
    this.productService.getProducts()
      .pipe(
      tap(()=>{
        this.loading=false;
      })
      )
      .subscribe(
        {next:(data) =>
    {
           this.products = data;
      this.cd.detectChanges();
    },
          error:(error) =>
    {
      this.router.navigate(['/']);
    },

  })
  }

  // можно убрать, так как прописали явное добавление через ссылку в html коде компонента product-card
  // public addToCart(title: string): void {
  //   // общий сервис cartService с переменной product-card используется для передачи данных между страницами
  //   this.cartService.product-card= title;
  //   // this.router.navigate(['/order']); // просто переходим на страницу
  //   // this.router.navigate(['/order',{product-card:title}]); // переходим на страницу с передачей параметров в URL(но имеем плохой формат с разделителем ; а не привычным ? )
  //   this.router.navigate(['/order'],{queryParams:{product-card:title}}); // переходим на страницу с передачей параметров в URL через query параметры (разделитель ? и & )
  //
  // }


}
