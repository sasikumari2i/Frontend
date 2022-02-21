import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  color:string = "blue";

  constructor(private router: Router) { 
  }

  ngOnInit(): void {
  }

  //getRequiredList() {
    //console.log('success');
  //}

  getMainHeader(route: string) {
    return !this.router.url.includes(route);
  }


}
