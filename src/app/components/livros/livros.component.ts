import { Component, OnInit } from '@angular/core';

import { Livros } from './livros';

@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.scss'],
})
export class LivrosComponent implements OnInit {
  livros: Livros[] = [
    {
      id: 1,
      nome: 'A menina que roubava livros.',
      descriptions:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    { id: 2, nome: 'Como se fosse a primeira vez.', descriptions: '' },
    {
      id: 3,
      nome: 'Quem é você Alasca?',
      descriptions:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
