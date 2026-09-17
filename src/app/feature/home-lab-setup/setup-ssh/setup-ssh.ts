import { Component } from '@angular/core';
import { BasePageWithSubtitle } from '@core/base-page-with-subtitle/base-page-with-subtitle';
import { SubMenu } from '../sub-menu/sub-menu';
import { JellyContainer } from '@core/jelly-container/jelly-container';
import { QuestionContainer } from '@core/question-container/question-container';
import { AnswerContainer } from '@core/answer-container/answer-container';
import { CodeText } from '@core/code-text/code-text';
import { CardContainer } from '@core/card-container/card-container';
import { CardHeader } from '@core/card-header/card-header';
import { CardBody } from '@core/card-body/card-body';
import { BlockQuote } from '@core/block-quote/block-quote';
import { ClassName } from '@core/class-name/class-name';
import { HtmlTag } from '@core/html-tag/html-tag';
import { String } from '@core/string/string';

@Component({
  selector: 'prb-setup-ssh',
  imports: [
    SubMenu,
    JellyContainer,
    QuestionContainer,
    AnswerContainer,
    CodeText,
    CardContainer,
    CardHeader,
    CardBody,
    BlockQuote,
    ClassName,
    HtmlTag,
    String,
  ],
  templateUrl: './setup-ssh.html',
  styleUrl: '../home-lab-setup.scss',
})
export class SetupSsh extends BasePageWithSubtitle {
  override pageSubtitle = 'Home Lab Setup - Setup SSH';
}
