import { ResourceLoader } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginAccount } from 'src/app/books-http/login-account.model';
import { AuthService } from '../auth.service';
import { UserModel } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  errorMessage: string = "";
  user: LoginAccount = {
    accountId: 0,
    email: "",
    password: "",
    firstname: "",
    lastname: ""
  }
  constructor(private userService: UserService, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  login(){
   
    this.userService.validate(this.user).subscribe(((response) => {
    if(response.accountId != 0){

        this.authService.isLoggedIn = true;
        sessionStorage.setItem('accountId', JSON.stringify(response.accountId));
        sessionStorage.setItem('email', response.email);
        sessionStorage.setItem('firstname', response.firstname);
        sessionStorage.setItem('lastname', response.lastname);

       this.router.navigate(["list-books-http"]);
    }else{
      this.errorMessage = 'Invalid username/password';
    }})
    
    )}

    register(){
      if((this.user.email = "") || (this.user.password = "") || (this.user.firstname = "") || (this.user.lastname = "")) {
        this.errorMessage = "Registration fields must not be blank!"
      } else {
      this.userService.register(this.user).subscribe(((response) => {
      location.reload();
      }))}
      
      }
     
}
