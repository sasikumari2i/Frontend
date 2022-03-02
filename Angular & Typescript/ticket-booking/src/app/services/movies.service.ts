import { Injectable } from '@angular/core';
import { MOVIES } from 'src/app/Mockdb';
import { Movie } from 'src/app/MockInterface';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor() { }

  getMovies():Movie[] {
    return MOVIES; 
  }
}
