import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutLeftAndRightMenuContent } from './layout-left-and-right-menu-content';

describe('LayoutLeftAndRightMenuContent', () => {
  let component: LayoutLeftAndRightMenuContent;
  let fixture: ComponentFixture<LayoutLeftAndRightMenuContent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutLeftAndRightMenuContent],
    }).compileComponents();

    fixture = TestBed.createComponent(LayoutLeftAndRightMenuContent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
