import { TestBed } from '@angular/core/testing';
import { inputBinding } from '@angular/core';
import { describe, it, expect, beforeEach } from 'vitest';
import { Copyright } from './copyright';

describe('Copyright Component', () => {
  const currentYear = new Date().getFullYear();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Copyright],
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(Copyright);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should render default copyright holder and current year', async () => {
    const fixture = TestBed.createComponent(Copyright);
    fixture.detectChanges();
    await fixture.whenStable();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Programmer Roadblocks');
    expect(compiled.textContent).toContain(String(currentYear));
  });

  it('should render custom copyright holder passed via inputBinding', async () => {
    // Pass signal inputs using inputBinding in TestBed.createComponent bindings
    const fixture = TestBed.createComponent(Copyright, {
      bindings: [inputBinding('copyrightHolder', () => 'Acme Corp')],
    });

    fixture.detectChanges();
    await fixture.whenStable();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Acme Corp');
    expect(compiled.textContent).toContain(String(currentYear));
  });
});
