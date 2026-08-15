import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLabSubMenu } from './home-lab-sub-menu';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('HomeLabSubMenu', () => {
  let component: HomeLabSubMenu;
  let fixture: ComponentFixture<HomeLabSubMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeLabSubMenu],
      providers: [provideHttpClient(), provideHttpClientTesting()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeLabSubMenu);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have host class "left-menu"', () => {
    const hostNativeElement: HTMLElement = fixture.nativeElement;
    expect(hostNativeElement.classList.contains('left-menu')).toBe(true);
  });
});
