import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasePageWithSubtitle } from './base-page-with-subtitle';

describe('BasePageWithSubtitle', () => {
  let component: BasePageWithSubtitle;
  let fixture: ComponentFixture<BasePageWithSubtitle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasePageWithSubtitle],
    }).compileComponents();

    fixture = TestBed.createComponent(BasePageWithSubtitle);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
