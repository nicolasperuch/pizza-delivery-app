import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { FLAVORS } from '../../mocks/flavor-mocks'

@Injectable()
export class FlavorService {

  constructor() { }

  getFlavors(): Observable<String[]> {
    return of(FLAVORS);
  }
}
