import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header-top',
  templateUrl: './header-top.component.html',
  styleUrls: ['./header-top.component.css']
})
export class HeaderTopComponent implements OnInit {

  @Input() text: string;

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  gotoHome() {
    this.router.navigateByUrl('/');
  }

}
