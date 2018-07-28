import { TestBed, inject } from '@angular/core/testing';

import { DataValidatorService } from './data-validator.service';

describe('DataValidatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataValidatorService]
    });
  });

  it('should be created', inject([DataValidatorService], (service: DataValidatorService) => {
    expect(service).toBeTruthy();
  }));
});
