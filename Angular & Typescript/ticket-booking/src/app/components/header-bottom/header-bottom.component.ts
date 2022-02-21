import { Component, OnInit,Input , Output, EventEmitter} from '@angular/core';
//import { EventEmitter } from 'stream';

@Component({
  templateUrl: './header-bottom.component.html',
  selector: 'app-header-bottom',
  styleUrls: ['./header-bottom.component.css']
})
export class HeaderBottomComponent implements OnInit {

  headerLeftNavList = ["Movies","Stream","Events","Plays","Sports","Activities","Buzz"];
  headerRightNavList = ["ListYourShow","Corporates","Offers","Gift Cards"]
  
  @Input() item:string;
  @Output() rightListClick = new EventEmitter() 

  constructor() { 
  }
 
  ngOnInit(): void {
  }

  onSave() {
    this.rightListClick.emit();
  }

}
