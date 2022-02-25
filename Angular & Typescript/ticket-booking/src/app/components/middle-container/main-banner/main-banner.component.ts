import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-banner',
  templateUrl: './main-banner.component.html',
  styleUrls: ['./main-banner.component.css']
})
export class MainBannerComponent implements OnInit {

  images = [`../../assets/banner1.avif`,`../../assets/banner2.avif`,`../../assets/banner2.avif`]

  constructor() { }

  ngOnInit(): void {
  }

}
