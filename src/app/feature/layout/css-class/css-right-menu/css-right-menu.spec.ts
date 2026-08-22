import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssRightMenu } from './css-right-menu';

describe('CssRightMenu', () => {
  let component: CssRightMenu;
  let fixture: ComponentFixture<CssRightMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CssRightMenu],
    }).compileComponents();

    fixture = TestBed.createComponent(CssRightMenu);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
