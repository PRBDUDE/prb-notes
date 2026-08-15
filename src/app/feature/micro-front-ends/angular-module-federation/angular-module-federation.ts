import { Component } from '@angular/core';
import { BasePageWithSubtitle } from '@core/base-page-with-subtitle/base-page-with-subtitle';
import { MicroFrontEndSubMenu } from '../micro-front-end-sub-menu/micro-front-end-sub-menu';
import { JellyContainer } from '@core/jelly-container/jelly-container';
import { QuestionContainer } from '@core/question-container/question-container';
import { AnswerContainer } from '@core/answer-container/answer-container';
import { CardContainer } from '@core/card-container/card-container';
import { CardHeader } from '@core/card-header/card-header';
import { CardBody } from '@core/card-body/card-body';
import { Comment } from '@core/comment/comment';
import { ClassName } from '@core/class-name/class-name';
import { String } from '@core/string/string';
import { CodeText } from '@core/code-text/code-text';
import { BlockQuote } from '@core/block-quote/block-quote';
import { Note } from '@core/note/note';
import { Property } from '@core/property/property';
import { KeyWord } from '@core/key-word/key-word';
import { MethodName } from '@core/method-name/method-name';
import { Indent } from '@core/indent/indent';

@Component({
  selector: 'prb-angular-module-federation',
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
  templateUrl: './angular-module-federation.html',
  styleUrl: '../micro-front-ends.scss',
})
export class AngularModuleFederation extends BasePageWithSubtitle {
  override pageSubtitle = 'Micro Front Ends - Angular Module Federation';
}
