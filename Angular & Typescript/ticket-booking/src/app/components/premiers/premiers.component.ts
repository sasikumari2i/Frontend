import { Component, OnInit, Input } from '@angular/core';
import { Premier } from 'src/app/MockInterface';

@Component({
  selector: 'app-premiers',
  templateUrl: './premiers.component.html',
  styleUrls: ['./premiers.component.css']
})
export class PremiersComponent implements OnInit {

  @Input() premier: Premier;

  constructor() { }

  ngOnInit(): void {
  }

}
