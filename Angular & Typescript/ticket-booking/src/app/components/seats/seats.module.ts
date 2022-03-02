import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeatsComponent } from './seats.component';
import { SeatsRoutingModule } from './seats.routing.module';


@NgModule({
  declarations: [
    SeatsComponent
  ],
  imports: [
    CommonModule,
    SeatsRoutingModule
  ]
})
export class SeatsModule { }