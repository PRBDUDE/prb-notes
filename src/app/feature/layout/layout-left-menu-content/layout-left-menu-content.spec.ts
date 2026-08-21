import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutLeftMenuContent } from './layout-left-menu-content';

describe('LayoutLeftMenuContent', () => {
  let component: LayoutLeftMenuContent;
  let fixture: ComponentFixture<LayoutLeftMenuContent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutLeftMenuContent],
    }).compileComponents();

    fixture = TestBed.createComponent(LayoutLeftMenuContent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
