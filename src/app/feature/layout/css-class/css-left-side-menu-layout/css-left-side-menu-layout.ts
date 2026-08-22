import { Component } from '@angular/core';
import { CssProperty } from '../css-property';
import { CssClass } from '../css-class';
import { GetDemoPageWidth } from '../get-demo-page-width';

@Component({
  selector: 'css-left-side-menu-layout',
  imports: [CssClass],
  template: `<prb-css-class [className]="'left-menu-layout'" [properties]="layoutProperties" />`,
})
export class CssLeftSideMenuLayout extends GetDemoPageWidth {
  layoutProperties: CssProperty[] = [
    { property: 'width', value: this.getPageWidth() },
    { property: 'border', value: '1px solid white' },
    { property: 'display', value: 'grid' },
    {
      property: 'grid-template-areas',
      value: ['"header header"', '"menu-bar menu-bar"', '"left-menu content"', '"footer footer"'],
    },
    { property: 'grid-template-columns', value: '100px auto' },
  ];
}
