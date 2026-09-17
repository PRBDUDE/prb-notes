import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLabSetupSubMenu } from './home-lab-setup-sub-menu';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('HomeLabSetupSubMenu', () => {
  let component: HomeLabSetupSubMenu;
  let fixture: ComponentFixture<HomeLabSetupSubMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeLabSetupSubMenu],
      providers: [provideHttpClient(), provideHttpClientTesting()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeLabSetupSubMenu);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have host class "prb-left-menu"', () => {
    const hostNativeElement: HTMLElement = fixture.nativeElement;
    expect(hostNativeElement.classList.contains('prb-left-menu')).toBe(true);
  });
});
