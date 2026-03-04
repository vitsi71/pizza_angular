import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import {FormsModule} from '@angular/forms';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { Product } from './components/product/product';
import { Title } from './components/title/title';
import { CoolInput } from './directives/cool-input';

@NgModule({
  declarations: [
    App,
    Header,
    Footer,
    Product,
    Title,
    CoolInput
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideClientHydration(withEventReplay()),
  ],
  bootstrap: [App,Header,Footer]
})
export class AppModule { }
