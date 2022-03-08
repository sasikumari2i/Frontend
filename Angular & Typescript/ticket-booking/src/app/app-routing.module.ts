import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MoviesResolver } from './resolvers/movies.resolver';

const appRoutes: Routes = [
  {
    path: '', 
    component : HomeComponent,
    //resolve: { movies: MoviesResolver }
  },
  {
    path: 'seats', 
    loadChildren: () => import('./components/seats/seats.module').then(m => m.SeatsModule)
  },
  {
    path: 'booking', 
    loadChildren: () => import('./components/theatres/theatres.module').then(m => m.TheatresModule)
  }
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {  }

