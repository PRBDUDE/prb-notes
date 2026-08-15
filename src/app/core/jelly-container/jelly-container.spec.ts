import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { describe, beforeEach, it, expect } from 'vitest';
import { JellyContainer } from './jelly-container';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

@Component({
  imports: [JellyContainer],
  template: `<jelly-container><span id="test-content">Slime Time</span></jelly-container>`,
})
class TestHostComponent {}

describe('JellyContainer', () => {
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        JellyContainer,
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

  it('should create the component instance', () => {
    const containerInstance = fixture.debugElement.children[0].componentInstance;
    expect(containerInstance).toBeTruthy();
    expect(containerInstance).toBeInstanceOf(JellyContainer);
  });

  it('should project transcluded content via ng-content', () => {
    const projectedElement = fixture.nativeElement.querySelector('#test-content');

    expect(projectedElement).not.toBeNull();
    expect(projectedElement?.textContent).toBe('Slime Time');
  });
});
