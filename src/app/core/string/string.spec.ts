import { ComponentFixture, TestBed } from '@angular/core/testing';

import { String } from './string';

describe('String', () => {
  let component: String;
  let fixture: ComponentFixture<String>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [String],
    }).compileComponents();

    fixture = TestBed.createComponent(String);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
