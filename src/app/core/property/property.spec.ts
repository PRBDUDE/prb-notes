import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { describe, beforeEach, it, expect } from 'vitest';
import { Property } from './property';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

// Host component to test content projection
@Component({
  imports: [Property],
  template: `<prb-property
    ><span data-testid="projected-content">Test Content</span></prb-property
  >`,
})
class TestHostComponent {}

describe('Property Component', () => {
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TestHostComponent,
        Property
      ],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();
  });

  it('should create the component instance', () => {
    const propertyElement = fixture.nativeElement.querySelector('prb-property');
    expect(propertyElement).toBeTruthy();
  });

  it('should project slotted content into <ng-content>', () => {
    const projectedElement = fixture.nativeElement.querySelector(
      '[data-testid="projected-content"]',
    );
    expect(projectedElement).toBeTruthy();
    expect(projectedElement.textContent).toContain('Test Content');
  });
});
