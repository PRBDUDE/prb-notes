import { Component } from '@angular/core';
import { HomeLabSetupSubMenu } from '../home-lab-setup-sub-menu/home-lab-setup-sub-menu';
import { BasePageWithSubtitle } from '@core/base-page-with-subtitle';
import { JellyContainer } from '@core/jelly-container';
import { QuestionContainer } from '@core/question-container';
import { AnswerContainer } from '@core/answer-container';
import { CardContainer } from '@core/card-container';
import { CardHeader } from '@core/card-header';
import { CardBody } from '@core/card-body';
import { CodeColors } from '@core/code-colors';

@Component({
  selector: 'prb-copy-ssh-file-to-pi-2',
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
  templateUrl: './copy-ssh-file-to-pi-2.html',
  styleUrl: '../home-lab-setup.scss',
})
export class CopySshFileToPi2 extends BasePageWithSubtitle {
  override pageSubtitle = 'Home Lab Setup - Copy SSH File to PI (2)';
}
