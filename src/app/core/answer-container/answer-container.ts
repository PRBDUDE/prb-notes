import { Component } from '@angular/core';

@Component({
  selector: 'answer-container',
  imports: [],
  template: `
    <ng-content></ng-content>
  `,
  styleUrl: './answer-container.scss',
  host: {
    class: 'answer-container',
    role: 'container',
  }
})
export class AnswerContainer {}
