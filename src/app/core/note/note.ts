import { Component } from '@angular/core';

@Component({
  selector: 'prb-note',
  imports: [],
  template: ` <ng-content></ng-content> `,
  styles: `
    :host {
      display: inline;
      font-size: inherit;
      font-weight: bold;
      color: var(--color-note);
      background: transparent;
    }
  `,
  host: {
    class: 'prb-note',
    role: 'container',
  },
})
export class Note {}
