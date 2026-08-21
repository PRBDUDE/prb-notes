import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssFooter } from './css-footer';

describe('CssFooter', () => {
  let component: CssFooter;
  let fixture: ComponentFixture<CssFooter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CssFooter],
    }).compileComponents();

    fixture = TestBed.createComponent(CssFooter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
