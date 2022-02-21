import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MOVIES } from 'src/app/sampledb';
import { Movie } from 'src/app/Movie';
import { Theatre } from 'src/app/Theatre';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seats-header',
  templateUrl: './seats-header.component.html',
  styleUrls: ['./seats-header.component.css']
})
export class SeatsHeaderComponent implements OnInit {

  movie:Movie;
  theatre:string;
  showTime:string;

  constructor(private route: Router,private router: ActivatedRoute) { }

  ngOnInit(): void {
    let title = this.router.snapshot.paramMap.get('movieTitle');
    let name = this.router.snapshot.paramMap.get('name');
    let timing = this.router.snapshot.paramMap.get('timing');
    this.movie = MOVIES.find(i => i.movieTitle === title) as Movie;
    this.theatre = name as string;
    this.showTime = timing as string; 
  }

  gotoHome() {
    this.route.navigateByUrl('/');
  }
}
