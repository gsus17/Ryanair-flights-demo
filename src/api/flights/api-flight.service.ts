import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { FlightResquest } from '../entitys/flight-resquest';
import { Flight } from '../entitys/flights';
// tslint:disable:no-inferrable-types

@Injectable()
export class ApiFlightService {

  /**
   * Api url request.
   * @private
   * @type {string}
   * @memberof ApiFlightService
   */
  private apiUrl: string = `https://murmuring-ocean-10826.herokuapp.com/en/api/2`;

  constructor(private httpClient: HttpClient) { }

  /**
   * Get a flight list.
   * @param {FlightResquest} flightResquest
   * @returns {(Promise<void | Flight[]>)}
   * @memberof ApiFlightService
   */
  public getFlights(flightResquest: FlightResquest): Promise<void | Flight[]> {
    console.log(`${ApiFlightService.name}::getFlights`);

    const iataCodes: string = `from/${flightResquest.iataFrom}/to/${flightResquest.iataTo}`;
    const dates: string = `${flightResquest.dateFrom}/${flightResquest.dateTo}`;
    return this.httpClient.get(`${this.apiUrl}/flights/${iataCodes}/${dates}/250/unique/?limit=15&offset-0`)
      .toPromise()
      .then(response => response as Flight[])
      .catch(() => {
      });
  }

}
