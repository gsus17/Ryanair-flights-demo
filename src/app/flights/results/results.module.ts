import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightListComponent } from './flight-list/flight-list.component';
import { FlightItemComponent } from './flight-item/flight-item.component';
import { ResultsComponent } from './results.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule
  ],
  declarations: [ResultsComponent, FlightListComponent, FlightItemComponent]
})
export class ResultsModule { }
