import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Indent1 } from './indent-1';

describe('Indent1', () => {
  let component: Indent1;
  let fixture: ComponentFixture<Indent1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Indent1],
    }).compileComponents();

    fixture = TestBed.createComponent(Indent1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
