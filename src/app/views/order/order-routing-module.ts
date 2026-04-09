import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Order} from './order';
import {AuthGuard} from '../../core/auth/auth-guard';

const routes: Routes = [
  {path:'',component:Order, canActivate:[AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
