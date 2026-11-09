import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupSsh } from './setup-ssh';
import { AnswerContainer } from '@core/answer-container';
import { JellyContainer } from '@core/jelly-container';
import { QuestionContainer } from '@core/question-container';
import { HomeLabSetupSubMenu } from '../home-lab-setup-sub-menu/home-lab-setup-sub-menu';
import { CardContainer } from '@core/card-container';
import { CardHeader } from '@core/card-header';
import { CardBody } from '@core/card-body';
import { CodeColors } from '@core/code-colors';
import { MockAnswerContainer } from '@mock/mock-answer-container';
import { MockJellyContainer } from '@mock/mock-jelly-container';
import { MockQuestionContainer } from '@mock/mock-question-container';
import { MockHomeLabSubMenu } from '@mock/mock-home-lab-sub-menu';
import { MockCardContainer } from '@mock/mock-card-container';
import { MockCardHeader } from '@mock/mock-card-header';
import { MockCardBody } from '@mock/mock-card-body';
import { MockCodeText } from '@mock/mock-code-text';
import { MockBlockQuote } from '@mock/mock-block-quote';
import { MockClassName } from '@mock/mock-class-name';
import { MockHtmlTag } from '@mock/mock-html-tag';
import { MockString } from '@mock/mock-string';
import { expect, it } from 'vitest';

describe('SetupSsh', () => {
  let component: SetupSsh;
  let fixture: ComponentFixture<SetupSsh>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetupSsh],
    })
      .overrideComponent(SetupSsh, {
        remove: {
          imports: [
            AnswerContainer,
            JellyContainer,
            QuestionContainer,
            HomeLabSetupSubMenu,
            CardContainer,
            CardHeader,
            CardBody,
            CodeColors,
          ],
        },
        add: {
          imports: [
            MockAnswerContainer,
            MockJellyContainer,
            MockQuestionContainer,
            MockHomeLabSubMenu,
            MockCardContainer,
            MockCardHeader,
            MockCardBody,
            MockCodeText,
            MockBlockQuote,
            MockClassName,
            MockHtmlTag,
            MockString,
          ],
        },
      })
      .compileComponents();

    fixture = TestBed.createComponent(SetupSsh);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create the component instance', () => {
    expect(component).toBeTruthy();
  });

  it('should have the correct page subtitle', () => {
    expect(component.pageSubtitle).toBe('Home Lab Setup - Setup SSH');
  });
});
