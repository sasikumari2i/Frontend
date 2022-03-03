import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TheatresComponent } from './theatres.component';
import { MoviesResolver } from 'src/app/resolvers/movies.resolver';


const routes: Routes = [

  {
    path: ':movieTitle',
    component: TheatresComponent,
    resolve: { movies: MoviesResolver }
  }
];

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

  export class TheatresRoutingModule { 

  }
