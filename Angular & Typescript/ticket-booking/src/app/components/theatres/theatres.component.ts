import { Component, Input, OnInit, Output, DoCheck } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/MockInterface';

@Component({
  selector: 'app-theatres',
  templateUrl: './theatres.component.html',
  styleUrls: ['./theatres.component.css']
})
export class TheatresComponent implements OnInit, DoCheck {
  
public movie:Movie;
public movies:Movie[];

  constructor(private router: ActivatedRoute) {}

  ngOnInit(): void {
  }

  ngDoCheck(): void  {
    let title = this.router.snapshot.paramMap.get('movieTitle');
    this.movies = this.router.snapshot.data["movies"];
    this.movie = this.movies.find(i => i.movieTitle === title) as Movie;
  }
}