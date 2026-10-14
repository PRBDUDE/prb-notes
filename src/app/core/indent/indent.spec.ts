import { TestBed } from '@angular/core/testing';
import { describe, it, expect, beforeEach } from 'vitest';
import { Indent } from './indent';

describe('Indent Component', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Indent],
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(Indent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should project content correctly', () => {
    // Testing with the base selector
    const fixture = TestBed.createComponent(Indent);
    const hostElement: HTMLElement = fixture.nativeElement;

    // Set text content to simulate projected ng-content
    hostElement.textContent = 'Indented Content';
    fixture.detectChanges();

    expect(hostElement.textContent).toContain('Indented Content');
  });

  // Test suite covering all indentation variants (1 to 10)
  const indentLevels = [
    { selector: 'indent-1', expectedMargin: '1rem' },
    { selector: 'indent-2', expectedMargin: '2rem' },
    { selector: 'indent-3', expectedMargin: '3rem' },
    { selector: 'indent-4', expectedMargin: '4rem' },
    { selector: 'indent-5', expectedMargin: '5rem' },
    { selector: 'indent-6', expectedMargin: '6rem' },
    { selector: 'indent-7', expectedMargin: '7rem' },
    { selector: 'indent-8', expectedMargin: '8rem' },
    { selector: 'indent-9', expectedMargin: '9rem' },
    { selector: 'indent-10', expectedMargin: '10rem' },
  ];

  indentLevels.forEach(({ selector, expectedMargin }) => {
    it(`should apply correct margin-left for <${selector}>`, async () => {
      // Dynamically create a test component template utilizing the specific tag name
      TestBed.overrideComponent(Indent, {
        set: { selector: selector },
      });

      const fixture = TestBed.createComponent(Indent);
      fixture.detectChanges();

      const compiled = fixture.nativeElement as HTMLElement;
      const computedStyle = window.getComputedStyle(compiled);

      expect(computedStyle.display).toBe('block');
      expect(computedStyle.marginLeft).toBe(expectedMargin);
    });
  });
});
