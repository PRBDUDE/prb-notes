import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { describe, beforeEach, it, expect } from 'vitest';
import { KeyWord } from './key-word';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

// Host component to test content projection
@Component({
  imports: [KeyWord],
  template: `<key-word><span>Test Content</span></key-word>`,
})
class TestHostComponent {}

describe('KeyWord Component', () => {
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        KeyWord,
        TestHostComponent
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
    const keywordElement = fixture.nativeElement.querySelector('key-word');
    expect(keywordElement).toBeTruthy();
  });

  it('should project transcluded content', () => {
    const projectedContent = fixture.nativeElement.querySelector('key-word span');
    expect(projectedContent).toBeTruthy();
    expect(projectedContent.textContent).toBe('Test Content');
  });
});
