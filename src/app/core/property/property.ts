import { Component } from '@angular/core';

@Component({
  selector: 'prb-property',
  imports: [],
  template: ` <ng-content></ng-content> `,
  styles: `
    :host {
      display: inline;
      font-size: inherit;
      color: var(--color-property);
      background: transparent;
    }
  `,
})
export class Property {}
