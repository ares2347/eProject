import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import { HeaderComponent } from './components/Header/header';
import {FooterComponent} from './components/Footer/footer';
import {Homepage} from "./page/HomePage/homepage";
import {Product} from "./page/Product/product";
import {Cart} from "./page/Cart/cart"
import {SearchboxComponent} from "./components/SearchBox/searchbox";
import {Categories} from "./page/Categories/categories";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {SharedDataService} from "./services/sharedData";
import {Payment} from "./page/Payment/payment"
const appRoutes: Routes = [
  {
    path: '', component: Homepage
  },{
    path: 'product/:pid', component: Product
  },{
    path: 'cart', component: Cart
  },{
    path:'categories', component: Categories
  },{
    path:'categories/:category', component: Categories
  },{
    path:'payment', component: Payment
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
      Product,
    // CategoriesComponent,
    Homepage,
    Cart,
    Payment,
    SearchboxComponent,
    Categories,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [SharedDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }