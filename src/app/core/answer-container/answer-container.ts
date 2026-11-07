import { Component } from '@angular/core';

@Component({
  selector: 'answer-container',
  imports: [],
  template: ` <ng-content></ng-content> `,
  styles: `
    :host {
      display: block;
      font-size: 12pt;
      color: inherit;
      background: transparent;
      line-height: 1.5;
    }
  `,
  host: {
    class: 'answer-container',
    role: 'container',
  },
})
export class AnswerContainer {}
