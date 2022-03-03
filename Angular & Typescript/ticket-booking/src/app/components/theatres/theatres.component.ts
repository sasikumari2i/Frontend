import { Component, Input, OnInit, Output, DoCheck } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/MockInterface';
import { Router } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-theatres',
  templateUrl: './theatres.component.html',
  styleUrls: ['./theatres.component.css']
})
export class TheatresComponent implements OnInit, DoCheck {
  
public movie:Movie;
public counter:number = 0;
public movies:Movie[];

  constructor(private router: ActivatedRoute) {
    
  }

  ngOnInit(): void {
  }

  ngDoCheck(): void  {
    let title = this.router.snapshot.paramMap.get('movieTitle');
    this.movies = this.router.snapshot.data["movies"];
    this.movie = this.movies.find(i => i.movieTitle === title) as Movie;
  }

  getLikes() {
    this.counter++;
  }

  //getAvailableSeats(movie:Movie,name:string,timing:string) {
    //this.route.navigate(['/selectSeats',movie.movieTitle,name,timing]);
  //}
}