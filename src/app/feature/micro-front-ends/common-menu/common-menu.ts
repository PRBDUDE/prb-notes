import { Component } from '@angular/core';
import { BasePageWithSubtitle } from '@core/base-page-with-subtitle/base-page-with-subtitle';
import { SubMenu } from '../sub-menu/sub-menu';
import { Note } from '@core/note/note';
import { Indent1 } from '@core/indent-1/indent-1';
import { HtmlTag } from '@core/html-tag/html-tag';
import { JellyContainer } from '@core/jelly-container/jelly-container';
import { QuestionContainer } from '@core/question-container/question-container';
import { AnswerContainer } from '@core/answer-container/answer-container';

@Component({
  selector: 'prb-common-menu',
  imports: [SubMenu, Note, Indent1, HtmlTag, JellyContainer, QuestionContainer, AnswerContainer],
  templateUrl: './common-menu.html',
  styleUrl: '../micro-front-ends.scss',
})
export class CommonMenu extends BasePageWithSubtitle {
  override pageSubtitle = 'Micro Front Ends - Common Menu';
}
