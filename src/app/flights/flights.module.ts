import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchModule } from './search/search.module';
import { ResultsModule } from './results/results.module';

@NgModule({
  imports: [
    CommonModule,
    SearchModule,
    ResultsModule
  ],
  declarations: []
})
export class FlightsModule { }
