import { Component } from '@angular/core';

@Component({
  selector: 'card-header',
  imports: [],
  template: `
    <ng-content></ng-content>
  `,
  styleUrl: './card-header.scss',
})
export class CardHeader {}
