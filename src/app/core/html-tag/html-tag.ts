import { Component } from '@angular/core';

@Component({
  selector: 'html-tag',
  imports: [],
  template: `
    <ng-content></ng-content>
  `,
  styleUrl: './html-tag.scss',
})
export class HtmlTag {}
