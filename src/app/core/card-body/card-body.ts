import { Component } from '@angular/core';

@Component({
  selector: 'card-body',
  imports: [],
  template: `
    <ng-content></ng-content>
  `,
  styleUrl: './card-body.scss',
})
export class CardBody {}
