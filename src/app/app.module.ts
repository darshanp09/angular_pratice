import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from "@angular/forms";

import { HttpClientModule } from '@angular/common/http'
import {ProductService} from "./products/product.service"
import { AppComponent } from './app.component';
import { ProductComponent } from './products/products.component';
import { ProductFilter } from './products/product-filter.pipes';
import { StarComponent } from './shared/star.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductFilter,
    StarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ProductService],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
