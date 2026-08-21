import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumericValue } from './numeric-value';

describe('NumericValue', () => {
  let component: NumericValue;
  let fixture: ComponentFixture<NumericValue>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NumericValue],
    }).compileComponents();

    fixture = TestBed.createComponent(NumericValue);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
