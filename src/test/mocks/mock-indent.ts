import { Component, input } from '@angular/core';

@Component({ selector: 'prb-indent', template: `` })
export class MockIndent {
  level = input<1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9>(1);
}
