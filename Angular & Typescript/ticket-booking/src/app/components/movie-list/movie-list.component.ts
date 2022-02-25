import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Movie } from 'src/app/MockInterface';
import { Router } from '@angular/router';
//import { EventEmitter } from 'stream';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  @Input() movie: Movie;
  @Output() onItemClick: EventEmitter<Movie> = new EventEmitter();
  constructor(private router: Router) {
   }

  ngOnInit(): void {
  }

  onClick(movie:Movie) {
   this.onItemClick.emit(movie);
  }

}
