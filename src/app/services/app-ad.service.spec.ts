import { TestBed, inject } from '@angular/core/testing';

import { AppAdService } from './app-ad.service';

describe('AppAdService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppAdService]
    });
  });

  it('should be created', inject([AppAdService], (service: AppAdService) => {
    expect(service).toBeTruthy();
  }));
});
