import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/Movie';
import { Premier } from 'src/app/Premier';
import { PREMIERES } from 'src/app/premieresdb';
import { MOVIES } from 'src/app/sampledb';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})


export class MainContentComponent implements OnInit {

  movies:Movie[] = MOVIES;
  premiers:Premier[] = PREMIERES;
  @Input() color:string;
  @Input() backgroundColor:string;
  categories = ['Movies','Premieres']


  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  itemClick(movie:Movie) {
    this.router.navigate(['/booking',movie.movieTitle]);
  }

  getCategory(category: string) {
    return category === 'Movies';
  }

}
