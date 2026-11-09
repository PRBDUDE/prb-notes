import { Component, input } from '@angular/core';
import { CodeColors } from '@core/code-colors';
import { Indent } from '@core/indent/indent';
import { CssProperty } from './css-property';

@Component({
  selector: 'prb-css-class',
  imports: [CodeColors, Indent],
  templateUrl: './css-class.html',
  styleUrl: './css-class.scss'
})
export class CssClass {
  className = input.required<string>();
  properties = input.required<CssProperty[]>();
  protected readonly Array = Array;
}
