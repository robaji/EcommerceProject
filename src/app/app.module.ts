import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { ListBooksHttpComponent } from './books-http/list-books-http/list-books-http.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UserComponent } from './users/user/user.component';
import { LogoutComponent } from './users/logout/logout.component';
import { ProfileComponent } from './users/profile/profile.component';
import { ShoppingCartComponent } from './books-http/shopping-cart/shopping-cart.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListBooksHttpComponent,
    UserComponent,
    LogoutComponent,
    ProfileComponent,
    ShoppingCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
