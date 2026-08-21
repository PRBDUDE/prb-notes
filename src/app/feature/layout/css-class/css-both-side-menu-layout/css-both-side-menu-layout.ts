import { Component } from '@angular/core';
import { CssProperty } from '../css-property';
import { CssClass } from '../css-class';

@Component({
  selector: 'css-both-side-menu-layout',
  imports: [CssClass],
  template: `<prb-css-class
    [className]="'both-side-menu-layout'"
    [properties]="layoutProperties"
  />`,
})
export class CssBothSideMenuLayout {
  layoutProperties: CssProperty[] = [
    { property: 'width', value: '500px' },
    { property: 'border', value: '1px solid white' },
    { property: 'display', value: 'grid' },
    {
      property: 'grid-template-areas',
      value: [
        '"header header header"',
        '"menu-bar menu-bar menu-bar"',
        '"left-menu content right-menu"',
        '"footer footer footer"',
      ],
    },
    { property: 'grid-template-columns', value: '100px auto 100px' },
  ];
}
