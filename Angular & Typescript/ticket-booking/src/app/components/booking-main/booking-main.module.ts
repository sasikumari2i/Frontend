import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingMainComponent } from './booking-main.component';
import { BookingMainRoutingModule } from './booking-main.routing.module';


@NgModule({
  declarations: [
    BookingMainComponent
  ],
  imports: [
    CommonModule,
    BookingMainRoutingModule
  ]
})
export class BookingMainModule { }