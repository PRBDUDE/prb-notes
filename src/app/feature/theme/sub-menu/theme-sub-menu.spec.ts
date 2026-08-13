import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeSubMenu } from './theme-sub-menu';

describe('ThemeSubMenu', () => {
  let component: ThemeSubMenu;
  let fixture: ComponentFixture<ThemeSubMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThemeSubMenu],
    }).compileComponents();

    fixture = TestBed.createComponent(ThemeSubMenu);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
