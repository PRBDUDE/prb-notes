import { ComponentFixture, TestBed } from '@angular/core/testing';
import { describe, beforeEach, expect, it } from 'vitest';
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
    fixture.detectChanges();
  });

  it('should create the component instance', () => {
    expect(component).toBeTruthy();
  });

  it('should apply the "left-menu" host class', () => {
    const hostElement: HTMLElement = fixture.nativeElement;
    expect(hostElement.classList.contains('left-menu')).toBe(true);
  });
});
