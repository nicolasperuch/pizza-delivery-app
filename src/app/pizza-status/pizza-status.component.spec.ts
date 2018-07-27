import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaStatusComponent } from './pizza-status.component';

describe('PizzaStatusComponent', () => {
  let component: PizzaStatusComponent;
  let fixture: ComponentFixture<PizzaStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzaStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
