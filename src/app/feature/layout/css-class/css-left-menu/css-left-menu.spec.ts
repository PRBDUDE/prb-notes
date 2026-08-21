import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssLeftMenu } from './css-left-menu';

describe('CssLeftMenu', () => {
  let component: CssLeftMenu;
  let fixture: ComponentFixture<CssLeftMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CssLeftMenu],
    }).compileComponents();

    fixture = TestBed.createComponent(CssLeftMenu);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
