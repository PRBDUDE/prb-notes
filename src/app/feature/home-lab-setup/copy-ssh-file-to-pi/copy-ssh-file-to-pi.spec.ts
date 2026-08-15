import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CopySshFileToPi } from './copy-ssh-file-to-pi';
import { describe, beforeEach, it, expect } from 'vitest';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('CopySshFileToPi', () => {
  let component: CopySshFileToPi;
  let fixture: ComponentFixture<CopySshFileToPi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CopySshFileToPi
      ],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CopySshFileToPi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should set the correct pageSubtitle', () => {
    expect(component.pageSubtitle).toBe('Home Lab Setup - Copy SSH File to PI');
  });
});
