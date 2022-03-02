import { Component, OnInit} from '@angular/core';
import { Movie } from 'src/app/MockInterface';
import { Premier } from 'src/app/MockInterface';
import { PREMIERES } from 'src/app/Mockdb';
import { MoviesService } from 'src/app/services/movies.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public images = [`../../assets/banner1.avif`,`../../assets/banner2.avif`,`../../assets/banner2.avif`];
  public movies:Movie[] = [];
  public premiers:Premier[] = PREMIERES;
  public categories:string[];
  public category:string;

  constructor(private movieService: MoviesService ,private router: Router) { }
  
  ngOnInit(): void {
    this.movies = this.movieService.getMovies();
    this.categories = ['movies','premieres'];
  }

  getCategory(category: string) {
    return category === 'Movies';
  }
  
}
