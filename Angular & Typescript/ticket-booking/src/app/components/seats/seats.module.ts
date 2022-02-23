import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeatsComponent } from './seats.component';
import { SeatsRoutingModule } from './seats.routing.module';
import { SeatsHeaderComponent } from '../seats-header/seats-header.component';


@NgModule({
  declarations: [
    SeatsComponent,
    SeatsHeaderComponent
  ],
  imports: [
    CommonModule,
    SeatsRoutingModule
  ]
})
export class SeatsModule { }