import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {OrderRoutingModule} from './order-routing-module';
import {Order} from './order';
import {SharedModule} from '../../shared/shared-module';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import {FloatLabelModule} from 'primeng/floatlabel';


@NgModule({
  declarations: [
    Order,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    SharedModule,
    InputTextModule,
    FloatLabelModule,
    OrderRoutingModule
  ],
  exports: [
    OrderRoutingModule,
  ]
})
export class OrderModule {
}
