import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssHeader } from './css-header';

describe('CssHeader', () => {
  let component: CssHeader;
  let fixture: ComponentFixture<CssHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CssHeader],
    }).compileComponents();

    fixture = TestBed.createComponent(CssHeader);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
