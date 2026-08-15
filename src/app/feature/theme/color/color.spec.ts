import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { describe, beforeEach, it, expect } from 'vitest';
import { Color } from './color';
import { ThemeSubMenu } from '../theme-sub-menu/theme-sub-menu';
import { Palette } from './palette/palette';

describe('Color Component', () => {
  let component: Color;
  let fixture: ComponentFixture<Color>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Color],
    })
      // Mock child components if you want to isolate the component test
      .overrideComponent(Color, {
        remove: { imports: [ThemeSubMenu, Palette] },
        add: { schemas: [NO_ERRORS_SCHEMA] },
      })
      .compileComponents();

    fixture = TestBed.createComponent(Color);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component instance', () => {
    expect(component).toBeTruthy();
  });

  it('should have the correct page subtitle', () => {
    expect(component.pageSubtitle).toBe('Theme - Color');
  });
});
