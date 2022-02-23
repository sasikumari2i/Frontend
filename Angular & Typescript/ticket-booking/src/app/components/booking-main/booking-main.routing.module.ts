import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingMainComponent } from '../booking-main/booking-main.component';


const routes: Routes = [

  {
    path: ':movieTitle',
    component: BookingMainComponent
  }
];

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

  export class MainContentRoutingModule { 

  }
