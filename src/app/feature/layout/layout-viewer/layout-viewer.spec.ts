import { ComponentFixture, TestBed } from '@angular/core/testing';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { LayoutViewer } from './layout-viewer';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { LayoutContentOnly } from '@layout/layout-content-only';
import { MockLayoutContentOnly } from '@mock/mock-layout-content-only';
import { LayoutLeftMenuContent } from '@layout/layout-left-menu-content';
import { MockLayoutLeftMenuContent } from '@mock/mock-layout-left-menu-content';
import { LayoutLeftAndRightMenuContent } from '@layout/layout-left-and-right-menu-content';
import { MockLayoutLeftAndRightMenuContent } from '@mock/mock-layout-left-and-right-menu-content';

describe('LayoutViewer', () => {
  let component: LayoutViewer;
  let fixture: ComponentFixture<LayoutViewer>;

  beforeEach(async () => {
    vi.useFakeTimers();

    await TestBed.configureTestingModule({
      imports: [LayoutViewer],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    })
      .overrideComponent(LayoutViewer, {
        remove: {
          imports: [LayoutContentOnly, LayoutLeftMenuContent, LayoutLeftAndRightMenuContent],
        },
        add: {
          imports: [
            MockLayoutContentOnly,
            MockLayoutLeftMenuContent,
            MockLayoutLeftAndRightMenuContent,
          ],
        },
      })
      .compileComponents();

    fixture = TestBed.createComponent(LayoutViewer);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Triggers ngOnInit()
  });

  afterEach(() => {
    vi.restoreAllMocks();
    vi.useRealTimers();
  });

  it('should create the component with initial layout set to 0', () => {
    expect(component).toBeTruthy();
    expect(component.currentLayout()).toBe(0);
  });

  it('should increment currentLayout every 4000ms and cycle back to 0', () => {
    // Initial value
    expect(component.currentLayout()).toBe(0);

    // Advance 4 seconds -> Layout 1
    vi.advanceTimersByTime(4000);
    expect(component.currentLayout()).toBe(1);

    // Advance 4 seconds -> Layout 2
    vi.advanceTimersByTime(4000);
    expect(component.currentLayout()).toBe(2);

    // Advance 4 seconds -> Cycles back to 0
    vi.advanceTimersByTime(4000);
    expect(component.currentLayout()).toBe(0);
  });

  it('should clear the interval when the component is destroyed', () => {
    const clearIntervalSpy = vi.spyOn(globalThis, 'clearInterval');

    // Destroy component to trigger ngOnDestroy
    fixture.destroy();

    expect(clearIntervalSpy).toHaveBeenCalled();

    // Advance time to verify interval no longer triggers updates
    const lastValue = component.currentLayout();
    vi.advanceTimersByTime(4000);
    expect(component.currentLayout()).toBe(lastValue);
  });
});
