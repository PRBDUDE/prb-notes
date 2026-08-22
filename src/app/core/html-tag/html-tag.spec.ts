import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { describe, beforeEach, it, expect } from 'vitest';
import { HtmlTag } from '@core/html-tag';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

@Component({
  imports: [HtmlTag],
  template: `<html-tag><p>Projected Content</p></html-tag>`,
})
class TestHostComponent {}

describe('HtmlTag', () => {
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TestHostComponent,
        HtmlTag
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
    const componentFixture = TestBed.createComponent(HtmlTag);
    expect(componentFixture.componentInstance).toBeTruthy();
  });

  it('should render projected content correctly', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const projectedContent = compiled.querySelector('p');

    expect(projectedContent).not.toBeNull();
    expect(projectedContent?.textContent).toBe('Projected Content');
  });
});
