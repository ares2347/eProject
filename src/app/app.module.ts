import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import { HeaderComponent } from './components/Header/header';
import {FooterComponent} from './components/Footer/footer';
// import {CategoriesComponent} from "./page/Categories/categories";
import {Homepage} from "./page/HomePage/homepage";
import {Login} from "./page/User/Login/login";
import {Register} from "./page/User/Register/register";
import {Product} from "./page/Product/product";
import {Cart} from "./page/Cart/cart"
import {SearchboxComponent} from "./components/SearchBox/searchbox";
import {Categories} from "./page/Categories/categories";
import {CategoriesOverview} from "./page/CategoriesOverview/CategoriesOverview";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {SharedDataService} from "./services/sharedData";
const appRoutes: Routes = [
  {
    path: '', component: Homepage
  },{
    path: 'login', component: Login
  },{
    path: 'register', component:Register
  },{
    path: 'product/:pid', component: Product
  },{
    path: 'cart', component: Cart
  },{
    path:'categories', component: Categories
  },{
    path:'categories/:category', component: Categories
  },{
    path:'categories/overview', component: CategoriesOverview
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
    Login,
    Register,
    SearchboxComponent,
    Categories,
      CategoriesOverview
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