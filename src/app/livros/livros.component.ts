import { Component, OnInit } from '@angular/core';

import { Livros } from './livros';

@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.scss'],
})
export class LivrosComponent implements OnInit {
  public nomeBotao = 'Detalhes';
  public typeBotao = 'button';

  public livros: Livros[] = [
    {
      id: 1,
      nome: '1986',
      descriptions:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      id: 2,
      nome: 'Como se fosse a primeira vez.',
      descriptions:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
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
