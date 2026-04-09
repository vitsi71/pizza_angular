import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing-module';
import {About} from './about/about';
import {Main} from './main/main';
import {SharedModule} from '../../shared/shared-module';
import {RouterModule} from '@angular/router';
import {NgbModal, NgbModalModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    About,
    Main,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    RouterModule,
    NgbModalModule,
    // NgbModal,
    SharedModule
  ],
  exports:[
    HomeRoutingModule,
    ]
})
export class HomeModule { }
