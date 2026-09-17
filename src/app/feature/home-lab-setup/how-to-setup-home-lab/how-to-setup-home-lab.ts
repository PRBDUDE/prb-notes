import { Component } from '@angular/core';
import { BasePageWithSubtitle } from '@core/base-page-with-subtitle/base-page-with-subtitle';
import { SubMenu } from '../sub-menu/sub-menu';
import { JellyContainer } from '@core/jelly-container/jelly-container';
import { QuestionContainer } from '@core/question-container/question-container';
import { AnswerContainer } from '@core/answer-container/answer-container';
import { CodeText } from '@core/code-text/code-text';

@Component({
  selector: 'prb-how-to-setup-home-lab',
  imports: [SubMenu, JellyContainer, QuestionContainer, AnswerContainer, CodeText],
  templateUrl: './how-to-setup-home-lab.html',
  styleUrl: '../home-lab-setup.scss',
})
export class HowToSetupHomeLab extends BasePageWithSubtitle {
  override pageSubtitle = 'Home Lab Setup - How to Setup Home Lab';
}
