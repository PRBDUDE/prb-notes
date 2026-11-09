import { Component } from '@angular/core';
import { BasePageWithSubtitle } from '@core/base-page-with-subtitle';
import { MicroFrontEndSubMenu } from '../micro-front-end-sub-menu/micro-front-end-sub-menu';
import { CodeColors } from '@core/code-colors';
import { JellyContainer } from '@core/jelly-container';
import { QuestionContainer } from '@core/question-container';
import { AnswerContainer } from '@core/answer-container';
import { Indent } from '@core/indent';

@Component({
  selector: 'prb-common-menu',
  imports: [
    MicroFrontEndSubMenu,
    CodeColors,
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
