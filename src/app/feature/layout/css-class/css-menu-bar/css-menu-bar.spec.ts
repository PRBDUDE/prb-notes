import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssMenuBar } from './css-menu-bar';

describe('CssMenuBar', () => {
  let component: CssMenuBar;
  let fixture: ComponentFixture<CssMenuBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CssMenuBar],
    }).compileComponents();

    fixture = TestBed.createComponent(CssMenuBar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
