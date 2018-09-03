/**
 * Flight request.
 * @export
 * @interface FlightResquest
 */
export interface FlightResquest {
    iataFrom: string;
    iataTo: string;
    dateFrom: number;
    dateTo: number;
    passengers: number;
    child: number;
  }
