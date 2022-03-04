import { Component, OnInit,  Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/MockInterface';
import { Theatre } from 'src/app/MockInterface';
import { Router } from '@angular/router';
import { Seat } from 'src/app/MockInterface';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-seats',
  templateUrl: './seats.component.html',
  styleUrls: ['./seats.component.css']
})
export class SeatsComponent implements OnInit {

  public seatNumber: number[];
  public movies:Movie[];
  public movie:Movie;
  public theatreName:string;
  public showTime:string;
  public theatre:Theatre;
  public seats:Seat;
  public tickets:string[] = [];
  public seatCategories: Array<Array<string>>;
  public price:number;
  public movieTitle:string;

  constructor(private dialogRef: MatDialog,private route: Router,private router: ActivatedRoute) { }

  ngOnInit(): void {    
    let title = this.router.snapshot.paramMap.get('movieTitle');
    let name = this.router.snapshot.paramMap.get('name');
    let timing = this.router.snapshot.paramMap.get('timing');
    this.movies = this.router.snapshot.data["movies"];
    this.movie = this.movies.find(i => i.movieTitle === title) as Movie;
    this.theatreName = name as string;
    this.showTime = timing as string;
    this.movieTitle = title as string;
    this.theatre = this.movie.theatre.find(i => i.name === this.theatreName) as Theatre; 
    this.seats = this.theatre.seats;
    this.seatNumber = this.seats.seatNumber;
    this.seatCategories = [this.seats.seatAreaLeft,this.seats.seatAreaRight];
  }

  openDialog() {
    this.dialogRef.open(PopupComponent);
  }

  getSeat(id:HTMLElement) {
    if(!id.classList.contains('disable')) {
      id.className = 'disable';
      this.tickets.push(id.innerText);
    } else if(id.classList.contains('disable')) {
      id.classList.remove('disable');
      id.className = 'enable';
      this.tickets.pop();
    }  
  }

  getPayment():boolean {
    this.price = this.tickets.length * 180;
    return 0 < this.tickets.length; 
  }

  gotoHome() {
    this.route.navigateByUrl('/');
  }

  goBack() {
    this.route.navigate(['/booking',this.movieTitle]);
  }
}
