import { Component } from '@angular/core';
import { BasePageWithSubtitle } from '@core/base-page-with-subtitle';
import { HomeLabSetupSubMenu } from '../home-lab-setup-sub-menu/home-lab-setup-sub-menu';
import { JellyContainer } from '@core/jelly-container';
import { QuestionContainer } from '@core/question-container';
import { AnswerContainer } from '@core/answer-container';
import { CodeText } from '@core/code-text';
import { CardContainer } from '@core/card-container';
import { CardHeader } from '@core/card-header';
import { CardBody } from '@core/card-body';
import { BlockQuote } from '@core/block-quote';
import { ClassName } from '@core/class-name';
import { HtmlTag } from '@core/html-tag';
import { String } from '@core/string';

@Component({
  selector: 'prb-setup-ssh',
  imports: [
    HomeLabSetupSubMenu,
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
