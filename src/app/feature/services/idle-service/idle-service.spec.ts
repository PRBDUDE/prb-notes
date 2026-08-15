import { ComponentFixture, TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { IdleService } from './idle-service';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { CopySshFileToPi3 } from '../../home-lab-setup/copy-ssh-file-to-pi-3/copy-ssh-file-to-pi-3';
import { JellyContainer } from '@core/jelly-container/jelly-container';
import { QuestionContainer } from '@core/question-container/question-container';
import { AnswerContainer } from '@core/answer-container/answer-container';
import { CodeText } from '@core/code-text/code-text';
import { MockHomeLabSubMenu } from '@mock/mock-home-lab-sub-menu';
import { MockJellyContainer } from '@mock/mock-jelly-container';
import { MockQuestionContainer } from '@mock/mock-question-container';
import { MockAnswerContainer } from '@mock/mock-answer-container';
import { MockCodeText } from '@mock/mock-code-text';
import { ServicesSubMenu } from '../services-sub-menu/services-sub-menu';
import { CardContainer } from '@core/card-container/card-container';
import { CardHeader } from '@core/card-header/card-header';
import { CardBody } from '@core/card-body/card-body';
import { KeyWord } from '@core/key-word/key-word';
import { String } from '@core/string/string';
import { ClassName } from '@core/class-name/class-name';
import { MethodName } from '@core/method-name/method-name';
import { Comment } from '@core/comment/comment';
import { Property } from '@core/property/property';
import { Indent } from '@core/indent/indent';
import { MockCardContainer } from '@mock/mock-card-container';
import { MockCardBody } from '@mock/mock-card-body';
import { MockCardHeader } from '@mock/mock-card-header';
import { MockKeyWord } from '@mock/mock-key-word';
import { MockString } from '@mock/mock-string';
import { MockClassName } from '@mock/mock-class-name';
import { MockComment } from '@mock/mock-comment';
import { MockProperty } from '@mock/mock-property';
import { MockIndent} from '@mock/mock-indent';

describe('IdleService Component', () => {
  let component: IdleService;
  let fixture: ComponentFixture<IdleService>;

  beforeEach(async () => {
    // Override child components or imports if needed for isolated testing
    await TestBed.configureTestingModule({
      imports: [IdleService],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    })
      .overrideComponent(CopySshFileToPi3, {
        remove: {
          imports: [
            ServicesSubMenu,
            JellyContainer,
            QuestionContainer,
            AnswerContainer,
            CodeText,
            CardContainer,
            CardHeader,
            CardBody,
            KeyWord,
            String,
            ClassName,
            MethodName,
            Comment,
            Property,
            Indent,
          ],
        },
        add: {
          imports: [
            MockHomeLabSubMenu,
            MockJellyContainer,
            MockQuestionContainer,
            MockAnswerContainer,
            MockCodeText,
            MockCardContainer,
            MockCardHeader,
            MockCardBody,
            MockKeyWord,
            MockString,
            MockClassName,
            MockComment,
            MockProperty,
            MockIndent,
          ],
        },
      })
      .compileComponents();

    fixture = TestBed.createComponent(IdleService);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have correct default pageSubtitle', () => {
    expect(component.pageSubtitle).toBe('Services - Idle Service');
  });

  it('should contain the data code string block', () => {
    expect(component.data).toBeDefined();
    expect(component.data).toContain('export classIdleService implements OnDestroy');
  });

  describe('init()', () => {
    it('should split data and log code line along with tokens', () => {
      const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {});

      component.init();

      // Verify console log calls
      expect(consoleSpy).toHaveBeenCalledWith(
        "import { Injectable, inject, signal, effect, OnDestroy } from'@angular/core';",
      );
      expect(consoleSpy).toHaveBeenCalledWith('Tokens: ', expect.anything());

      consoleSpy.mockRestore();
    });
  });
});
