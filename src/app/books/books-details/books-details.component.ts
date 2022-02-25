import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { BooksService } from '../books.service';

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
    private router: Router,
    private booksService: BooksService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.booksService.getBook(params.get('id')!)
      )
    );
  }
}
