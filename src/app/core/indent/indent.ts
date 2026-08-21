import { Component, input } from '@angular/core';

export type IndentLevelType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

@Component({
  selector: 'prb-indent',
  imports: [],
  template: `
    <div [class]="'indent-' + level()">
      <ng-content></ng-content>
    </div>
  `,
  styleUrl: './indent.scss',
})
export class Indent {
  level = input<IndentLevelType>(1);
}
