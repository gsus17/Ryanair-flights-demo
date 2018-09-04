import { Airports } from '../../../api/entitys/airports-response';
import { Countries } from '../../airports.model';

/**
 * Search viewdata.
 * @export
 * @interface SearchViewdata
 */
export interface SearchViewdata {
    airportList: Airports[];
    airportsByIatacode: Airports[];
    countries: Countries[];
    showPanel: boolean;
    selection: string;
    showSecondSection: boolean;
}
