import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MicroFrontEndSubMenu } from './micro-front-end-sub-menu';
import { describe, beforeEach, it, expect } from 'vitest';

describe('MicroFrontEndSubMenu', () => {
  let component: MicroFrontEndSubMenu;
  let fixture: ComponentFixture<MicroFrontEndSubMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MicroFrontEndSubMenu],
    }).compileComponents();

    fixture = TestBed.createComponent(MicroFrontEndSubMenu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component instance', () => {
    expect(component).toBeTruthy();
  });

  it('should apply the "left-menu" host class', () => {
    const hostElement = fixture.nativeElement as HTMLElement;
    expect(hostElement.classList.contains('left-menu')).toBe(true);
  });
});
