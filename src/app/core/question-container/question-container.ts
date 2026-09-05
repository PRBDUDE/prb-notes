import { Component } from '@angular/core';

@Component({
  selector: 'question-container',
  imports: [],
  template: `
    <ng-content></ng-content>
  `,
  styleUrl: './question-container.scss',
  host: {
    class: 'question-container',
    role: 'container'
  }
})
export class QuestionContainer {}
