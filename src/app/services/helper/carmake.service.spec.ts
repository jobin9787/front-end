import { TestBed, inject } from '@angular/core/testing';

import { CarmakeService } from './carmake.service';

describe('CarmakeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CarmakeService]
    });
  });

  it('should be created', inject([CarmakeService], (service: CarmakeService) => {
    expect(service).toBeTruthy();
  }));
});
