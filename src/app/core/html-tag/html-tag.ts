import { Component } from '@angular/core';

@Component({
  selector: 'html-tag',
  imports: [],
  template: `<ng-content></ng-content>`,
  styles: `
    :host {
      display: inline;
      font-size: inherit;
      color: var(--color-html-tag);
      background: transparent;
    }
  `,
})
export class HtmlTag {}
