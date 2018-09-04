import { Airport } from '../../airports.model';

/**
 * Search model.
 * @export
 * @interface SearchModel
 */
export interface SearchModel {
    rountrip: boolean;
    from: Airport;
    to: Airport;
    dateFrom: Date;
    dateTo: Date;
    passengers: number;
    child: number;
}
