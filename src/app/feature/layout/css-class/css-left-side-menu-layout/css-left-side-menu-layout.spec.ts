import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssLeftSideMenuLayout } from './css-left-side-menu-layout';

describe('CssLeftSideMenuLayout', () => {
  let component: CssLeftSideMenuLayout;
  let fixture: ComponentFixture<CssLeftSideMenuLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CssLeftSideMenuLayout],
    }).compileComponents();

    fixture = TestBed.createComponent(CssLeftSideMenuLayout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
