import { Component } from '@angular/core';

@Component({
  selector: 'numeric-value',
  imports: [],
  template: `<ng-content></ng-content>`,
  styles: `
    :host {
      display: inline;
      font-size: inherit;
      color: var(--color-number-value);
      background: transparent;
    }
  `,
})
export class NumericValue {}
