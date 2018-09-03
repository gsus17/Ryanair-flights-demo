import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from './api.service';
import { ApiAirportsModule } from './airports/api-airports.module';
import { ApiFlightsModule } from './flights/api-flights.module';

@NgModule({
  imports: [
    CommonModule,
    ApiAirportsModule,
    ApiFlightsModule
  ],
  declarations: [],
  providers: [ApiService]
})
export class ApiModule { }
