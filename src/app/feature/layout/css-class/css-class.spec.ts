import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssClass } from './css-class';

describe('CssClass', () => {
  let component: CssClass;
  let fixture: ComponentFixture<CssClass>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CssClass],
    }).compileComponents();

    fixture = TestBed.createComponent(CssClass);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
