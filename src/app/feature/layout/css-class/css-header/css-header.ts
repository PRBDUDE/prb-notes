import { Component } from '@angular/core';
import { CssProperty } from '../css-property';
import { CssClass } from '../css-class';

@Component({
  selector: 'css-header',
  imports: [CssClass],
  template: `<prb-css-class [className]="'header'" [properties]="headerProperties" />`,
})
export class CssHeader {
  headerProperties: CssProperty[] = [
    { property: 'grid-area', value: 'header' },
    { property: 'background-color', value: 'black' },
    { property: 'color', value: 'white' },
  ];
}
