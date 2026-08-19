import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CopySshFileToPi } from './copy-ssh-file-to-pi';
import { beforeEach, describe, expect, it } from 'vitest';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
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
import { Comment } from '@core/comment/comment';
import { Indent } from '@core/indent/indent';
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
import { MockComment } from '@mock/mock-comment';
import { MockIndent } from '@mock/mock-indent';

describe('CopySshFileToPi', () => {
  let component: CopySshFileToPi;
  let fixture: ComponentFixture<CopySshFileToPi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CopySshFileToPi],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    })
      .overrideComponent(CopySshFileToPi, {
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
            Comment,
            Indent,
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
            MockComment,
            MockIndent,
          ],
        },
      })
      .compileComponents();

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
