import { ComponentFixture, TestBed } from '@angular/core/testing';
import { describe, beforeEach, it, expect } from 'vitest';
import { AngularModuleFederation } from './angular-module-federation';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { CopySshFileToPi3 } from '../../home-lab-setup/copy-ssh-file-to-pi-3/copy-ssh-file-to-pi-3';
import { AnswerContainer } from '@core/answer-container/answer-container';
import { JellyContainer } from '@core/jelly-container/jelly-container';
import { QuestionContainer } from '@core/question-container/question-container';
import { HomeLabSubMenu } from '../../home-lab-setup/home-lab-sub-menu/home-lab-sub-menu';
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
import { MicroFrontEndSubMenu } from '../micro-front-end-sub-menu/micro-front-end-sub-menu';
import { MockMicroFrontEndSubMenu } from '@mock/mock-micro-front-end-sub-menu';
import { MockComment } from '@mock/mock-comment';
import { String } from '@core/string/string';
import { Note } from '@core/note/note';
import { MockString } from '@mock/mock-string';
import { MockNote } from '@mock/mock-note';
import { Property } from '@core/property/property';
import { MockProperty } from '@mock/mock-property';
import { KeyWord } from '@core/key-word/key-word';
import { MockKeyWord } from '@mock/mock-key-word';
import { MethodName } from '@core/method-name/method-name';
import { MockMethodName } from '@mock/mock-method-name';
import { Indent } from '@core/indent/indent';
import { MockIndent } from '@mock/mock-indent';

describe('AngularModuleFederation', () => {
  let component: AngularModuleFederation;
  let fixture: ComponentFixture<AngularModuleFederation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularModuleFederation],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    })
      .overrideComponent(CopySshFileToPi3, {
        remove: {
          imports: [
            MicroFrontEndSubMenu,
            JellyContainer,
            QuestionContainer,
            AnswerContainer,
            CardContainer,
            CardHeader,
            CardBody,
            Comment,
            ClassName,
            String,
            CodeText,
            BlockQuote,
            Note,
            Property,
            KeyWord,
            MethodName,
            Indent,
          ],
        },
        add: {
          imports: [
            MockMicroFrontEndSubMenu,
            MockJellyContainer,
            MockQuestionContainer,
            MockAnswerContainer,
            MockCardContainer,
            MockCardHeader,
            MockCardBody,
            MockComment,
            MockClassName,
            MockString,
            MockCodeText,
            MockBlockQuote,
            MockNote,
            MockProperty,
            MockKeyWord,
            MockMethodName,
            MockIndent,
          ],
        },
      })
      .compileComponents();

    fixture = TestBed.createComponent(AngularModuleFederation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component instance', () => {
    expect(component).toBeTruthy();
  });

  it('should have the correct pageSubtitle property value', () => {
    expect(component.pageSubtitle).toBe('Micro Front Ends - Angular Module Federation');
  });

  it('should render the template successfully', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled).toBeDefined();
  });
});
