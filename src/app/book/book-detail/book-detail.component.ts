import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book.model';
import { BookService } from '../book-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  book: Book;
  constructor( public bookService: BookService, public route: ActivatedRoute) { }

  ngOnInit() {
    try {
      this.book = this.bookService.
// tslint:disable-next-line: radix
      getBookById(parseInt(this.route.snapshot.paramMap.get ('id')));

      if (!this.book) {
        throw Error ('Não foi encontrado o livro desejado');
      }
        } catch (err) {
        // ADD TRATATIVA DE ERRO
      }
    }
  }
