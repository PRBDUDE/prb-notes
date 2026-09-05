import { Component } from '@angular/core';

@Component({
  selector: 'card-body',
  imports: [],
  template: `
    <ng-content></ng-content>
  `,
  styleUrl: './card-body.scss',
  host: {
    class: 'card-body',
    role: 'container',
  }
})
export class CardBody {}
