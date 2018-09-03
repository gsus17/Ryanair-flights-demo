import { FlightResquest } from '../../../api/entitys/flight-resquest';

/**
 * Flight request.
 * @export
 * @interface FlightModel
 */
export interface FlightModel extends FlightResquest {
    inProgress: boolean;
}
