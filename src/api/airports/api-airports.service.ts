import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AirportsResponse } from '../entitys/airports-response';

@Injectable()
export class ApiAirportsService {

  /**
   * Api url request.
   * @private
   * @type {string}
   * @memberof ApiAirportsService
   */
  // tslint:disable-next-line:no-inferrable-types
  private apiUrl: string = `https://murmuring-ocean-10826.herokuapp.com/en/api/2`;

  constructor(private httpClient: HttpClient) { }

  /**
   * Return a Arport list.
   * @returns {(Promise<void | AirportsResponse[]>)}
   * @memberof ApiAirportsService
   */
  public getAirports(): Promise<void | AirportsResponse> {
    console.log(`${ApiAirportsService.name}::getAirports`);

    return this.httpClient.get(`${this.apiUrl}/forms/flight-booking-selector/`)
      .toPromise()
      .then(response => response as AirportsResponse)
      .catch(() => {
      });
  }

}
