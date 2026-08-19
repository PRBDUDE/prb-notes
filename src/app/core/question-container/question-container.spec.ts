import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { describe, beforeEach, it, expect } from 'vitest';
import { QuestionContainer } from './question-container';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';

@Component({
  imports: [QuestionContainer],
  template: `
    <question-container>
      <div id="test-content">Projected Content</div>
    </question-container>
  `,
})
class TestHostComponent {}

describe('QuestionContainer', () => {
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        QuestionContainer,
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
    const containerComponent = fixture.debugElement.children[0].componentInstance;
    expect(containerComponent).toBeTruthy();
  });

  it('should project content passed into ng-content', () => {
    const projectedElement = fixture.nativeElement.querySelector('#test-content');
    expect(projectedElement).not.toBeNull();
    expect(projectedElement.textContent).toContain('Projected Content');
  });
});
