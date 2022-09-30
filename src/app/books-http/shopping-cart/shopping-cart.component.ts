import { Component, OnInit } from '@angular/core';
import { CartBook } from '../cart-book.model';
import { Router } from '@angular/router';
import { BooksHttpService } from '../books-http.service';
import { CheckboxControlValueAccessor } from '@angular/forms';



@Component({
  selector: 'shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  cartBooks: CartBook[] = [];

  customerHello = "Hello, " + sessionStorage.getItem('firstname') + " " + sessionStorage.getItem('lastname') + "!";

  constructor(private bookHttpService: BooksHttpService, private router: Router) { }

  ngOnInit(): void{
    this.loadBooks();
  }

  loadBooks(): void{
    this.bookHttpService.getCartBooks().subscribe((response)=>{
      console.log(response);
      this.cartBooks = response;
    });
  }

  deleteBook(bookId: number): void {
    this.bookHttpService.deleteBook(bookId).subscribe((response)=>{
    this.loadBooks();
  });
}

  checkout(): void {
    this.bookHttpService.checkout().subscribe((response)=>{
    this.loadBooks();
  });
}
}
