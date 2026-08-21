import { Component } from '@angular/core';
import { CssProperty } from '../css-property';
import { CssClass } from '../css-class';

@Component({
  selector: 'css-no-side-menu-layout',
  imports: [CssClass],
  template: `<prb-css-class [className]="'layout'" [properties]="layoutProperties" />`,
})
export class CssNoSideMenuLayout {
  layoutProperties: CssProperty[] = [
    { property: 'width', value: '500px' },
    { property: 'border', value: '1px solid white' },
    { property: 'display', value: 'grid' },
    { property: 'grid-template-areas', value: ['"header"', '"menu-bar"', '"content"', '"footer"'] },
    { property: 'grid-template-columns', value: 'auto' },
  ];
}
