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
  showAddBookForm: boolean = false;
  allBooks: BookModel[] = [];

  newBook: BookModel = {
    bookId: 0,
    bookTitle: "",
    bookAuthor: "",
    // bookGenre: "",
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

  // here we are injecting BookService into ListBooksComponent through the constructor
  constructor(private bookHttpService: BooksHttpService, private router: Router) { }

  ngOnInit(): void {
    // here we will fetch all the books from the BooksService
    this.loadBooks();
  }

  loadBooks(): void {
    this.bookHttpService.getAllBooks().subscribe((response)=>{
      console.log(response);
      this.allBooks = response;
    });
  }

  // deleteBook(bookID: number){
  
  //   // call the deleteBook method of the service layer
  //   this.bookHttpService.deleteBook(bookID).subscribe((response)=>{
  //     console.log(response); // here response is void(empty) because this endpoint does not return anything
  //     // load the books again from the backend
  //     this.loadBooks();
  //   });

  // }

  editBook(bookID: number){
    // here we should navigate to EditBookComponent
    // to navigate we need a API called Router
    // so we have to inject Router through the constructor

    this.router.navigate(["edit-book-http", bookID]);
  }

  addBook(bookID: number, bookTitle: string, bookCost: number): void{

    this.cartBook = {
      orderId: 0,
      accountId: 1,
      bookCost: bookCost,
      quantity: 1,
      bookTitle: bookTitle,
      bookId: bookID
    }


    // here we have to call the addBook method of service layer
    this.bookHttpService.addBook(this.cartBook).subscribe((response)=>{
      // the response that we received here is not of much use
      console.log(response);
      // once the new book is added to the DB fetch all the books again from the backend application
      // this.loadBooks();
    })

    // // clear the book add form
    // this.newBook = {
    //   bookId: 0,
    //   bookTitle: "",
    //   bookAuthor: "",
    //   // bookGenre: "",
    //   bookCost: 0,
    //   bookImageUrl: ""
    // }

    // this hides the book add form
    this.showAddBookForm = false;
  }

  toggleBookForm(): void{ 
      this.showAddBookForm = !this.showAddBookForm;
  
  }

  logTittle(bTitle: any){
    console.log(bTitle);
  }
}
