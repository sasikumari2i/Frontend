import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MiddleContainerComponent } from './components/middle-container/middle-container.component';

const appRoutes: Routes = [
  {
    path: '', 
    component : MiddleContainerComponent
  },
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

