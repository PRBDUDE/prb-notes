import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { describe, beforeEach, expect, it } from 'vitest';
import { CardContainer } from './card-container';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

@Component({
  imports: [CardContainer],
  template: `<card-container><p>Test Content</p></card-container>`,
})
class TestHostComponent {}

describe('CardContainer', () => {
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CardContainer,
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
    const containerDebugElement = fixture.nativeElement.querySelector('card-container');
    expect(containerDebugElement).toBeTruthy();
  });

  it('should project content into ng-content', () => {
    const projectedContent = fixture.nativeElement.querySelector('card-container p');
    expect(projectedContent?.textContent).toBe('Test Content');
  });
});
