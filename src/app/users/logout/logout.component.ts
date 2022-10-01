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
    this.authService.isLoggedIn = false;
    sessionStorage.removeItem('accountId');
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('firstname');
    sessionStorage.removeItem('lastname');

   
    this.router.navigate(["login"]);
  }

}
