import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { describe, beforeEach, it, expect } from 'vitest';
import { CodeText } from './code-text';

// Test host component to project content into <ng-content>
@Component({
  imports: [CodeText],
  template: `<code-text>Hello Vitest</code-text>`,
})
class TestHostComponent {}

describe('CodeText', () => {
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodeText, TestHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();
  });

  it('should create the component', () => {
    const componentInstance = fixture.debugElement.children[0].componentInstance;
    expect(componentInstance).toBeTruthy();
  });

  it('should project transcluded content into <ng-content>', () => {
    const element: HTMLElement = fixture.nativeElement;
    const codeTextElement = element.querySelector('code-text');

    expect(codeTextElement?.textContent?.trim()).toBe('Hello Vitest');
  });
});
