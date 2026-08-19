import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MicroFrontEnds } from './micro-front-ends';
import { beforeEach, describe, expect, it } from 'vitest';
import { MicroFrontEndSubMenu } from './micro-front-end-sub-menu/micro-front-end-sub-menu';
import { CodeText } from '@core/code-text/code-text';
import { MockMicroFrontEndSubMenu } from '@mock/mock-micro-front-end-sub-menu';
import { MockCodeText } from '@mock/mock-code-text';

describe('MicroFrontEnds', () => {
  let component: MicroFrontEnds;
  let fixture: ComponentFixture<MicroFrontEnds>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MicroFrontEnds],
    })
      .overrideComponent(MicroFrontEnds, {
        remove: {
          imports: [MicroFrontEndSubMenu, CodeText],
        },
        add: {
          imports: [MockMicroFrontEndSubMenu, MockCodeText],
        },
      })
      .compileComponents();

    fixture = TestBed.createComponent(MicroFrontEnds);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component instance', () => {
    expect(component).toBeTruthy();
  });

  it('should set pageSubtitle to "Micro Front Ends"', () => {
    expect(component.pageSubtitle).toBe('Micro Front Ends');
  });
});
