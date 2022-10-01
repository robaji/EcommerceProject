import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BooksHttpService } from 'src/app/books-http/books-http.service';
import { BoughtBooks } from 'src/app/books-http/bought-books.model';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  accountId = 'Account ID: ' + sessionStorage.getItem('accountId');
  email = 'Email: ' + sessionStorage.getItem('email')
  firstName = 'First Name: ' + sessionStorage.getItem('firstname');
  lastName = 'Last Name: ' + sessionStorage.getItem('lastname');

  customerHello = "Hello, " + sessionStorage.getItem('firstname') + " " + sessionStorage.getItem('lastname') + "!";

  boughtBooks: BoughtBooks[] = [];

  constructor(private bookHttpService: BooksHttpService, private router: Router) { }

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks(): void{
    this.bookHttpService.getBoughtBooks().subscribe((response)=>{
      this.boughtBooks = response;
    });
  }

}
