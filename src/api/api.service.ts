import { Injectable } from '@angular/core';
import { ApiAirportsService } from './airports/api-airports.service';
import { ApiFlightService } from './flights/api-flight.service';

/**
 * Api wrapper.
 * @export
 * @class ApiService
 */
@Injectable()
export class ApiService {

  constructor(
    private airport: ApiAirportsService,
    private flight: ApiFlightService) {
    console.log(`${ApiService.name}::ctor`);
  }

  /**
   * Return the airport api reference.
   * @returns {ApiAirportsService}
   * @memberof ApiService
   */
  public apiAirport(): ApiAirportsService {
    console.log(`${ApiService.name}::apiAirport`);
    return this.airport;
  }

  /**
   * Return the flight api reference.
   * @returns {ApiFlightService}
   * @memberof ApiService
   */
  public apiFlight(): ApiFlightService {
    console.log(`${ApiService.name}::apiFlight`);
    return this.flight;
  }

}
