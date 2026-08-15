import { Component } from '@angular/core';
import { BasePageWithSubtitle } from '@core/base-page-with-subtitle/base-page-with-subtitle';
import { MicroFrontEndSubMenu } from '../micro-front-end-sub-menu/micro-front-end-sub-menu';
import { Note } from '@core/note/note';
import { HtmlTag } from '@core/html-tag/html-tag';
import { JellyContainer } from '@core/jelly-container/jelly-container';
import { QuestionContainer } from '@core/question-container/question-container';
import { AnswerContainer } from '@core/answer-container/answer-container';
import { Indent } from '@core/indent/indent';

@Component({
  selector: 'prb-common-menu',
  imports: [
    MicroFrontEndSubMenu,
    Note,
    HtmlTag,
    JellyContainer,
    QuestionContainer,
    AnswerContainer,
    Indent,
  ],
  templateUrl: './common-menu.html',
  styleUrl: '../micro-front-ends.scss',
})
export class CommonMenu extends BasePageWithSubtitle {
  override pageSubtitle = 'Micro Front Ends - Common Menu';
}
