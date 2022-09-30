import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { CounterComponent } from './counter/counter.component';
// import { DisplayComponent } from './display/display.component';
// import { ListBooksComponent } from './books/list-books/list-books.component';
// import { ToggleComponent } from './toggle/toggle.component';
// import { EditBookComponent } from './books/edit-book/edit-book.component';
import { ListBooksHttpComponent } from './books-http/list-books-http/list-books-http.component';
// import { EditBookHttpComponent } from './books-http/edit-book-http/edit-book-http.component';
import { UserComponent } from './users/user/user.component';
import { LogoutComponent } from './users/logout/logout.component';
import { LoginGuard } from './users/login.guard';
import { ProfileComponent } from './users/profile/profile.component';
import { ShoppingCartComponent } from './books-http/shopping-cart/shopping-cart.component';

const routes: Routes = [
  {
    path: "login", 
    component: UserComponent
  },
  {
    path: "logout", 
    component: LogoutComponent
  },
  // {
  //   path: "display", 
  //   component: DisplayComponent,
  //   canActivate: [LoginGuard]
  // },
  // {
  //   path: "counter", 
  //   component: CounterComponent,
  //   canActivate: [LoginGuard]
  // },
  // {
  //   path: "toggle", 
  //   component: ToggleComponent,
  //   canActivate: [LoginGuard]
  // },
  // {
  //   path: "list-books", 
  //   component: ListBooksComponent,
  //   canActivate: [LoginGuard]
  // },
  // {
  //   path: "edit-book/:bid", 
  //   component: EditBookComponent,
  //   canActivate: [LoginGuard]
  // },
  {
    path: "list-books-http", 
    component: ListBooksHttpComponent,
    canActivate: [LoginGuard]
  },
  // {
  //   path: "edit-book-http/:bid", 
  //   component: EditBookHttpComponent,
  //   canActivate: [LoginGuard]
  // },
  {
    path: "profile",
    component: ProfileComponent,
    canActivate: [LoginGuard]
  },
  {
    path: "shopping-cart",
    component: ShoppingCartComponent,
    canActivate: [LoginGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
