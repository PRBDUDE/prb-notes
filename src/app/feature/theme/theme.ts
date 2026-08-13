import { Component } from '@angular/core';
import { ThemeSubMenu } from './theme-sub-menu/theme-sub-menu';
import { BasePageWithSubtitle } from '@core/base-page-with-subtitle/base-page-with-subtitle';
import { CodeText } from '@core/code-text/code-text';

@Component({
  selector: 'prb-theme',
  imports: [ThemeSubMenu, CodeText],
  templateUrl: './theme.html',
  styleUrl: './theme.scss',
})
export class Theme extends BasePageWithSubtitle {
  override pageSubtitle = 'Theme';
}
