import { ComponentFixture, TestBed } from '@angular/core/testing';
import { describe, beforeEach, it, expect } from 'vitest';
import { CopySshFileToPi2 } from './copy-ssh-file-to-pi-2';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('CopySshFileToPi2', () => {
  let component: CopySshFileToPi2;
  let fixture: ComponentFixture<CopySshFileToPi2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CopySshFileToPi2
      ],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CopySshFileToPi2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component instance', () => {
    expect(component).toBeTruthy();
  });

  it('should have the correct page subtitle', () => {
    expect(component.pageSubtitle).toBe('Home Lab Setup - Copy SSH File to PI (2)');
  });
});
