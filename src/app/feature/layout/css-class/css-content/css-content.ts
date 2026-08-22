import { Component } from '@angular/core';
import { CssClass } from '../css-class';
import { CssProperty } from '../css-property';

@Component({
  selector: 'css-content',
  imports: [CssClass],
  template: `<prb-css-class [className]="'content'" [properties]="contentProperties" />`,
})
export class CssContent {
  contentProperties: CssProperty[] = [
    { property: 'grid-area', value: 'content' },
    { property: 'color', value: 'black' },
  ];
}
