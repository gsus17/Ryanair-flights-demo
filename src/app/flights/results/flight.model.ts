import { FlightResquest } from '../../../api/entitys/flight-resquest';
import { Flight } from '../../../api/entitys/flights';

/**
 * Flight request.
 * @export
 * @interface FlightModel
 */
export interface FlightModel extends FlightResquest {
    inProgress: boolean;
    flightList: Flight[];
}
