import { Component } from '@angular/core';
import { HomeLabSetupSubMenu } from '../home-lab-setup-sub-menu/home-lab-setup-sub-menu';
import { BasePageWithSubtitle } from '@core/base-page-with-subtitle';
import { CodeText } from '@core/code-text';
import { JellyContainer } from '@core/jelly-container';
import { QuestionContainer } from '@core/question-container';
import { AnswerContainer } from '@core/answer-container';
import { CardContainer } from '@core/card-container';
import { CardHeader } from '@core/card-header';
import { CardBody } from '@core/card-body';
import { BlockQuote } from '@core/block-quote';
import { Comment } from '@core/comment';
import { ClassName } from '@core/class-name';
import { Indent } from '@core/indent';

@Component({
  selector: 'prb-copy-ssh-file-to-pi',
  imports: [
    HomeLabSetupSubMenu,
    CodeText,
    JellyContainer,
    QuestionContainer,
    AnswerContainer,
    CardContainer,
    CardHeader,
    CardBody,
    BlockQuote,
    Comment,
    ClassName,
    Indent,
  ],
  templateUrl: './copy-ssh-file-to-pi.html',
  styleUrl: '../home-lab-setup.scss',
})
export class CopySshFileToPi extends BasePageWithSubtitle {
  override pageSubtitle = 'Home Lab Setup - Copy SSH File to PI';
}
