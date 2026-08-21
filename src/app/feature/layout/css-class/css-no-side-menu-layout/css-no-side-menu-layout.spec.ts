import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssNoSideMenuLayout } from './css-no-side-menu-layout';

describe('CssNoSideMenuLayout', () => {
  let component: CssNoSideMenuLayout;
  let fixture: ComponentFixture<CssNoSideMenuLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CssNoSideMenuLayout],
    }).compileComponents();

    fixture = TestBed.createComponent(CssNoSideMenuLayout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
