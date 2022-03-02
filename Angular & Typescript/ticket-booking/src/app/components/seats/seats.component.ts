import { Component, ElementRef, OnInit, ViewChildren, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';
import { Movie } from 'src/app/MockInterface';
import { Theatre } from 'src/app/MockInterface';
import { Router } from '@angular/router';
import { Seat } from 'src/app/MockInterface';

@Component({
  selector: 'app-seats',
  templateUrl: './seats.component.html',
  styleUrls: ['./seats.component.css']
})
export class SeatsComponent implements OnInit {

  public seatNumber: number[];
  public seatAreaRight: string[];
  public movie:Movie;
  public theatreName:string;
  public showTime:string;
  public seatAreaLeft:string[];
  public theatre:Theatre;
  public seats:Seat;
  public seat:boolean = false;

  constructor(private movieService: MoviesService ,private route: Router,private router: ActivatedRoute) { }

  ngOnInit(): void {    
    let title = this.router.snapshot.paramMap.get('movieTitle');
    let name = this.router.snapshot.paramMap.get('name');
    let timing = this.router.snapshot.paramMap.get('timing');
    this.movie = this.movieService.getMovies().find(i => i.movieTitle === title) as Movie;
    this.theatreName = name as string;
    this.showTime = timing as string;
    this.theatre = this.movie.theatre.find(i => i.name === this.theatreName) as Theatre; 
    this.seats = this.theatre.seats;
    this.seatNumber = this.seats.seatNumber;
    this.seatAreaLeft = this.seats.seatAreaLeft;
    this.seatAreaRight = this.seats.seatAreaRight;
  }

  getSeat(id:HTMLElement) {
     if(id.classList.contains('disable')) {
      id.classList.remove('disable');
      id.className = 'enable';
     } else if(!id.classList.contains('disable')) {
      id.className = 'disable'; 
     }
    }

    gotoHome() {
      this.route.navigateByUrl('/');
    }
}
