import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/app/MockInterface';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public name = '';

  @ViewChild('searchInput')
  searchInput:ElementRef;

  color:string = "blue";
  movies:Movie[] = [];
  @Input() text: string;
  headerLeftNavList = ["Movies","Stream","Events","Plays","Sports","Activities","Buzz"];
  headerRightNavList = ["ListYourShow","Corporates","Offers","Gift Cards"]


  constructor(private movieService: MoviesService ,private router: Router, private activatedRoute: ActivatedRoute) { 
  }

  ngOnInit(): void {
    this.movieService.getMovies().subscribe((movies) => (this.movies = movies));
  }

  getSearchFilter() {
    if(this.name != '') {
      for(let movie in this.movies) {           
      }
    }
  }

  gotoHome() {
    this.router.navigateByUrl('/');
  }
 
  itemClick(movieTitle:string) {
    this.searchInput.nativeElement.value = "";
    this.router.navigate(['./booking',movieTitle]);
  }

  getMainHeader(route: string) {
    return !this.router.url.includes(route);
  }
}
