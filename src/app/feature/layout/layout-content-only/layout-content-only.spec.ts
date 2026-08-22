import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutContentOnly } from './layout-content-only';

describe('LayoutContentOnly', () => {
  let component: LayoutContentOnly;
  let fixture: ComponentFixture<LayoutContentOnly>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutContentOnly],
    }).compileComponents();

    fixture = TestBed.createComponent(LayoutContentOnly);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
