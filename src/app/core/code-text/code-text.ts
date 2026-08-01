import { Component } from '@angular/core';

@Component({
  selector: 'code-text',
  imports: [],
  template: `
    <ng-content></ng-content>
  `,
  styleUrl: './code-text.scss',
})
export class CodeText {}
