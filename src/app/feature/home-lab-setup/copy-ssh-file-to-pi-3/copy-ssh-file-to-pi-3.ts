import { Component } from '@angular/core';
import { HomeLabSubMenu } from '../home-lab-sub-menu/home-lab-sub-menu';
import { BasePageWithSubtitle } from '@core/base-page-with-subtitle';
import { AnswerContainer } from '@core/answer-container';
import { JellyContainer } from '@core/jelly-container';
import { QuestionContainer } from '@core/question-container';
import { CardContainer } from '@core/card-container';
import { CardHeader } from '@core/card-header';
import { CardBody } from '@core/card-body';
import { CodeText } from '@core/code-text';
import { BlockQuote } from '@core/block-quote';
import { ClassName } from '@core/class-name';

@Component({
  selector: 'prb-copy-ssh-file-to-pi-3',
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
    ClassName,
  ],
  templateUrl: './copy-ssh-file-to-pi-3.html',
  styleUrl: '../home-lab-setup.scss',
})
export class CopySshFileToPi3 extends BasePageWithSubtitle {
  override pageSubtitle = 'Home Lab Setup - Copy SSH File to PI (3)';
}
