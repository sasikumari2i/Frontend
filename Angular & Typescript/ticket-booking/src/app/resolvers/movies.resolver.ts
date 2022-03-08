import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { MoviesService } from '../services/movies.service';
import { Movie } from '../MockInterface';
import { Observable, of } from 'rxjs';
//import { MoviePremiers } from 'src/assets/MoviePremiersInterface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MoviesResolver implements Resolve<Movie[]> {
  public movies: Movie[];
  //public data: Observable<MoviePremiers>;

  constructor(private movieService: MoviesService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Movie[]> {
    //console.log(this.movieService.getMovies());
    return this.movieService.getMovies();
    //console.log(this.movieService.getMovies());
    //return this.movieService.getMovies();
    //console.log(this.movies);
    //return this.movies;
  }
}
