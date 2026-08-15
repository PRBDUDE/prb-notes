import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnswerContainer } from './answer-container';

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
      imports: [TestHostComponent, AnswerContainer],
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

// import { ComponentFixture, TestBed } from '@angular/core/testing';
//
// import { AnswerContainer } from './answer-container';
//
// describe('AnswerContainer', () => {
//   let component: AnswerContainer;
//   let fixture: ComponentFixture<AnswerContainer>;
//
//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports: [AnswerContainer],
//     }).compileComponents();
//
//     fixture = TestBed.createComponent(AnswerContainer);
//     component = fixture.componentInstance;
//     await fixture.whenStable();
//   });
//
//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
