import { ResourceLoader } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgModel, Validators } from '@angular/forms';
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
  errorRegisterMessage: string = "";

  user: LoginAccount = {
    accountId: 0,
    email: "",
    password: "",
    firstname: "",
    lastname: ""
  }

  registration: LoginAccount = {
    accountId: 0,
    email: "",
    password: "",
    firstname: "",
    lastname: ""
  }

  constructor(private userService: UserService, private router: Router, private authService: AuthService) { 

  }

  ngOnInit(): void {
  }

  login(){
    if((this.user.email.length == 0 ) || (this.user.password.length == 0)) {
      this.errorMessage = 'Email and Password must not be blank!';
    } else {
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
    
    )}}

    register(){
      if((this.registration.email.length == 0 ) || (this.registration.password.length == 0) || (this.registration.firstname.length == 0) || (this.registration.lastname.length == 0)) {
        this.errorRegisterMessage = "Registration fields must not be blank!"
      } else {
      this.userService.register(this.registration).subscribe(((response) => {
      location.reload();
      }))}
      
      }
     
}
