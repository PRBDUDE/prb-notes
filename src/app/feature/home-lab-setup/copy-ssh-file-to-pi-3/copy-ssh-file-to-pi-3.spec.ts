import { describe, expect, it } from 'vitest';
import { CopySshFileToPi3 } from './copy-ssh-file-to-pi-3';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { HomeLabSubMenu } from '../home-lab-sub-menu/home-lab-sub-menu';
import { AnswerContainer } from '@core/answer-container';
import { JellyContainer } from '@core/jelly-container';
import { QuestionContainer } from '@core/question-container';
import { CardContainer } from '@core/card-container';
import { CardHeader } from '@core/card-header';
import { CardBody } from '@core/card-body';
import { CodeText } from '@core/code-text';
import { BlockQuote } from '@core/block-quote';
import { ClassName } from '@core/class-name';
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

describe('CopySshFileToPi3 Component (Isolated)', () => {
  let component: CopySshFileToPi3;
  let fixture: ComponentFixture<CopySshFileToPi3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CopySshFileToPi3],
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
            ClassName
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
            MockClassName
          ],
        },
      })
      .compileComponents();

    fixture = TestBed.createComponent(CopySshFileToPi3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component instance', () => {
    expect(fixture.componentInstance).toBeDefined();
  });

  it('should render successfully with component overrides', () => {
    expect(fixture.componentInstance.pageSubtitle).toBe('Home Lab Setup - Copy SSH File to PI (3)');
  });
});
