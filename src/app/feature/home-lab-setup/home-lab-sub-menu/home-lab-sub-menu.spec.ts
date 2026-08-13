import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLabSubMenu } from './home-lab-sub-menu';

describe('HomeLabSubMenu', () => {
  let component: HomeLabSubMenu;
  let fixture: ComponentFixture<HomeLabSubMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeLabSubMenu],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeLabSubMenu);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
