import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Flight } from '../../../flights.model';
import { isArray } from 'util';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.scss']
})
export class FlightListComponent implements OnInit {

  /**
   * Flight list.
   * @type {*}
   * @memberof FlightListComponent
   */
  @Input() public flightList: any;

  /**
   * Iata from.
   * @type {string}
   * @memberof FlightListComponent
   */
  @Input() public iataFrom: string;

  /**
   * Iata to.
   * @type {string}
   * @memberof FlightListComponent
   */
  @Input() public iataTo: string;

  constructor(private route: ActivatedRoute) {
    console.log(`${FlightListComponent.name}::ctor`);

  }

  ngOnInit() {

  }

  /**
   * True if list is not empty.
   * @returns {boolean}
   * @memberof FlightListComponent
   */
  public hasFlightList(): boolean {
    const ret: boolean = this.flightList.flights.length > 0;
    return ret;
  }

}
