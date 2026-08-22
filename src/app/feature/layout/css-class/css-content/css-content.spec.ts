import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssContent } from './css-content';

describe('CssContent', () => {
  let component: CssContent;
  let fixture: ComponentFixture<CssContent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CssContent],
    }).compileComponents();

    fixture = TestBed.createComponent(CssContent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
