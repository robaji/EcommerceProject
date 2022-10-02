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

  validate(user: LoginAccount): Observable<LoginAccount>{     
       return this.httpClient.post<LoginAccount>(this.loginUrl, user);
    }
  
  register(registration: LoginAccount): Observable<void>{
      return this.httpClient.post<void>(this.registerUrl, registration);
  }
  }

