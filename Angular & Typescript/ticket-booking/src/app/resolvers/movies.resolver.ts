import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { MoviesService } from '../services/movies.service';
import { Movie } from '../MockInterface';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesResolver implements Resolve<Movie[]> {

  public movies:Movie[];
  
  constructor(private movieService: MoviesService){}
  
  resolve():Observable<Movie[]> {
    this.movieService.getMovies().subscribe((movies) => (this.movies = movies));
    return of(this.movies); 
  }
}
