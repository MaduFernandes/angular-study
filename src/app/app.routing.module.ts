import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LivrosComponent } from './livros/livros.component';
import { LivrosDetailsComponent } from './livros/livros-details/livros-details.component';

const routes: Routes = [
  {
    path: '',
    component: LivrosComponent,
  },
  {
    path: 'details/:id',
    component: LivrosDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
