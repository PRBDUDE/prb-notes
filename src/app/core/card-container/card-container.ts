import { Component } from '@angular/core';

@Component({
  selector: 'card-container',
  imports: [],
  template: ` <ng-content></ng-content> `,
  styleUrl: './card-container.scss',
  host: {
    class: 'card-container',
    role: 'container',
  },
})
export class CardContainer {}
