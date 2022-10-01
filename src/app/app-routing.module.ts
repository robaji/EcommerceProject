import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListBooksHttpComponent } from './books-http/list-books-http/list-books-http.component';
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
  {
    path: "list-books-http", 
    component: ListBooksHttpComponent,
    canActivate: [LoginGuard]
  },
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
