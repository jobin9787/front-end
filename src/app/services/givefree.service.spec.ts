import { TestBed, inject } from '@angular/core/testing';

import { GivefreeService } from './givefree.service';

describe('GivefreeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GivefreeService]
    });
  });

  it('should be created', inject([GivefreeService], (service: GivefreeService) => {
    expect(service).toBeTruthy();
  }));
});
