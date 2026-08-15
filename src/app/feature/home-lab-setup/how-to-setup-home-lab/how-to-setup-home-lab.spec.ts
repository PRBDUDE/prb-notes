import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowToSetupHomeLab } from './how-to-setup-home-lab';
import { CopySshFileToPi3 } from '../copy-ssh-file-to-pi-3/copy-ssh-file-to-pi-3';
import { AnswerContainer } from '@core/answer-container/answer-container';
import { JellyContainer } from '@core/jelly-container/jelly-container';
import { QuestionContainer } from '@core/question-container/question-container';
import { HomeLabSubMenu } from '../home-lab-sub-menu/home-lab-sub-menu';
import { CodeText } from '@core/code-text/code-text';
import { MockAnswerContainer } from '@mock/mock-answer-container';
import { MockJellyContainer } from '@mock/mock-jelly-container';
import { MockQuestionContainer } from '@mock/mock-question-container';
import { MockHomeLabSubMenu } from '@mock/mock-home-lab-sub-menu';
import { MockCodeText } from '@mock/mock-code-text';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { expect, it } from 'vitest';

describe('HowToSetupHomeLab', () => {
  let component: HowToSetupHomeLab;
  let fixture: ComponentFixture<HowToSetupHomeLab>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HowToSetupHomeLab],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    })
      .overrideComponent(CopySshFileToPi3, {
        remove: {
          imports: [HomeLabSubMenu, JellyContainer, QuestionContainer, AnswerContainer, CodeText],
        },
        add: {
          imports: [
            MockHomeLabSubMenu,
            MockJellyContainer,
            MockQuestionContainer,
            MockAnswerContainer,
            MockCodeText,
          ],
        },
      })
      .compileComponents();

    fixture = TestBed.createComponent(HowToSetupHomeLab);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create the component instance', () => {
    expect(component).toBeTruthy();
  });

  it('should have the correct page subtitle', () => {
    expect(component.pageSubtitle).toBe('Home Lab Setup - How to Setup Home Lab');
  });
});
