import { Component } from '@angular/core';
import { HomeLabSetupSubMenu } from '../home-lab-setup-sub-menu/home-lab-setup-sub-menu';
import { BasePageWithSubtitle } from '@core/base-page-with-subtitle';
import { AnswerContainer } from '@core/answer-container';
import { JellyContainer } from '@core/jelly-container';
import { QuestionContainer } from '@core/question-container';
import { CardBody } from '@core/card-body';
import { CardHeader } from '@core/card-header';
import { CardContainer } from '@core/card-container';
import { CodeColors } from '@core/code-colors';

@Component({
  selector: 'prb-copy-ssh-file-to-pi-4',
  imports: [
    AnswerContainer,
    JellyContainer,
    QuestionContainer,
    HomeLabSetupSubMenu,
    CardBody,
    CardHeader,
    CardContainer,
    CodeColors,
  ],
  templateUrl: './copy-ssh-file-to-pi-4.html',
  styleUrl: '../home-lab-setup.scss',
})
export class CopySshFileToPi4 extends BasePageWithSubtitle {
  override pageSubtitle = 'Home Lab Setup - Copy SSH File to PI (4)';
}
