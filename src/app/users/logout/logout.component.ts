import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    // here set the isLoggedIn of AuthService to false bacause the user is logging out
    // we need th inject AuthService
    this.authService.isLoggedIn = false;

    // next we can navigate to login
    // we need Router api to navigate, so lets inject it
    this.router.navigate(["login"]);
  }

}
