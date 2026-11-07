import { Component } from '@angular/core';

@Component({
  selector: 'prb-string',
  imports: [],
  template: `<ng-content></ng-content>`,
  styles: `
    :host {
      display: inline;
      font-size: inherit;
      color: var(--color-string);
      background: transparent;
    }
  `,
})
export class String {}
