import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { describe, expect, it, beforeEach } from 'vitest';
import { String } from './string';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';

@Component({
  standalone: true,
  imports: [String],
  template: `<prb-string>Projected Content</prb-string>`,
})
class TestHostComponent {}

describe('String Component (TestBed Host)', () => {
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TestHostComponent,
        String
      ],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();
  });

  it('should project content correctly', () => {
    const projectedElement = fixture.nativeElement.querySelector('prb-string');
    expect(projectedElement.textContent.trim()).toBe('Projected Content');
  });
});
