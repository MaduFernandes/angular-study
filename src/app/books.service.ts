import { Injectable } from '@angular/core';
import { Books } from './books/books';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BOOKS } from './mock-books';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  private booksUrl = 'api/book-details';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getHeroes(): Observable<Books[]> {
    return of(BOOKS);
  }

  getHero(id: number): Observable<Books> {
    const url = `${this.booksUrl}/${id}`;
    return this.http.get<Books>(url);
  }
}
