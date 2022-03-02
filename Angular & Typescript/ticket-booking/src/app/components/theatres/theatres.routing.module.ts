import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TheatresComponent } from './theatres.component';


const routes: Routes = [

  {
    path: ':movieTitle',
    component: TheatresComponent
  }
];

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

  export class TheatresRoutingModule { 

  }
