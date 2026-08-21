import { Component } from '@angular/core';
import { HomeLabSubMenu } from '../home-lab-sub-menu/home-lab-sub-menu';
import { BasePageWithSubtitle } from '@core/base-page-with-subtitle';
import { JellyContainer } from '@core/jelly-container';
import { QuestionContainer } from '@core/question-container';
import { AnswerContainer } from '@core/answer-container';
import { CodeText } from '@core/code-text';
import { CardContainer } from '@core/card-container';
import { CardHeader } from '@core/card-header';
import { CardBody } from '@core/card-body';
import { BlockQuote } from '@core/block-quote';
import { ClassName } from '@core/class-name';

@Component({
  selector: 'prb-copy-ssh-file-to-pi-2',
  imports: [
    HomeLabSubMenu,
    JellyContainer,
    QuestionContainer,
    AnswerContainer,
    CodeText,
    CardContainer,
    CardHeader,
    CardBody,
    BlockQuote,
    ClassName,
  ],
  templateUrl: './copy-ssh-file-to-pi-2.html',
  styleUrl: '../home-lab-setup.scss',
})
export class CopySshFileToPi2 extends BasePageWithSubtitle {
  override pageSubtitle = 'Home Lab Setup - Copy SSH File to PI (2)';
}
