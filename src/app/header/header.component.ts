import { Component, OnInit } from '@angular/core';
import { AuthService } from '../users/auth.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  fortesting1 = "test-successful";
  fortesting2 = "test-successful";

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  retrieveIsUserLoggedIn(): boolean{
    return this.authService.isLoggedIn;
  }



}
