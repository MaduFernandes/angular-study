import { Injectable } from '@angular/core';
import { Books } from './books';
import { Observable, of } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { BOOKS } from './mock-books';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor() {}

  getBooks(): Observable<Books[]> {
    return of(BOOKS);
  }

  getBook(id): Observable<Books[]> {
    console.log(id);
    return id;
  }
}
