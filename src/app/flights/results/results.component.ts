import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FlightModel } from './flight.model';
import { FlightsManagerService } from '../flights.manager.service';
import { Flight } from '../../../api/entitys/flights';
// tslint:disable:radix

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  /**
   * Result view model.
   * @type {FlightModel}
   * @memberof ResultsComponent
   */
  public model: FlightModel;

  constructor(
    private router: ActivatedRoute,
    private flightsManagerService: FlightsManagerService) {
    console.log(`${ResultsComponent.name}::ctor`);

  }

  ngOnInit() {

    this.router
      .queryParams
      .subscribe(params => {
        this.model = {
          iataFrom: params['iataFrom'],
          iataTo: params['iataTo'],
          dateFrom: params['dateFrom'],
          dateTo: params['dateTo'],
          child: parseInt(params['child']),
          passengers: parseInt(params['passengers']),
          flightList: [],
          inProgress: true
        };

        this.getFlights();
      });
  }

  /**
   * Get de flight list.
   * @memberof ResultsComponent
   */
  public getFlights(): void {
    console.log(`${ResultsComponent.name}::getFlights`);

    this.flightsManagerService.getFlights(this.model)
      .then((data: Flight[]) => {
        console.log(`${ResultsComponent.name}::getFlights (then) data %o`, data);
        this.model.flightList = data;
        this.model.inProgress = false;
      });
  }

  /**
   * True if list is loaded.
   * @returns {boolean}
   * @memberof ResultsComponent
   */
  public isLoaded(): boolean {
    return !this.model.inProgress;
  }

}
