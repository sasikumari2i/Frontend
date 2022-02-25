import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MOVIES } from 'src/app/Mockdb';
import { Movie } from 'src/app/MockInterface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seats',
  templateUrl: './seats.component.html',
  styleUrls: ['./seats.component.css']
})
export class SeatsComponent implements OnInit {

  movie:Movie;
  theatre:string;
  showTime:string;
  seat:boolean = false;

  constructor(private route: Router,private router: ActivatedRoute) { }

  ngOnInit(): void {    
    let title = this.router.snapshot.paramMap.get('movieTitle');
    let name = this.router.snapshot.paramMap.get('name');
    let timing = this.router.snapshot.paramMap.get('timing');
    this.movie = MOVIES.find(i => i.movieTitle === title) as Movie;
    this.theatre = name as string;
    this.showTime = timing as string;
    console.log(this.seat);
  }

  getSeat() {
    this.seat = true;
    console.log(this.seat);
    return this.seat;
  }

}
