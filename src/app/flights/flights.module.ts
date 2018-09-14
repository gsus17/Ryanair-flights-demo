import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightsManagerService } from './flights.manager.service';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [FlightsManagerService]
})
export class FlightsModule { }
