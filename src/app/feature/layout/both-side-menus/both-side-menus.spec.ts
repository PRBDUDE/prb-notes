import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BothSideMenus } from './both-side-menus';

describe('BothSideMenus', () => {
  let component: BothSideMenus;
  let fixture: ComponentFixture<BothSideMenus>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BothSideMenus],
    }).compileComponents();

    fixture = TestBed.createComponent(BothSideMenus);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
