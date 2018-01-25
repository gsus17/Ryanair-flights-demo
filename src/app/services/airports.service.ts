import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { FlightBookingSelector } from '../airports.model';

@Injectable()
export class AirportsService {

  constructor(private http: HttpClient) { }

  public airports$(): Observable<FlightBookingSelector> {
    return this.http.get<FlightBookingSelector>(
    'https://murmuring-ocean-10826.herokuapp.com/en/api/2/forms/flight-booking-selector/'
    );
  }
}
