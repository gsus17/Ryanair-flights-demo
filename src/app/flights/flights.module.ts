import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchModule } from './search/search.module';
import { ResultsModule } from './results/results.module';
import { FlightsManagerService } from './flights.manager.service';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [FlightsManagerService]
})
export class FlightsModule { }
