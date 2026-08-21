import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssBothSideMenuLayout } from './css-both-side-menu-layout';

describe('CssBothSideMenuLayout', () => {
  let component: CssBothSideMenuLayout;
  let fixture: ComponentFixture<CssBothSideMenuLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CssBothSideMenuLayout],
    }).compileComponents();

    fixture = TestBed.createComponent(CssBothSideMenuLayout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
