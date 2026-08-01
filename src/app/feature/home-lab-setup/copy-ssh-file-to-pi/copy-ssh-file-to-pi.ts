import { Component } from '@angular/core';
import { BasePageWithSubtitle } from '@core/base-page-with-subtitle/base-page-with-subtitle';
import { SubMenu } from '../sub-menu/sub-menu';
import { CodeText } from '@core/code-text/code-text';
import { JellyContainer } from '@core/jelly-container/jelly-container';
import { QuestionContainer } from '@core/question-container/question-container';
import { AnswerContainer } from '@core/answer-container/answer-container';
import { CardContainer } from '@core/card-container/card-container';
import { CardHeader } from '@core/card-header/card-header';
import { CardBody } from '@core/card-body/card-body';
import { BlockQuote } from '@core/block-quote/block-quote';
import { Indent1 } from '@core/indent-1/indent-1';
import { Comment } from '@core/comment/comment';
import { ClassName } from '@core/class-name/class-name';

@Component({
  selector: 'prb-copy-ssh-file-to-pi',
  imports: [
    SubMenu,
    CodeText,
    JellyContainer,
    QuestionContainer,
    AnswerContainer,
    CardContainer,
    CardHeader,
    CardBody,
    BlockQuote,
    Indent1,
    Comment,
    ClassName,
  ],
  templateUrl: './copy-ssh-file-to-pi.html',
  styleUrl: '../home-lab-setup.scss',
})
export class CopySshFileToPi extends BasePageWithSubtitle {
  override pageSubtitle = 'Home Lab Setup - Copy SSH File to PI';
}
