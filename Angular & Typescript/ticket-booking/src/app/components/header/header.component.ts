import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  color:string = "blue";
  @Input() text: string;
  headerLeftNavList = ["Movies","Stream","Events","Plays","Sports","Activities","Buzz"];
  headerRightNavList = ["ListYourShow","Corporates","Offers","Gift Cards"]


  constructor(private router: Router) { 
    console.log(this.text);
  }

  ngOnInit(): void {
  }

  gotoHome() {
    this.router.navigateByUrl('/');
  }

  //getRequiredList() {
    //console.log('success');
  //}

  getMainHeader(route: string) {
    return !this.router.url.includes(route);
  }


}
