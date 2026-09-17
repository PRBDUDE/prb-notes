import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubMenu } from './sub-menu';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('SubMenu', () => {
  let component: SubMenu;
  let fixture: ComponentFixture<SubMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubMenu],
      providers: [provideHttpClient(), provideHttpClientTesting()]
    }).compileComponents();

    fixture = TestBed.createComponent(SubMenu);
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
