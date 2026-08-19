import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonMenu } from './common-menu';
import { BasePageWithSubtitle } from '@core/base-page-with-subtitle/base-page-with-subtitle';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { JellyContainer } from '@core/jelly-container/jelly-container';
import { QuestionContainer } from '@core/question-container/question-container';
import { AnswerContainer } from '@core/answer-container/answer-container';
import { Indent } from '@core/indent/indent';
import { MockJellyContainer } from '@mock/mock-jelly-container';
import { MockQuestionContainer } from '@mock/mock-question-container';
import { MockAnswerContainer } from '@mock/mock-answer-container';
import { MockIndent } from '@mock/mock-indent';
import { MicroFrontEndSubMenu } from '../micro-front-end-sub-menu/micro-front-end-sub-menu';
import { Note } from '@core/note/note';
import { HtmlTag } from '@core/html-tag/html-tag';
import { MockMicroFrontEndSubMenu } from '@mock/mock-micro-front-end-sub-menu';
import { MockNote } from '@mock/mock-note';
import { MockHtmlTag } from '@mock/mock-html-tag';

describe('CommonMenu', () => {
  let component: CommonMenu;
  let fixture: ComponentFixture<CommonMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonMenu],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    })
      .overrideComponent(CommonMenu, {
        remove: {
          imports: [
            MicroFrontEndSubMenu,
            Note,
            HtmlTag,
            JellyContainer,
            QuestionContainer,
            AnswerContainer,
            Indent,
          ],
        },
        add: {
          imports: [
            MockMicroFrontEndSubMenu,
            MockNote,
            MockHtmlTag,
            MockJellyContainer,
            MockQuestionContainer,
            MockAnswerContainer,
            MockIndent,
          ],
        },
      })
      .compileComponents();

    fixture = TestBed.createComponent(CommonMenu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should be an instance of BasePageWithSubtitle', () => {
    expect(component).toBeInstanceOf(BasePageWithSubtitle);
  });

  it('should set pageSubtitle correctly', () => {
    expect(component.pageSubtitle).toBe('Micro Front Ends - Common Menu');
  });
});
