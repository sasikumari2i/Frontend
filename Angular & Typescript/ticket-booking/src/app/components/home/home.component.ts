import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/MockInterface';
import { Premier } from 'src/app/MockInterface';
import { MOVIES, PREMIERES } from 'src/app/Mockdb';
import { ActivatedRoute } from '@angular/router';
import { Observable, pluck } from 'rxjs';
//import { MoviePremiers } from 'src/assets/MoviePremiersInterface';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public images = [
    `../../assets/banner1.avif`,
    `../../assets/banner2.avif`,
    `../../assets/banner2.avif`,
  ];
  //public moviepremiers:Observable<MoviePremiers>;
  //public mov:any;
  public movies: Movie[];
  public movie: Movie;
  public premiers: Premier[] = PREMIERES;

  constructor(
    private activatedRoute: ActivatedRoute,
    private movieService: MoviesService
  ) {
    this.movieService.getMovies().subscribe((data: Movie[]) => {
      this.movies = data;
      console.log(this.movies);
    });
  }

  /*this.http
      .get<chatList[]>('assets/db.json')
      .pipe(pluck('chatters'))
      .subscribe((data) => {
        this.chatters = data as chatList[];
      });*/

  ngOnInit(): void {
    //this.activatedRoute.snapshot.data['movies'].find(data => {
    // this.data.mo = data.MOVIES;
    //console.log(this.movies);
    //});
    //this.activatedRoute.snapshot.data['movies']
    /*this.activatedRoute.data.forEach((data:any):Movie[] => {
        this.movies = data.MOVIES;
        console.log(this.movies);
    //subscribe((data) => {
      //this.mov = data;
      //console.log(this.movies);
    });*/
    //.data["movies"].subscribe((data:MoviePremiers) => {
    //this.mov = data;
    //console.log(this.mov);
    //console.log(this.moviepremiers.);
    //console.log(typeof(this.moviepremiers))
    //this.moviepremiers.pipe(pluck("MOVIES"))
    //this.moviepremiers.pipe(pluck("MOVIES").subscribe(data => {
    //this.moviePrem = data.MOVIES;
    //console.log(this.moviePrem);
  }
}
