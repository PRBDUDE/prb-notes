import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { describe, beforeEach, it, expect } from 'vitest';
import { Comment } from './comment';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

// Wrapper component to test content projection
@Component({
  standalone: true,
  imports: [Comment],
  template: `<prb-comment><span>Projected Content</span></prb-comment>`,
})
class TestHostComponent {}

describe('Comment Component', () => {
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TestHostComponent,
        Comment
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
    const commentElement = fixture.nativeElement.querySelector('prb-comment');
    expect(commentElement).toBeTruthy();
  });

  it('should render projected content', () => {
    const projectedElement = fixture.nativeElement.querySelector('prb-comment span');
    expect(projectedElement).toBeTruthy();
    expect(projectedElement.textContent).toBe('Projected Content');
  });
});
