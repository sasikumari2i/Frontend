import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Movie, Premier } from 'src/app/MockInterface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  @Input() movie: Movie;
  @Input() premier: Premier;
  @Output() onItemClick: EventEmitter<Movie> = new EventEmitter();
  constructor(private router: Router) {
   }

  ngOnInit(): void {
  }

  onClick(movie:Movie) {
   this.onItemClick.emit(movie);
  }

}
