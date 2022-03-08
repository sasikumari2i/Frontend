import { Injectable } from '@angular/core';
import { MOVIES } from 'src/app/Mockdb';
import { Movie } from 'src/app/MockInterface';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
//import { MoviePremiers } from 'src/assets/MoviePremiersInterface';

@Injectable({
  providedIn: 'root'
})

export class MoviesService {

  //public movies:MoviePremiers;
  public movies:Movie[];
  constructor(private httpClient: HttpClient) {
    //this.getMovies().subscribe(data => {
      //this.movies = data as MoviePremiers;
    //})
    //this.httpClient.get<MoviePremiers>("assets/mockDb.json").subscribe((data) => 
    //{
      //this.movies = data;
      //console.log(this.movies);
    //})
   }

  getMovies():Movie[] {
    //console.log(this.httpClient.get<MoviePremiers>("assets/mockDb.json"));
    this.httpClient.get<Movie[]>("assets/mockDb.json").subscribe((data:Movie[]) => this.movies = data);
    //.subscribe((data):Movie[] => {
      //this.movie = data.MOVIES;
      //console.log(this.movie);
      //return this.movie;
    //});
    //console.log(this.movie);
    //return this.movie;
    //console.log(this.movies);
    //return this.httpClient.get("assets/mockDb.json") as Observable<MoviePremiers>;
     //return this.movies;
    //console.log(this.movies);
    //return this.movies;
    //const movies = of(MOVIES);
    //return movies; 
  }
}