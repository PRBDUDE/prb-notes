import { Component } from '@angular/core';

@Component({
  selector: 'prb-comment',
  imports: [],
  template: ` <ng-content></ng-content> `,
  styles: `
    :host {
      display: inline;
      font-size: inherit;
      color: var(--color-comment);
      background: transparent;
    }
  `,
})
export class Comment {}
