import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { describe, beforeEach, it, expect } from 'vitest';
import { Note } from './note';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

// Test wrapper component to test <ng-content> projection
@Component({
  imports: [Note],
  template: `<prb-note><span id="test-content">Hello World</span></prb-note>`,
})
class TestHostComponent {}

describe('Note Component', () => {
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TestHostComponent,
        Note
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
    const noteElement = fixture.nativeElement.querySelector('prb-note');
    expect(noteElement).toBeTruthy();
  });

  it('should project content passed into ng-content', () => {
    const projectedElement = fixture.nativeElement.querySelector('#test-content');
    expect(projectedElement).toBeTruthy();
    expect(projectedElement.textContent).toBe('Hello World');
  });
});
