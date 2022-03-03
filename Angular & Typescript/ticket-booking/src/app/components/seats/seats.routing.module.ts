import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeatsComponent } from './seats.component';
import { MoviesResolver } from 'src/app/resolvers/movies.resolver';

const routes: Routes = [

  {
    path: ':movieTitle/:name/:timing',
    component: SeatsComponent,
    resolve: { movies: MoviesResolver }
  }
];

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

  export class SeatsRoutingModule { }
