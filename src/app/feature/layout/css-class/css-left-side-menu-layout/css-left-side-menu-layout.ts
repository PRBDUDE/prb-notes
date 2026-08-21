import { Component } from '@angular/core';
import { CssProperty } from '../css-property';
import { CssClass } from '../css-class';

@Component({
  selector: 'css-left-side-menu-layout',
  imports: [CssClass],
  template: `<prb-css-class [className]="'left-menu-layout'" [properties]="layoutProperties" />`,
})
export class CssLeftSideMenuLayout {
  layoutProperties: CssProperty[] = [
    { property: 'width', value: '500px' },
    { property: 'border', value: '1px solid white' },
    { property: 'display', value: 'grid' },
    {
      property: 'grid-template-areas',
      value: ['"header header"', '"menu-bar menu-bar"', '"left-menu content"', '"footer footer"'],
    },
    { property: 'grid-template-columns', value: '100px auto' },
  ];
}
