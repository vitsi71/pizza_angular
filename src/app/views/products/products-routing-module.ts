import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Products} from './products/products';
import {Product} from './product/product';

const routes: Routes = [

  {path:'',component:Products},
  // {path:'products/:id',component:Product},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
