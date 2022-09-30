import { Component, OnInit } from '@angular/core';
import { AuthService } from '../users/auth.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }
  // lets create a method to access the AuthService isLoggedIn variable,
    // because we would want to manipulate teh hyperlinks accordingly
  
  // we can call this method from HeaderComponents template
  retrieveIsUserLoggedIn(): boolean{
    return this.authService.isLoggedIn;
  }



}
