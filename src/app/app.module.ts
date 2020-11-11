import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router"
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SingupComponent } from './singup/singup.component';
import { SigninComponent } from './signin/signin.component';
import { ProductsComponent } from './products/products.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NotFoundComponent } from './not-found/notfound.component';
import { BasketComponent } from './basket/basket.component';




const appRoutes: Routes = [
  {path: "", component:HomeComponent},
  {path: "signup", component:SingupComponent},
  {path: "signin", component:SigninComponent},
  {path: "products", component:ProductsComponent}, 
  {path: "contacts", component:ContactsComponent}, 
  {path: "basket", component:BasketComponent},
  {path: "**", component:NotFoundComponent}, 
]

@NgModule({
  declarations: [
    AppComponent, HomeComponent, SingupComponent, SigninComponent,ProductsComponent, ContactsComponent,NotFoundComponent,BasketComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
