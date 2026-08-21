import { Component, input } from '@angular/core';
import { HtmlTag } from '@core/html-tag/html-tag';
import { Indent } from '@core/indent/indent';
import { String } from '@core/string/string';
import { CssProperty } from './css-property';

@Component({
  selector: 'prb-css-class',
  imports: [HtmlTag, Indent, String],
  templateUrl: './css-class.html',
})
export class CssClass {
  className = input.required<string>();
  properties = input.required<CssProperty[]>();
  protected readonly Array = Array;
}
