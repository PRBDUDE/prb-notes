import { ComponentFixture, TestBed } from '@angular/core/testing';
import { describe, it, expect, beforeEach } from 'vitest';
import { HomeLabSetup } from './home-lab-setup';
import { provideRouter } from '@angular/router';

describe('HomeLabSetup', () => {
  let component: HomeLabSetup;
  let fixture: ComponentFixture<HomeLabSetup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeLabSetup],
      providers: [
        provideRouter([])
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeLabSetup);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set pageSubtitle to "Home Lab Setup"', () => {
    expect(component.pageSubtitle).toBe('Home Lab Setup');
  });
});
