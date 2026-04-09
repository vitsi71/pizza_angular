import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductCard} from './components/product-card/product-card';
import {Title} from './components/title/title';
import {WordUpperPipe} from './pipes/word-upper-pipe';
import CoolInput from './directives/cool-input';
import {IsChicken} from './directives/is-chicken';
import {ChickenDescriptionPipe} from './pipes/chicken-description-pipe';
import {ChickenProductsPipe} from './pipes/chicken-products-pipe';
import {RouterModule} from '@angular/router';
import { Popup } from './components/popup/popup';



@NgModule({
  declarations: [
    CoolInput,
    ProductCard,
    Title,
    IsChicken,
    ChickenDescriptionPipe,
    ChickenProductsPipe,
    WordUpperPipe,
    Popup
  ],
  exports: [
    CoolInput,
    ProductCard,
    Title,
    IsChicken,
    ChickenDescriptionPipe,
    ChickenProductsPipe,
    WordUpperPipe,
    Popup
  ],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class SharedModule { }
