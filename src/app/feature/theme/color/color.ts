import { Component } from '@angular/core';
import { BasePageWithSubtitle } from '@core/base-page-with-subtitle/base-page-with-subtitle';
import { ThemeSubMenu } from '../theme-sub-menu/theme-sub-menu';
import { Palette } from './palette/palette';

@Component({
  selector: 'prb-color',
  imports: [ThemeSubMenu, Palette],
  templateUrl: './color.html',
  styleUrls: ['../theme.scss', 'color.scss'],
})
export class Color extends BasePageWithSubtitle {
  override pageSubtitle = 'Theme - Color';
}
