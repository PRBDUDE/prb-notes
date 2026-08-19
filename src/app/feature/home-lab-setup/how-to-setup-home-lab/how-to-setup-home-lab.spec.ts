import { ComponentFixture, TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it } from 'vitest';
import { HowToSetupHomeLab } from './how-to-setup-home-lab';
import { MockHomeLabSubMenu } from '@mock/mock-home-lab-sub-menu';
import { MockJellyContainer } from '@mock/mock-jelly-container';
import { MockQuestionContainer } from '@mock/mock-question-container';
import { MockAnswerContainer } from '@mock/mock-answer-container';
import { MockCodeText } from '@mock/mock-code-text';
import { HomeLabSubMenu } from '../home-lab-sub-menu/home-lab-sub-menu';
import { JellyContainer } from '@core/jelly-container/jelly-container';
import { QuestionContainer } from '@core/question-container/question-container';
import { AnswerContainer } from '@core/answer-container/answer-container';
import { CodeText } from '@core/code-text/code-text';

describe('HowToSetupHomeLab', () => {
  let component: HowToSetupHomeLab;
  let fixture: ComponentFixture<HowToSetupHomeLab>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HowToSetupHomeLab],
    })
      .overrideComponent(HowToSetupHomeLab, {
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
    fixture.detectChanges();
  });

  it('should create the component instance', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize pageSubtitle correctly', () => {
    expect(component.pageSubtitle).toBe('Home Lab Setup - How to Setup Home Lab');
  });
});
