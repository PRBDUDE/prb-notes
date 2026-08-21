import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoSideMenu } from './no-side-menu';

describe('NoSideMenu', () => {
  let component: NoSideMenu;
  let fixture: ComponentFixture<NoSideMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoSideMenu],
    }).compileComponents();

    fixture = TestBed.createComponent(NoSideMenu);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
