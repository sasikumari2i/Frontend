import { Injectable } from '@angular/core';
import { MOVIES } from 'src/app/Mockdb';
import { Movie } from 'src/app/MockInterface';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor() { }

  getMovies():Observable<Movie[]> {
    const movies = of(MOVIES);
    return movies; 
  }
}