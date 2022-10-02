import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookModel } from '../book.model';
import { BooksHttpService } from '../books-http.service';
import { CartBook } from '../cart-book.model';

@Component({
  selector: 'list-books-http',
  templateUrl: './list-books-http.component.html',
  styleUrls: ['./list-books-http.component.css']
})
export class ListBooksHttpComponent implements OnInit {
  allBooks: BookModel[] = [];

  newBook: BookModel = {
    bookId: 0,
    bookTitle: "",
    bookAuthor: "",
    bookCost: 0,
    bookImageUrl: ""
  }

  cartBook: CartBook = {
    orderId: 0,
    accountId: 0,
    bookCost: 0,
    quantity: 1,
    bookTitle: "",
    bookId: 0
  }
  customerHello = "Hello, " + sessionStorage.getItem('firstname') + " " + sessionStorage.getItem('lastname') + "!";
  constructor(private bookHttpService: BooksHttpService, private router: Router) { }

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks(): void {
    this.bookHttpService.getAllBooks().subscribe((response)=>{
      this.allBooks = response;
    });
  }

  editBook(bookID: number){
  
    this.router.navigate(["edit-book-http", bookID]);
  }

  addBook(bookID: number, bookTitle: string, bookCost: number): void{

    this.cartBook = {
      orderId: 0,
      accountId: parseInt(sessionStorage.getItem("accountId")!),
      bookCost: bookCost,
      quantity: 1,
      bookTitle: bookTitle,
      bookId: bookID
    }


    this.bookHttpService.addBook(this.cartBook).subscribe((response)=>{
    })

    
  }

}
