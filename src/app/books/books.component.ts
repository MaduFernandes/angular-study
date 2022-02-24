import { Component, OnInit } from '@angular/core';

import { Books } from './books';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit {
  public nameButton = 'Detalhes';
  public typeButton = 'button';

  public book: Books[] = [
    {
      id: 1,
      name: '1986',
      descriptions:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      id: 2,
      name: 'Como se fosse a primeira vez.',
      descriptions:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      id: 3,
      name: 'Quem é você Alasca?',
      descriptions:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
