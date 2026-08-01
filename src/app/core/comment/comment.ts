import { Component } from '@angular/core';

@Component({
  selector: 'prb-comment',
  imports: [],
  template: `
    <ng-content></ng-content>
  `,
  styleUrl: './comment.scss',
})
export class Comment {}
