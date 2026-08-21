import { Component } from '@angular/core';
import { CssProperty } from '../css-property';
import { CssClass } from '../css-class';

@Component({
  selector: 'css-footer',
  imports: [CssClass],
  template: `<prb-css-class [className]="'footer'" [properties]="footerProperties" />`,
})
export class CssFooter {
  footerProperties: CssProperty[] = [
    { property: 'grid-area', value: 'footer' },
    { property: 'background-color', value: 'black' },
    { property: 'color', value: 'white' },
  ];
}
