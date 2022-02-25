import { Component, OnInit } from '@angular/core';
import { BooksService } from './books.service';

import { Books } from './books';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit {
  public nameButton = 'Detalhes';
  public typeButton = 'button';

  public books: Books[];

  constructor(private booksService: BooksService) {}

  ngOnInit(): void {
    this.getAllBooks();
  }

  getAllBooks() {
    return this.booksService
      .getBooks()
      .subscribe((book) => (this.books = book));
  }
}
