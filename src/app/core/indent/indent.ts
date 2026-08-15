import { Component, input } from '@angular/core';

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
  level = input<1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9>(1);
}
