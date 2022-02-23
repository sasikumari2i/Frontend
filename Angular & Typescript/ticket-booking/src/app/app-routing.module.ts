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
  /*{
    path: 'booking/:movieTitle', 
    component: BookingMainComponent
    },*/ 
  /*{
    path: 'selectSeats/:movieTitle/:name/:timing', 
    component : SeatsComponent
  }*/
  /*{
    path: 'main', loadChildren: () => import('./components/main-content/main-content.module').then(m => m.MainContentModule)
  }*/
  {
    path: 'seats', 
    loadChildren: () => import('./components/seats/seats.module').then(m => m.SeatsModule)
  },
  {
    path: 'booking', 
    loadChildren: () => import('./components/booking-main/booking-main.module').then(m => m.BookingMainModule)
  }
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

