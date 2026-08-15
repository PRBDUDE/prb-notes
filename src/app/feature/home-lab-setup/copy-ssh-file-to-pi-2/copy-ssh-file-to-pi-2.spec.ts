import { ComponentFixture, TestBed } from '@angular/core/testing';
import { describe, beforeEach, it, expect } from 'vitest';
import { CopySshFileToPi2 } from './copy-ssh-file-to-pi-2';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { CopySshFileToPi3 } from '../copy-ssh-file-to-pi-3/copy-ssh-file-to-pi-3';
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

describe('CopySshFileToPi2', () => {
  let component: CopySshFileToPi2;
  let fixture: ComponentFixture<CopySshFileToPi2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CopySshFileToPi2],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    })
      .overrideComponent(CopySshFileToPi3, {
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
          ],
        },
      })
      .compileComponents();

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
