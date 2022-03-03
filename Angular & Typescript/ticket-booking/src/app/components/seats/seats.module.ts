import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeatsComponent } from './seats.component';
import { SeatsRoutingModule } from './seats.routing.module';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    SeatsComponent
  ],
  imports: [
    CommonModule,
    SeatsRoutingModule,
    MatDialogModule
  ]
})
export class SeatsModule { }