import { Component, OnInit, Input } from '@angular/core';
import { Premier } from 'src/app/Premier';

@Component({
  selector: 'app-premier-list',
  templateUrl: './premier-list.component.html',
  styleUrls: ['./premier-list.component.css']
})
export class PremierListComponent implements OnInit {

  @Input() premier: Premier;

  constructor() { }

  ngOnInit(): void {
  }

}
