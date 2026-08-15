import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { describe, beforeEach, it, expect } from 'vitest';
import { BlockQuote } from './block-quote';

@Component({
  imports: [BlockQuote],
  template: `<block-quote>Test Quote Content</block-quote>`,
})
class TestHostComponent {}

describe('BlockQuote', () => {
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent, BlockQuote],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    const blockQuoteElement = fixture.nativeElement.querySelector('block-quote');
    expect(blockQuoteElement).toBeTruthy();
  });

  it('should render projected content', () => {
    const blockQuoteElement: HTMLElement = fixture.nativeElement.querySelector('block-quote');
    expect(blockQuoteElement.textContent?.trim()).toBe('Test Quote Content');
  });
});
