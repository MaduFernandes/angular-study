import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-livros-details',
  templateUrl: './livros-details.component.html',
})
export class LivrosDetailsComponent implements OnInit {
  public nomeBotao = 'Voltar';
  public typeBotao = 'button';

  constructor() {}

  ngOnInit(): void {}
}
