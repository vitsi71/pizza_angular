import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import {FormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import {CoreModule} from './core/core-module';
import {SharedModule} from './shared/shared-module';
import {Header} from './shared/layout/header/header';
import {Footer} from './shared/layout/footer/footer';
import {Layout} from './views/layout';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    App,
    Header,
    Footer,
    Layout

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
    AppRoutingModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule
    // NgbModule,
  ],
  providers: [],
  bootstrap: [App]
})
export class AppModule { }
