import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowToSetupHomeLab } from './how-to-setup-home-lab';

describe('HowToSetupHomeLab', () => {
  let component: HowToSetupHomeLab;
  let fixture: ComponentFixture<HowToSetupHomeLab>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HowToSetupHomeLab],
    }).compileComponents();

    fixture = TestBed.createComponent(HowToSetupHomeLab);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
