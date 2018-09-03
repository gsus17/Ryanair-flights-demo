import { TestBed, inject } from '@angular/core/testing';

import { ApiFlightService } from './api-flight.service';

describe('ApiFlightService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiFlightService]
    });
  });

  it('should be created', inject([ApiFlightService], (service: ApiFlightService) => {
    expect(service).toBeTruthy();
  }));
});
