import { Component, OnInit } from '@angular/core';

import { Livros } from './livros';

@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
})
export class LivrosComponent implements OnInit {
  livros: Livros[] = [
    { id: 1, nome: 'A menina que roubava livros.' },
    { id: 2, nome: 'Como se fosse a primeira vez.' },
    { id: 3, nome: 'Quem é você Alasca?' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
