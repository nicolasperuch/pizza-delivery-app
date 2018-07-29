import { Injectable } from '@angular/core';

@Injectable()
export class DataValidatorService {

  constructor() { }

  isEmpty(customerName): boolean {
    return customerName == '';
  }
}
