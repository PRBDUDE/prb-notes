import { Component } from '@angular/core';
import { CssProperty } from '../css-property';
import { CssClass } from '../css-class';

@Component({
  selector: 'css-right-menu',
  imports: [CssClass],
  template: `<prb-css-class [className]="'right-menu'" [properties]="menuProperties" />`,
})
export class CssRightMenu {
  menuProperties: CssProperty[] = [
    { property: 'grid-area', value: 'right-menu' },
    { property: 'background-color', value: 'lightgray' },
    { property: 'color', value: 'black' },
  ];
}
