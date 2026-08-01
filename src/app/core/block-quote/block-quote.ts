import { Component } from '@angular/core';

@Component({
  selector: 'block-quote',
  imports: [],
  template: `
    <ng-content></ng-content>
  `,
  styleUrl: './block-quote.scss',
})
export class BlockQuote {}
