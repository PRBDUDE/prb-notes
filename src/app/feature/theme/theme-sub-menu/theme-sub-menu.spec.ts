import { ComponentFixture, TestBed } from '@angular/core/testing';
import { describe, beforeEach, it, expect } from 'vitest';
import { ThemeSubMenu } from './theme-sub-menu';
import { provideRouter } from '@angular/router';

describe('ThemeSubMenu', () => {
  let component: ThemeSubMenu;
  let fixture: ComponentFixture<ThemeSubMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThemeSubMenu],
      providers: [
        provideRouter([])
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ThemeSubMenu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the "prb-left-menu" host class', () => {
    const hostElement: HTMLElement = fixture.nativeElement;
    expect(hostElement.classList.contains('prb-left-menu')).toBe(true);
  });
});
