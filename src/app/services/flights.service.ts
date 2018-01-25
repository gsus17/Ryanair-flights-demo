import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';

import { FlightResponse } from '../flights.model';

@Injectable()
export class FlightsService {

  constructor() { }

  public flights$(): Observable<FlightResponse> {
    return of({ flights: [] });
  }
}
