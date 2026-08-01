import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonMenu } from './common-menu';

describe('CommonMenu', () => {
  let component: CommonMenu;
  let fixture: ComponentFixture<CommonMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonMenu],
    }).compileComponents();

    fixture = TestBed.createComponent(CommonMenu);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
