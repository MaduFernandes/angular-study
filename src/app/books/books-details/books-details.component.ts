import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from '../../books.service';

@Component({
  selector: 'app-books-details',
  templateUrl: './books-details.component.html',
})
export class BooksDetailsComponent implements OnInit {
  public nameButton = 'Voltar';
  public typeButton = 'button';

  public idRoute;
  constructor(
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.idRoute = this.route.snapshot.params.id;
  }
}
