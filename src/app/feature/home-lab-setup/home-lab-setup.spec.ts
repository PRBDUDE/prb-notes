import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLabSetup } from './home-lab-setup';

describe('HomeLabSetup', () => {
  let component: HomeLabSetup;
  let fixture: ComponentFixture<HomeLabSetup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeLabSetup],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeLabSetup);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
