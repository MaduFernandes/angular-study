import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LivrosComponent } from './components/livros/livros.component';
import { LivrosDetailsComponent } from './components/livros/livros-details/livros-details.component';
import { AppRoutingModule } from './app.routing.module';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [AppComponent, LivrosComponent, LivrosDetailsComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
