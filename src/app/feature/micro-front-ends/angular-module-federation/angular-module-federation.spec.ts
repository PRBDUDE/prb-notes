import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularModuleFederation } from './angular-module-federation';

describe('AngularModuleFederation', () => {
  let component: AngularModuleFederation;
  let fixture: ComponentFixture<AngularModuleFederation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularModuleFederation],
    }).compileComponents();

    fixture = TestBed.createComponent(AngularModuleFederation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
