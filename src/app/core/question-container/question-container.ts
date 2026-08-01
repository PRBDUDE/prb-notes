import { Component } from '@angular/core';

@Component({
  selector: 'question-container',
  imports: [],
  template: `
    <ng-content></ng-content>
  `,
  styleUrl: './question-container.scss',
})
export class QuestionContainer {}
