import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MOVIES } from 'src/app/Mockdb';
import { Movie } from 'src/app/MockInterface';
import { Router } from '@angular/router';
import { MovieListComponent } from '../movie-list/movie-list.component';

@Component({
  selector: 'app-booking-main',
  templateUrl: './booking-main.component.html',
  styleUrls: ['./booking-main.component.css']
})
export class BookingMainComponent implements OnInit {
  
movie:Movie;
counter:number = 0;

  constructor(private route: Router,private router: ActivatedRoute) {
    
  }

  ngOnInit(): void {
    let title = this.router.snapshot.paramMap.get('movieTitle');
    this.movie = MOVIES.find(i => i.movieTitle === title) as Movie;
  }

  getLikes() {
    this.counter++;
  }

  getAvailableSeats(movie:Movie,name:string,timing:string) {
    this.route.navigate(['/selectSeats',movie.movieTitle,name,timing]);
  }
}