import { Component } from '@angular/core';

@Component({
  selector: 'key-word',
  imports: [],
  template: `<ng-content></ng-content>`,
  styles: `
    :host {
      display: inline;
      font-size: inherit;
      color: var(--color-key-word);
      background: transparent;
    }
  `,
})
export class KeyWord {}
