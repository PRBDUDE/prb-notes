import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Header } from './header';
import { HeaderService } from '@core/header-service';
import { beforeEach, describe, expect, it } from 'vitest';
import { MockHeaderService } from '@mock/mock-header-service';

describe('Header Component', () => {
  let component: Header;
  let fixture: ComponentFixture<Header>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Header],
      providers: [{ provide: HeaderService, useClass: MockHeaderService }],
    }).compileComponents();

    fixture = TestBed.createComponent(Header);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should inject HeaderService correctly', () => {
    expect(component.headerService).toBeDefined();
    expect(component.headerService).toBeInstanceOf(MockHeaderService);
  });
});
