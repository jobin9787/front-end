import { TestBed, inject } from '@angular/core/testing';

import { EmailHelperService } from './email-helper.service';

describe('EmailHelperService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmailHelperService]
    });
  });

  it('should be created', inject([EmailHelperService], (service: EmailHelperService) => {
    expect(service).toBeTruthy();
  }));
});
