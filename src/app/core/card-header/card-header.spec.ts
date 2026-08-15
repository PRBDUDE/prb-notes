import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { CardHeader } from './card-header';
import { describe, beforeEach, it, expect } from 'vitest';

// Host component to test content projection (<ng-content>)
@Component({
  standalone: true,
  imports: [CardHeader],
  template: `
    <card-header>
      <span data-testid="projected-content">Header Content</span>
    </card-header>
  `,
})
class TestHostComponent {}

describe('CardHeader', () => {
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent, CardHeader],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();
  });

  it('should create the component', () => {
    const cardHeaderElement = fixture.nativeElement.querySelector('card-header');
    expect(cardHeaderElement).toBeTruthy();
  });

  it('should project content correctly inside <ng-content>', () => {
    const projectedElement = fixture.nativeElement.querySelector(
      '[data-testid="projected-content"]',
    );
    expect(projectedElement).toBeTruthy();
    expect(projectedElement.textContent).toBe('Header Content');
  });
});
