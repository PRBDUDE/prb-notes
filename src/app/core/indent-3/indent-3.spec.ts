import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Indent3 } from './indent-3';

describe('Indent3', () => {
  let component: Indent3;
  let fixture: ComponentFixture<Indent3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Indent3],
    }).compileComponents();

    fixture = TestBed.createComponent(Indent3);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
