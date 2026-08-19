import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnswerContainer } from './answer-container';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

// Test host component to test <ng-content> projection
@Component({
  standalone: true,
  imports: [AnswerContainer],
  template: `
    <answer-container>
      <p data-testid="projected-content">Test Projected Answer</p>
    </answer-container>
  `,
})
class TestHostComponent {}

describe('AnswerContainer', () => {
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TestHostComponent,
        AnswerContainer
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
    const containerInstance = fixture.debugElement.children[0].componentInstance;
    expect(containerInstance).toBeTruthy();
  });

  it('should project content correctly inside ng-content', () => {
    const projectedElement = fixture.nativeElement.querySelector(
      '[data-testid="projected-content"]',
    );
    expect(projectedElement).not.toBeNull();
    expect(projectedElement?.textContent).toBe('Test Projected Answer');
  });
});
