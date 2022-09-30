import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
// this service was created just to keep track of whether a user has logged in or not
// the boolean variable isLoggedIn will keep track of that
  isLoggedIn: boolean = false;
  
  constructor() { }
}
