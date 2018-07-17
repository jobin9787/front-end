import { TestBed, inject } from '@angular/core/testing';

import { CarAdService } from './car-ad.service';

describe('CarAdService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CarAdService]
    });
  });

  it('should be created', inject([CarAdService], (service: CarAdService) => {
    expect(service).toBeTruthy();
  }));
});
