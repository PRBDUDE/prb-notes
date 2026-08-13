import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesSubMenu } from './services-sub-menu';

describe('ServicesSubMenu', () => {
  let component: ServicesSubMenu;
  let fixture: ComponentFixture<ServicesSubMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesSubMenu],
    }).compileComponents();

    fixture = TestBed.createComponent(ServicesSubMenu);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
