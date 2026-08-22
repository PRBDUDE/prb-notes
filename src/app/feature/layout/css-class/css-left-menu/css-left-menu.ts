import { Component } from '@angular/core';
import { CssProperty } from '../css-property';
import { CssClass } from '../css-class';

@Component({
  selector: 'css-left-menu',
  imports: [CssClass],
  template: `<prb-css-class [className]="'left-menu'" [properties]="menuProperties" />`,
})
export class CssLeftMenu {
  menuProperties: CssProperty[] = [
    { property: 'grid-area', value: 'left-menu' },
    { property: 'background-color', value: 'lightgray' },
    { property: 'color', value: 'black' },
  ];
}
