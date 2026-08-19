import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { describe, beforeEach, it, expect } from 'vitest';
import { MethodName } from './method-name';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';

// Test wrapper component to test projected content (<ng-content>)
@Component({
  imports: [MethodName],
  template: `
    <method-name>
      <span data-testid="projected-content">Hello Vitest</span>
    </method-name>
  `,
})
class TestHostComponent {}

describe('MethodName', () => {
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TestHostComponent,
        MethodName
      ],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();
  });

  it('should create the component', () => {
    const componentInstance = fixture.debugElement.children[0].componentInstance;
    expect(componentInstance).toBeTruthy();
  });

  it('should render projected content inside ng-content', () => {
    const projectedElement = fixture.nativeElement.querySelector(
      '[data-testid="projected-content"]',
    );

    expect(projectedElement).not.toBeNull();
    expect(projectedElement?.textContent).toBe('Hello Vitest');
  });
});
