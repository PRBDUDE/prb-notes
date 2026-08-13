import { Component } from '@angular/core';
import { BasePageWithSubtitle } from '@core/base-page-with-subtitle/base-page-with-subtitle';
import { AnswerContainer } from '@core/answer-container/answer-container';
import { JellyContainer } from '@core/jelly-container/jelly-container';
import { QuestionContainer } from '@core/question-container/question-container';
import { HomeLabSubMenu } from '../home-lab-sub-menu/home-lab-sub-menu';
import { CodeText } from '@core/code-text/code-text';
import { CardBody } from '@core/card-body/card-body';
import { CardHeader } from '@core/card-header/card-header';
import { CardContainer } from '@core/card-container/card-container';
import { BlockQuote } from '@core/block-quote/block-quote';
import { ClassName } from '@core/class-name/class-name';

@Component({
  selector: 'prb-copy-ssh-file-to-pi-4',
  imports: [
    AnswerContainer,
    JellyContainer,
    QuestionContainer,
    HomeLabSubMenu,
    CodeText,
    CardBody,
    CardHeader,
    CardContainer,
    BlockQuote,
    ClassName,
  ],
  templateUrl: './copy-ssh-file-to-pi-4.html',
  styleUrl: '../home-lab-setup.scss',
})
export class CopySshFileToPi4 extends BasePageWithSubtitle {
  override pageSubtitle = 'Home Lab Setup - Copy SSH File to PI (4)';
}
