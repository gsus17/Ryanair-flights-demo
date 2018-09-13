import { Component, OnInit, Input } from '@angular/core';
import { Flight } from '../../../../api/entitys/flights';

@Component({
  selector: 'app-flight-item',
  templateUrl: './flight-item.component.html',
  styleUrls: ['./flight-item.component.scss']
})
export class FlightItemComponent implements OnInit {

  /**
   * Flight.
   * @type {Flight}
   * @memberof FlightItemComponent
   */
  @Input() public flight: Flight;

  /**
   * Iata from.
   * @type {string}
   * @memberof FlightItemComponent
   */
  @Input() public iataFrom: string;

  /**
   * Iata to.
   * @type {string}
   * @memberof FlightItemComponent
   */
  @Input() public iataTo: string;

  constructor() { }

  ngOnInit() {
  }

  public getHoursDiff() {
    const a: any = new Date(this.flight.dateFrom);
    const b: any = new Date(this.flight.dateTo);
    const c = ((a - b) / 1000);

    const ret = new Date();
    return ret.setMilliseconds(c);
  }

}
