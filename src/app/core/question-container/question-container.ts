import { Component } from '@angular/core';

@Component({
  selector: 'question-container',
  imports: [],
  template: `<ng-content></ng-content>`,
  styles: `
    :host {
      display: block;
      font-family: Arial, Helvetica, sans-serif;
      font-size: 12pt;
      color: var(--color-question-text);
      background: var(--color-question-background);
      border-radius: 20px 5px 20px 20px;
      margin: 0 0 20px auto;
      width: fit-content;
      max-width: 450px;
      font-weight: bold;
      padding: 10px;
    }
  `,
  host: {
    class: 'question-container',
    role: 'container',
  },
})
export class QuestionContainer {}
