import { Component } from '@angular/core';
import { BasePageWithSubtitle } from '@core/base-page-with-subtitle';
import { MicroFrontEndSubMenu } from '../micro-front-end-sub-menu/micro-front-end-sub-menu';
import { JellyContainer } from '@core/jelly-container';
import { QuestionContainer } from '@core/question-container';
import { AnswerContainer } from '@core/answer-container';
import { CardContainer } from '@core/card-container';
import { CardHeader } from '@core/card-header';
import { CardBody } from '@core/card-body';
import { CodeColors } from '@core/code-colors';
import { Indent } from '@core/indent';

@Component({
  selector: 'prb-angular-module-federation',
  imports: [
    MicroFrontEndSubMenu,
    JellyContainer,
    QuestionContainer,
    AnswerContainer,
    CardContainer,
    CardHeader,
    CardBody,
    CodeColors,
    Indent,
  ],
  templateUrl: './angular-module-federation.html',
  styleUrl: '../micro-front-ends.scss',
})
export class AngularModuleFederation extends BasePageWithSubtitle {
  override pageSubtitle = 'Micro Front Ends - Angular Module Federation';
}
