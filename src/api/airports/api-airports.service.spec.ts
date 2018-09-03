import { TestBed, inject } from '@angular/core/testing';

import { ApiAirportsService } from './api-airports.service';

describe('ApiAirportsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiAirportsService]
    });
  });

  it('should be created', inject([ApiAirportsService], (service: ApiAirportsService) => {
    expect(service).toBeTruthy();
  }));
});
