/**
 * Airports response.
 * @export
 * @interface AirportsResponse
 */
export interface AirportsResponse {
    airports: Airports[];
    countries: Countries[];
}

/**
 * Country entity.
 * @export
 * @interface Countries
 */
export interface Countries {
    code: string;
    name: string;
    seoName: string;
    englishSeoName: string;
    currency: string;
    url: string;
}

/**
 * Airport entity.
 * @export
 * @interface Airports
 */
export interface Airports {
    iataCode: string;
    name: string;
    base: boolean;
    latitude: number;
    longitude: number;
}
