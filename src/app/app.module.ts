import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { BooksDetailsComponent } from './books/books-details/books-details.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ButtonComponent } from './components/button/button.component';
import { AppRoutingModule } from './app.routing.module';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [
    AppComponent,
    BooksComponent,
    BooksDetailsComponent,
    HeaderComponent,
    FooterComponent,
    ButtonComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
