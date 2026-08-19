import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { describe, beforeEach, it, expect } from 'vitest';
import { String } from './string';

// Test host component to verify content projection (<ng-content>)
@Component({
  imports: [String],
  template: `<prb-string>Test Content</prb-string>`,
})
class TestHostComponent {}

describe('String Component', () => {
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent, String],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();
  });

  it('should create the component', () => {
    const stringComponentFixture = TestBed.createComponent(String);
    const component = stringComponentFixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should project content inside <ng-content>', () => {
    const hostNativeElement = fixture.nativeElement as HTMLElement;
    expect(hostNativeElement.textContent?.trim()).toBe('Test Content');
  });
});
