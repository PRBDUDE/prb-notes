import { Component } from '@angular/core';
import { ThemeSubMenu } from './theme-sub-menu/theme-sub-menu';
import { BasePageWithSubtitle } from '@core/base-page-with-subtitle';
import { CodeColors } from '@core/code-colors';

@Component({
  selector: 'prb-theme',
  imports: [ThemeSubMenu, CodeColors],
  templateUrl: './theme.html',
  styleUrl: './theme.scss',
})
export class Theme extends BasePageWithSubtitle {
  override pageSubtitle = 'Theme';
}
