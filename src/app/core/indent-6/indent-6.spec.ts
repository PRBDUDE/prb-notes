import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Indent6 } from './indent-6';

describe('Indent6', () => {
  let component: Indent6;
  let fixture: ComponentFixture<Indent6>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Indent6],
    }).compileComponents();

    fixture = TestBed.createComponent(Indent6);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
