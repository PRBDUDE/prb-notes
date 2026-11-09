import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { describe, it, expect, beforeEach } from 'vitest';
import { Indent } from './indent';

@Component({
  template: `
    <indent-1>Content 1</indent-1>
    <indent-2>Content 2</indent-2>
    <indent-3>Content 3</indent-3>
    <indent-4>Content 4</indent-4>
    <indent-5>Content 5</indent-5>
    <indent-6>Content 6</indent-6>
    <indent-7>Content 7</indent-7>
    <indent-8>Content 8</indent-8>
    <indent-9>Content 9</indent-9>
    <indent-10>Content 10</indent-10>
  `,
  imports: [Indent],
})
class TestHostComponent {}

describe('Indent Component', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();
    compiled = fixture.nativeElement as HTMLElement;
  });

  it('should create the component instances', () => {
    const indentElements = compiled.querySelectorAll('indent-1, indent-5, indent-10');
    expect(indentElements.length).toBe(3);
    indentElements.forEach((el) => {
      expect(el).toBeTruthy();
    });
  });

  it('should project content correctly via ng-content', () => {
    const indent1 = compiled.querySelector('indent-1');
    expect(indent1?.textContent?.trim()).toBe('Content 1');
  });

  it.each([
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
  ])('should apply correct margin-left for $selector', ({ selector, expectedMargin }) => {
    const element = compiled.querySelector(selector);
    expect(element).toBeTruthy();

    if (element) {
      const computedStyle = window.getComputedStyle(element);
      expect(computedStyle.marginLeft).toBe(expectedMargin);
    }
  });
});
