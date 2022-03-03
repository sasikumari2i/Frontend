import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { MoviesService } from '../services/movies.service';
import { Movie } from '../MockInterface';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesResolver implements Resolve<Movie[]> {

  movies:Movie[];
  
  constructor(private movieService: MoviesService){}
  //resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
  resolve():Observable<Movie[]> {
    this.movieService.getMovies().subscribe((movies) => (this.movies = movies));
    return of(this.movies); 
    //return this.movieService.getMovies();  
  }
}
