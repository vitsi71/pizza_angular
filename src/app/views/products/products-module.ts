import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing-module';
import {Products} from './products/products';
import {Product} from './product/product';
import {SharedModule} from '../../shared/shared-module';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    Products,
    Product
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    RouterModule,
    SharedModule
  ],
  exports:[
    ProductsRoutingModule,
  ]
})
export class ProductsModule { }
