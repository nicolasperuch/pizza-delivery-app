import { Injectable } from '@angular/core';

@Injectable()
export class DataValidatorService {

  constructor() { }

  validatorService(customerName): boolean {
    return customerName != '';
  }
}
