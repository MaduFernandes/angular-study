import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LivrosComponent } from './components/livros/livros.component';
import { LivrosDetailsComponent } from './components/livros/livros-details/livros-details.component';

const routes: Routes = [
  {
    path: '',
    component: LivrosComponent,
    children: [
      {
        path: 'details:id',
        component: LivrosDetailsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
