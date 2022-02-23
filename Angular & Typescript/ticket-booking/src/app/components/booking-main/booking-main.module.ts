import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingMainComponent } from './booking-main.component';
import { MainContentRoutingModule } from './booking-main.routing.module';


@NgModule({
  declarations: [
    BookingMainComponent
  ],
  imports: [
    CommonModule,
    MainContentRoutingModule
  ]
})
export class BookingMainModule { }