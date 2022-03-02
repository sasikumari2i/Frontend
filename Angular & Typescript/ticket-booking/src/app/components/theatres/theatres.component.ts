import { Component, Input, OnInit, Output, DoCheck } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//import { MOVIES } from 'src/app/Mockdb';
import { Movie } from 'src/app/MockInterface';
import { Router } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';
//import { MovieListComponent } from '../movie-list/movie-list.component';

@Component({
  selector: 'app-theatres',
  templateUrl: './theatres.component.html',
  styleUrls: ['./theatres.component.css']
})
export class TheatresComponent implements OnInit, DoCheck {
  
public movie:Movie;
public counter:number = 0;

  constructor(private movieService: MoviesService,private route: Router,private router: ActivatedRoute) {
    
  }

  ngOnInit(): void {
    let title = this.router.snapshot.paramMap.get('movieTitle');
    this.movie = this.movieService.getMovies().find(i => i.movieTitle === title) as Movie;
  }

  ngDoCheck(): void  {
    let title = this.router.snapshot.paramMap.get('movieTitle');
    this.movie = this.movieService.getMovies().find(i => i.movieTitle === title) as Movie;
  }

  getLikes() {
    this.counter++;
  }

  getAvailableSeats(movie:Movie,name:string,timing:string) {
    this.route.navigate(['/selectSeats',movie.movieTitle,name,timing]);
  }
}