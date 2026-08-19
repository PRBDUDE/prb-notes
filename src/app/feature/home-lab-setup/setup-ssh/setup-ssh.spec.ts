import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupSsh } from './setup-ssh';
import { AnswerContainer } from '@core/answer-container/answer-container';
import { JellyContainer } from '@core/jelly-container/jelly-container';
import { QuestionContainer } from '@core/question-container/question-container';
import { HomeLabSubMenu } from '../home-lab-sub-menu/home-lab-sub-menu';
import { CardContainer } from '@core/card-container/card-container';
import { CardHeader } from '@core/card-header/card-header';
import { CardBody } from '@core/card-body/card-body';
import { CodeText } from '@core/code-text/code-text';
import { BlockQuote } from '@core/block-quote/block-quote';
import { ClassName } from '@core/class-name/class-name';
import { HtmlTag } from '@core/html-tag/html-tag';
import { String } from '@core/string/string';
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
            HomeLabSubMenu,
            CardContainer,
            CardHeader,
            CardBody,
            CodeText,
            BlockQuote,
            ClassName,
            HtmlTag,
            String,
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
