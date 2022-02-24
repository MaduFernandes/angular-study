import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books-details',
  templateUrl: './books-details.component.html',
})
export class BooksDetailsComponent implements OnInit {
  public name = 'Voltar';
  public typeButton = 'button';

  constructor() {}

  ngOnInit(): void {}
}
