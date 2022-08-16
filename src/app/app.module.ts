import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import { HeaderComponent } from './components/Header/header';
import {FooterComponent} from './components/Footer/footer';
import {CategoriesComponent} from "./components/Categories/categories";
import {Homepage} from "./page/HomePage/homepage";
import {Login} from "./page/User/Login/login";
import {Register} from "./page/User/Register/register";
import {Product} from "./page/Product/product";

const appRoutes: Routes = [
  {
    path: '', component: Homepage
  },{
    path: 'login', component: Login
  },{
    path: 'register', component:Register
  },{
    path: 'product', component: Product
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CategoriesComponent,
    Homepage
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
      RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }