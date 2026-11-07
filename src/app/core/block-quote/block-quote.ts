import { Component } from '@angular/core';

@Component({
  selector: 'block-quote',
  imports: [],
  template: ` <ng-content></ng-content> `,
  styles: `
    :host {
      display: block;
      color: inherit;
      background: inherit;
      border-left: 4px solid var(--color-block-quote-border);
      padding-left: 1em;
      margin-left: 2em;
      font-size: 0.95em;
    }
  `,
})
export class BlockQuote {}
