import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TheatresComponent } from './theatres.component';
import { TheatresRoutingModule } from './theatres.routing.module';


@NgModule({
  declarations: [
    TheatresComponent
  ],
  imports: [
    CommonModule,
    TheatresRoutingModule
  ]
})
export class TheatresModule { }