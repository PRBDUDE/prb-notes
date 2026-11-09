import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { describe, it, expect, beforeEach } from 'vitest';
import { CodeColors } from './code-colors';

// Create a small test wrapper component to test multi-tag projection and rendering
@Component({
  template: `
    <block-quote>This is a block quote</block-quote>
    <class-name>MyClassName</class-name>
    <code-text>const x = 10;</code-text>
    <prb-comment>// A comment</prb-comment>
    <prb-note>Important Note</prb-note>
    <prb-property>propertyName</prb-property>
    <prb-string>"Hello World"</prb-string>
    <html-tag>div</html-tag>
    <key-word>return</key-word>
    <method-name>ngOnInit</method-name>
    <numeric-value>42</numeric-value>
  `,
  imports: [CodeColors],
})
class TestHostComponent {}

describe('CodeColors Component', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    compiled = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();
  });

  it('should create the host component successfully', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render block-quote and project content correctly', () => {
    const element = compiled.querySelector('block-quote');
    expect(element).toBeTruthy();
    expect(element?.textContent?.trim()).toBe('This is a block quote');
  });

  it('should render class-name and project content correctly', () => {
    const element = compiled.querySelector('class-name');
    expect(element).toBeTruthy();
    expect(element?.textContent?.trim()).toBe('MyClassName');
  });

  it('should render code-text and project content correctly', () => {
    const element = compiled.querySelector('code-text');
    expect(element).toBeTruthy();
    expect(element?.textContent?.trim()).toBe('const x = 10;');
  });

  it('should render prb-comment and project content correctly', () => {
    const element = compiled.querySelector('prb-comment');
    expect(element).toBeTruthy();
    expect(element?.textContent?.trim()).toBe('// A comment');
  });

  it('should render prb-note and project content correctly', () => {
    const element = compiled.querySelector('prb-note');
    expect(element).toBeTruthy();
    expect(element?.textContent?.trim()).toBe('Important Note');
  });

  it('should render prb-property and project content correctly', () => {
    const element = compiled.querySelector('prb-property');
    expect(element).toBeTruthy();
    expect(element?.textContent?.trim()).toBe('propertyName');
  });

  it('should render prb-string and project content correctly', () => {
    const element = compiled.querySelector('prb-string');
    expect(element).toBeTruthy();
    expect(element?.textContent?.trim()).toBe('"Hello World"');
  });

  it('should render html-tag and project content correctly', () => {
    const element = compiled.querySelector('html-tag');
    expect(element).toBeTruthy();
    expect(element?.textContent?.trim()).toBe('div');
  });

  it('should render key-word and project content correctly', () => {
    const element = compiled.querySelector('key-word');
    expect(element).toBeTruthy();
    expect(element?.textContent?.trim()).toBe('return');
  });

  it('should render method-name and project content correctly', () => {
    const element = compiled.querySelector('method-name');
    expect(element).toBeTruthy();
    expect(element?.textContent?.trim()).toBe('ngOnInit');
  });

  it('should render numeric-value and project content correctly', () => {
    const element = compiled.querySelector('numeric-value');
    expect(element).toBeTruthy();
    expect(element?.textContent?.trim()).toBe('42');
  });
});
