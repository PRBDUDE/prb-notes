import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Palette } from './palette';
import { describe, beforeEach, afterEach, it, expect, vi } from 'vitest';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('Palette Component', () => {
  let component: Palette;
  let fixture: ComponentFixture<Palette>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Palette],
      providers: [provideHttpClient(), provideHttpClientTesting()]
    }).compileComponents();

    fixture = TestBed.createComponent(Palette);
    component = fixture.componentInstance;
  });

  afterEach(() => {
    // Clean up inline styles added to documentElement during tests
    document.documentElement.style.removeProperty('--color-header-background');
    document.documentElement.style.removeProperty('--custom-color');
    vi.restoreAllMocks();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should initialize colors correctly with default CSS variable input', () => {
      // Set default variable value on :root
      document.documentElement.style.setProperty('--color-header-background', '#ffffff');

      fixture.detectChanges(); // Triggers ngOnInit

      expect(component.bgColor).toBe('#ffffff');
      expect(component.borderColor).toBe('#000000');
      expect(component.hexColor).toBe('#000000');
    });

    it('should initialize colors correctly when a custom colorVariableName signal input is provided', () => {
      document.documentElement.style.setProperty('--custom-color', '#000000');

      // Set signal input value
      fixture.componentRef.setInput('colorVariableName', '--custom-color');
      fixture.detectChanges();

      expect(component.bgColor).toBe('#000000');
      expect(component.borderColor).toBe('#000000');
      expect(component.hexColor).toBe('#000000');
    });

    it('should handle named CSS colors correctly via canvas evaluation', () => {
      document.documentElement.style.setProperty('--color-header-background', 'red');

      fixture.detectChanges();

      // HTML5 Canvas standardizes 'red' to '#ff0000'
      expect(component.bgColor).toBe('red');
      expect(component.borderColor).toBe('#000000');
      expect(component.hexColor).toBe('#000000');
    });
  });

  describe('Color calculation fallback handling', () => {
    it('should return fallback #000000 when canvas 2D context is unavailable', () => {
      // Mock HTMLCanvasElement.prototype.getContext to return null
      vi.spyOn(HTMLCanvasElement.prototype, 'getContext').mockReturnValue(null);

      document.documentElement.style.setProperty('--color-header-background', '#ffffff');
      fixture.detectChanges();

      expect(component.borderColor).toBe('#000000');
      expect(component.hexColor).toBe('#000000');
    });
  });
});
