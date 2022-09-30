import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { DisplayComponent } from './display/display.component';
// import { ToggleComponent } from './toggle/toggle.component';
// import { CounterComponent } from './counter/counter.component';
import { FormsModule } from '@angular/forms';
// import { ListBooksComponent } from './books/list-books/list-books.component';
import { HeaderComponent } from './header/header.component';
// import { EditBookComponent } from './books/edit-book/edit-book.component';
import { ListBooksHttpComponent } from './books-http/list-books-http/list-books-http.component';
// import { EditBookHttpComponent } from './books-http/edit-book-http/edit-book-http.component';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './users/user/user.component';
import { LogoutComponent } from './users/logout/logout.component';
import { ProfileComponent } from './users/profile/profile.component';
import { ShoppingCartComponent } from './books-http/shopping-cart/shopping-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    // DisplayComponent,
    // // ToggleComponent,
    // CounterComponent,
    // // ListBooksComponent,
    HeaderComponent,
    // EditBookComponent,
    ListBooksHttpComponent,
    // EditBookHttpComponent,
    UserComponent,
    LogoutComponent,
    ProfileComponent,
    ShoppingCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
