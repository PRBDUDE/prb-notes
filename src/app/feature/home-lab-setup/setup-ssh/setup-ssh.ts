import { Component } from '@angular/core';
import { BasePageWithSubtitle } from '@core/base-page-with-subtitle';
import { HomeLabSetupSubMenu } from '../home-lab-setup-sub-menu/home-lab-setup-sub-menu';
import { JellyContainer } from '@core/jelly-container';
import { QuestionContainer } from '@core/question-container';
import { AnswerContainer } from '@core/answer-container';
import { CardContainer } from '@core/card-container';
import { CardHeader } from '@core/card-header';
import { CardBody } from '@core/card-body';
import { CodeColors } from '@core/code-colors';

@Component({
  selector: 'prb-setup-ssh',
  imports: [
    HomeLabSetupSubMenu,
    JellyContainer,
    QuestionContainer,
    AnswerContainer,
    CardContainer,
    CardHeader,
    CardBody,
    CodeColors,
  ],
  templateUrl: './setup-ssh.html',
  styleUrl: '../home-lab-setup.scss',
})
export class SetupSsh extends BasePageWithSubtitle {
  override pageSubtitle = 'Home Lab Setup - Setup SSH';
}
