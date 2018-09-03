import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightListComponent } from './flight-list/flight-list.component';
import { FlightItemComponent } from './flight-item/flight-item.component';
import { ResultsComponent } from './results.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ResultsComponent, FlightListComponent, FlightItemComponent]
})
export class ResultsModule { }
