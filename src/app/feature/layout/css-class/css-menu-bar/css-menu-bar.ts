import { Component } from '@angular/core';
import { CssProperty } from '../css-property';
import { CssClass } from '../css-class';

@Component({
  selector: 'css-menu-bar',
  imports: [CssClass],
  template: `<prb-css-class [className]="'menu-bar'" [properties]="menuBarProperties" />`,
})
export class CssMenuBar {
  menuBarProperties: CssProperty[] = [
    { property: 'grid-area', value: 'menu-bar' },
    { property: 'background-color', value: 'lightgray' },
    { property: 'color', value: 'black' },
  ];
}
