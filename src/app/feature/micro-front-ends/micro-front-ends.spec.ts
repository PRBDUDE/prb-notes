import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicroFrontEnds } from './micro-front-ends';

describe('MicroFrontEnds', () => {
  let component: MicroFrontEnds;
  let fixture: ComponentFixture<MicroFrontEnds>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MicroFrontEnds],
    }).compileComponents();

    fixture = TestBed.createComponent(MicroFrontEnds);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
