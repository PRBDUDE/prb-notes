import { Component } from '@angular/core';
import { BasePageWithSubtitle } from '@core/base-page-with-subtitle';
import { HomeLabSetupSubMenu } from '../home-lab-setup-sub-menu/home-lab-setup-sub-menu';
import { JellyContainer } from '@core/jelly-container';
import { QuestionContainer } from '@core/question-container';
import { AnswerContainer } from '@core/answer-container';
import { CodeColors } from '@core/code-colors';

@Component({
  selector: 'prb-how-to-setup-home-lab',
  imports: [HomeLabSetupSubMenu, JellyContainer, QuestionContainer, AnswerContainer, CodeColors],
  templateUrl: './how-to-setup-home-lab.html',
  styleUrl: '../home-lab-setup.scss',
})
export class HowToSetupHomeLab extends BasePageWithSubtitle {
  override pageSubtitle = 'Home Lab Setup - How to Setup Home Lab';
}
