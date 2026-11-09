import { ComponentFixture, TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { IdleService } from './idle-service';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { JellyContainer } from '@core/jelly-container';
import { QuestionContainer } from '@core/question-container';
import { AnswerContainer } from '@core/answer-container';
import { MockJellyContainer } from '@mock/mock-jelly-container';
import { MockQuestionContainer } from '@mock/mock-question-container';
import { MockAnswerContainer } from '@mock/mock-answer-container';
import { MockCodeText } from '@mock/mock-code-text';
import { ServicesSubMenu } from '../services-sub-menu/services-sub-menu';
import { CardContainer } from '@core/card-container';
import { CardHeader } from '@core/card-header';
import { CardBody } from '@core/card-body';
import { CodeColors } from '@core/code-colors';
import { Indent } from '@core/indent';
import { MockCardContainer } from '@mock/mock-card-container';
import { MockCardBody } from '@mock/mock-card-body';
import { MockCardHeader } from '@mock/mock-card-header';
import { MockKeyWord } from '@mock/mock-key-word';
import { MockString } from '@mock/mock-string';
import { MockClassName } from '@mock/mock-class-name';
import { MockComment } from '@mock/mock-comment';
import { MockProperty } from '@mock/mock-property';
import { MockIndent } from '@mock/mock-indent';
import { MockServicesSubMenu } from '@mock/mock-services-sub-menu';
import { MockMethodName } from '@mock/mock-method-name';

describe('IdleService Component', () => {
  let component: IdleService;
  let fixture: ComponentFixture<IdleService>;

  beforeEach(async () => {
    // Override child components or imports if needed for isolated testing
    await TestBed.configureTestingModule({
      imports: [IdleService],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    })
      .overrideComponent(IdleService, {
        remove: {
          imports: [
            ServicesSubMenu,
            JellyContainer,
            QuestionContainer,
            AnswerContainer,
            CodeColors,
            CardContainer,
            CardHeader,
            CardBody,
            Indent,
          ],
        },
        add: {
          imports: [
            MockServicesSubMenu,
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
            MockMethodName,
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
