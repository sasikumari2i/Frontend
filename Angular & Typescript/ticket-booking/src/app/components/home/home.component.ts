import { Component, OnInit} from '@angular/core';
import { Movie } from 'src/app/MockInterface';
import { Premier } from 'src/app/MockInterface';
import { PREMIERES } from 'src/app/Mockdb';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public images = [`../../assets/banner1.avif`,`../../assets/banner2.avif`,`../../assets/banner2.avif`];
  public movies:Movie[];
  public premiers:Premier[] = PREMIERES;

  constructor(private activatedRoute: ActivatedRoute) { }
  
  ngOnInit(): void {
    this.movies = this.activatedRoute.snapshot.data["movies"];
  }
}
