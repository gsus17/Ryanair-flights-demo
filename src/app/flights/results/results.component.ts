import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FlightModel } from './flight.model';
import { FlightsManagerService } from '../flights.manager.service';
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
          child: parseInt(params['id']),
          passengers: parseInt(params['id']),
          inProgress: true
        };
      });

  }

  public getFlights(): void {
    this.flightsManagerService.getFlights(this.model);
  }

}
