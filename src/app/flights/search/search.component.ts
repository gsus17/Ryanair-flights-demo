import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchModel } from './search-model';
import { FlightsManagerService } from '../flights.manager.service';
import { SearchViewdata } from './search-viewdata';
import { AirportsResponse } from '../../../api/entitys/airports-response';
import { Airport } from '../../airports.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  /**
   * Search model.
   * @type {SearchModel}
   * @memberof SearchComponent
   */
  public model: SearchModel;

  /**
   * Search viewdata.
   * @type {SearchViewdata}
   * @memberof SearchComponent
   */
  public viewdata: SearchViewdata;

  constructor(
    private router: Router,
    private flightsManagerService: FlightsManagerService) {
    console.log(`${SearchComponent.name}::ctor`);
  }

  ngOnInit() {

    this.model = {
      from: {
        base: null,
        country: null,
        iataCode: 'BUE',
        latitude: 0,
        longitude: 0,
        name: 'Buenos aires',
      },
      to: {
        base: null,
        country: null,
        iataCode: 'BUE',
        latitude: 0,
        longitude: 0,
        name: 'Buenos aires',
      },
      dateFrom: new Date(),
      dateTo: new Date(),
      child: 0,
      passengers: 0,
      rountrip: true
    };

    this.viewdata = {
      airportList: [],
      airportsByIatacode: [],
      countries: [],
      showPanel: false,
      showSecondSection: false,
      selection: 'from'
    };
  }

  /**
   * Redirect to result view.
   * @memberof SearchComponent
   */
  public redirect() {
    console.log(`${SearchComponent.name}::redirect`);

    this.router.navigate([`results`], {
      queryParams: {
        iataTo: this.model.to.iataCode,
        iataFrom: this.model.from.iataCode,
        dateFrom: this.model.dateFrom,
        dateTo: this.model.dateTo,
        child: 0,
        passengers: this.model.passengers
      }
    });
  }

  /**
   * Open the airport selection panel.
   * @param {string} selection
   * @memberof SearchComponent
   */
  public openPanel(selection: string) {
    this.viewdata.selection = selection;
    this.getAirportList();
  }

  /**
   * Get the airports list according country.
   * @param {string} name
   * @memberof SearchComponent
   */
  public searchAirports(countryName: string) {
    console.log(`${SearchComponent.name}::getAirportList`);
    this.viewdata.airportsByIatacode = this.viewdata.airportList.filter((item: any) => {
      const ret = item.country.name === countryName;
      return ret;
    });
  }

  /**
   * Open the second section selection.
   * @memberof SearchComponent
   */
  public openSecondSection(): void {
    this.viewdata.showSecondSection = true;
  }

  /**
   * Show the second section selection.
   * @returns
   * @memberof SearchComponent
   */
  public showSecondSection() {
    return this.viewdata.showSecondSection;
  }

  /**
   * Select airport.
   * @param {Airport} airport
   * @memberof SearchComponent
   */
  public selectAirport(airport: Airport): void {
    console.log(`${SearchComponent.name}::selectAirport`);
    if (this.viewdata.selection === 'from') {
      this.model.from = airport;
    } else if (this.viewdata.selection === 'to') {
      this.model.to = airport;
    }

    this.viewdata.showPanel = false;
  }

  /**
   * Check if countryname is selected.
   * @param {string} countrieName
   * @returns {boolean}
   * @memberof SearchComponent
   */
  public countryIsSelected(countrieName: string): boolean {
    return this.model.from.country !== null && countrieName === this.model.from.country.name
      || this.model.to.country !== null && countrieName === this.model.to.country.name;
  }

  /**
   * Check if airports is defined.
   * @returns {boolean}
   * @memberof SearchComponent
   */
  public checkAirports(): boolean {
    return this.model.from !== null && this.model.to !== null;
  }

  /**
   * Check if the panel is open.
   * @returns {boolean}
   * @memberof SearchComponent
   */
  public showPanel(): boolean {
    return this.viewdata.showPanel;
  }

  /**
   * Get the airport data.
   * @memberof SearchComponent
   */
  public getAirportList() {
    console.log(`${SearchComponent.name}::getAirportList`);

    this.flightsManagerService.getAirports()
      .then((data: AirportsResponse) => {
        console.log(`${SearchComponent.name}::getAirportList (then) data %o`, data);
        this.viewdata.airportList = data.airports;
        this.viewdata.countries = data.countries;
        this.viewdata.showPanel = true;
      });
  }



}
