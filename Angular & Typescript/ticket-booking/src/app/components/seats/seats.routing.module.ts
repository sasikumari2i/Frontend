import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingMainComponent } from '../booking-main/booking-main.component';
import { SeatsComponent } from './seats.component';
import { SeatsHeaderComponent } from '../seats-header/seats-header.component';


const routes: Routes = [

  {
    path: ':movieTitle/:name/:timing',
    component: SeatsComponent,
    children: [
     {
         path : '',
         component: SeatsHeaderComponent
     }
     ]

  }
];

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

  export class SeatsRoutingModule { 
      constructor() {
          console.log("Success");
      }

  }
