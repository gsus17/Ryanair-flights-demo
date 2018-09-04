import { Injectable } from '@angular/core';

import { ApiService } from '../../api/api.service';
import { FlightResquest } from '../../api/entitys/flight-resquest';
import { FlightModel } from './results/flight.model';
import { AirportsResponse } from '../../api/entitys/airports-response';

@Injectable()
export class FlightsManagerService {

    constructor(private apiService: ApiService) {
        console.log(`${FlightsManagerService.name}::ctor`);

    }

    /**
     * Return a Arport list.
     * @returns
     * @memberof FlightsManagerService
     */
    public getAirports(): Promise<void | AirportsResponse> {
        console.log(`${FlightsManagerService.name}::getAirports`);

        return this.apiService.apiAirport().getAirports();
    }

    /**
     * Return a Arport list.
     * @param {FlightModel} flightModel
     * @returns
     * @memberof FlightsManagerService
     */
    public getFlights(flightModel: FlightModel) {
        console.log(`${FlightsManagerService.name}::getFlights`);
        const flightResquest: FlightResquest = this.mapToFlightRequest(flightModel);
        return this.apiService.apiFlight().getFlights(flightResquest);
    }

    /**
     * Map flightModel to flightRequest
     * @private
     * @returns {FlightResquest}
     * @memberof FlightsManagerService
     */
    private mapToFlightRequest(flightModel: FlightModel): FlightResquest {
        console.log(`${FlightsManagerService.name}::mapToFlightRequest`);

        const flightResquest: FlightResquest = {
            iataFrom: flightModel.iataFrom,
            iataTo: flightModel.iataTo,
            dateFrom: flightModel.dateFrom,
            dateTo: flightModel.dateTo,
            passengers: flightModel.passengers !== undefined ? flightModel.passengers : 0,
            child: flightModel.child !== undefined ? flightModel.child : 0,
        };

        return flightResquest;
    }
}
