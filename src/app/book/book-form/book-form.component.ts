import { Component, OnInit } from '@angular/core';
// tslint:disable-next-line: import-spacing
import { Book } from  '../models/book.model';
import { NgForm } from '@angular/forms';
import { BookService } from '../book-service.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {

  book: Book;

  ngOnInit() {
    this.book = new Book ();
  }

  constructor (public bookService: BookService) {}

  public onSubmit(bookForm: NgForm) {
    this.bookService.addBook(bookForm.value);
    bookForm.reset();
  }

}
