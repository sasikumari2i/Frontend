import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MiddleContainerComponent } from './components/middle-container/middle-container.component';
import { SeatsComponent } from './components/seats/seats.component';
import { BookingMainComponent } from './components/booking-main/booking-main.component';

const appRoutes: Routes = [
  {
    path: '', 
    component : MiddleContainerComponent
  },
  {
    path: 'booking/:movieTitle', 
    component : BookingMainComponent
  },
  {
    path: 'selectSeats/:movieTitle/:name/:timing', 
    component : SeatsComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
