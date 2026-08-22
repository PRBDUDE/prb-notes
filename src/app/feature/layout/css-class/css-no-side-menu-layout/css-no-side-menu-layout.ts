import { Component } from '@angular/core';
import { CssProperty } from '../css-property';
import { CssClass } from '../css-class';
import { GetDemoPageWidth } from '../get-demo-page-width';

@Component({
  selector: 'css-no-side-menu-layout',
  imports: [CssClass],
  template: `<prb-css-class [className]="'layout'" [properties]="layoutProperties" />`,
})
export class CssNoSideMenuLayout extends GetDemoPageWidth {
  layoutProperties: CssProperty[] = [
    { property: 'width', value: this.getPageWidth() },
    { property: 'border', value: '1px solid white' },
    { property: 'display', value: 'grid' },
    { property: 'grid-template-areas', value: ['"header"', '"menu-bar"', '"content"', '"footer"'] },
    { property: 'grid-template-columns', value: 'auto' },
  ];
}
