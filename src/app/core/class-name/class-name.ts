import { Component } from '@angular/core';

@Component({
  selector: 'class-name',
  imports: [],
  template: ` <ng-content></ng-content> `,
  styles: `
    :host {
      display: inline;
      font-size: inherit;
      color: var(--color-class-name);
      background: transparent;
    }
  `,
})
export class ClassName {}
