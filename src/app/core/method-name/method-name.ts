import { Component } from '@angular/core';

@Component({
  selector: 'method-name',
  imports: [],
  template: ` <ng-content></ng-content> `,
  styles: `
    :host {
      display: inline;
      font-size: inherit;
      color: var(--color-method-name);
      background: transparent;
    }
  `,
})
export class MethodName {}
