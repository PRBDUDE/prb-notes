import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutSubMenu } from './layout-sub-menu';

describe('LayoutSubMenu', () => {
  let component: LayoutSubMenu;
  let fixture: ComponentFixture<LayoutSubMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutSubMenu],
    }).compileComponents();

    fixture = TestBed.createComponent(LayoutSubMenu);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
