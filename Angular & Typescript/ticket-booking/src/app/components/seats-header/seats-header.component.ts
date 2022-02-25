import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MOVIES } from 'src/app/Mockdb';
import { Movie } from 'src/app/MockInterface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seats-header',
  templateUrl: './seats-header.component.html',
  styleUrls: ['./seats-header.component.css']
})
export class SeatsHeaderComponent implements OnInit {

  constructor(private route: Router,private router: ActivatedRoute) { }

  ngOnInit(): void { 
  }

  gotoHome() {
    this.route.navigateByUrl('/');
  }
}
