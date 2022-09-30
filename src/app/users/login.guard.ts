import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      // here the canActivate function will return true if you want the gaurd to give access to the componenet
      // here the canActivate function will return false if you do not want the gaurd to give access to the componenet

      // this will be decided based on whether the user has logged in or not
      // and Authservice keeps track of whether a user has logged in or not
      // so lets inject authservice here in the constructor and return true if user has logged in 
            ///else return false if user has not logged in
      let giveAccess: boolean = false;
      if(this.authService.isLoggedIn){
        giveAccess = true;
      }else{
        giveAccess = false;
        // we can also navigate to login component here
        // we need Router API for that, so lets inject Router
        this.router.navigate(["login"]);
      }
    return giveAccess;
  }
  
}
