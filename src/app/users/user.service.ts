import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModel } from './user.model';
import { Observable } from 'rxjs';
import { BookModel } from '../books-http/book.model';
import { LoginAccount } from '../books-http/login-account.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  loginUrl: string = "http://localhost:3333/api/login";
  registerUrl: string = "http://localhost:3333/api/";

  constructor(private httpClient: HttpClient) { }

  // the incomming UserModel will have only the userName and userPassword
  // the outgoing/return UserModel will have all the information of that user who has logged in if it was a successfull login
  validate(user: LoginAccount): Observable<LoginAccount>{     
       return this.httpClient.post<LoginAccount>(this.loginUrl, user);
    }
  
  register(user: LoginAccount): Observable<void>{
      return this.httpClient.post<void>(this.registerUrl, user);
  }
  }

