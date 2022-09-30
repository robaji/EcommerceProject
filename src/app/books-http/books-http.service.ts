import { Injectable } from '@angular/core';
import { BookModel } from './book.model';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CartBook } from './cart-book.model';
import { BoughtBooks } from './bought-books.model';

@Injectable({
  providedIn: 'root'
})
export class BooksHttpService {

  baseUrl: string = "http://localhost:3333/api/books";
  cartUrl: string = "http://localhost:3333/api/addToCart";
  currentCartUrl: string = "http://localhost:3333/api/viewcurrentcart";
  deleteCartUrl: string = "http://localhost:3333/api/removeCartItem";
  checkoutUrl: string = "http://localhost:3333/api/checkout";
  boughtBooksUrl: string = "http://localhost:3333/api/transactionhistory";

  cartDelete = {
    bookId: 0,
    accountId: 0
  }

  constructor(private httpClient: HttpClient) { }

  // R - Read
  getAllBooks(): Observable<BookModel[]>{
    return this.httpClient.get<BookModel[]>(this.baseUrl);
  }

  // C - Create
  addBook(cartBook: CartBook): Observable<CartBook>{
    return this.httpClient.post<CartBook>(this.cartUrl, cartBook);
  }

    // U - Update
    updateBook(updateBook: BookModel): Observable<BookModel>{
      return this.httpClient.put<BookModel>(this.baseUrl, updateBook);
    }
  
    // D - Delete
    deleteBook(bookId: number): Observable<void> {
      this.cartDelete = {
        bookId: bookId,
        accountId: parseInt(sessionStorage.getItem("accountId")!)
      }
      console.log(this.cartDelete);
      const headers = new HttpHeaders().set('content-type', 'application/json');
      return this.httpClient.post<void>(this.deleteCartUrl, 
        this.cartDelete, 
        { 'headers': headers });
    }
  
    getABook(bookId: number): Observable<BookModel>{
      return this.httpClient.get<BookModel>(this.baseUrl + "/" + bookId);
    }
    
    getCartBooks(): Observable<CartBook[]>{
      return this.httpClient.post<CartBook[]>(this.currentCartUrl, parseInt(sessionStorage.getItem("accountId")!));
    }

    checkout(): Observable<void> {
      return this.httpClient.post<void>(this.checkoutUrl, parseInt(sessionStorage.getItem("accountId")!));
    }

    getBoughtBooks(): Observable<BoughtBooks[]>{
      return this.httpClient.post<BoughtBooks[]>(this.boughtBooksUrl, parseInt(sessionStorage.getItem("accountId")!));
    }
    
  }