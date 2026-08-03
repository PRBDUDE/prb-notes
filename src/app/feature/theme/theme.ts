import { Component } from '@angular/core';
import { SubMenu } from './sub-menu/sub-menu';
import { BasePageWithSubtitle } from '@core/base-page-with-subtitle/base-page-with-subtitle';
import { CodeText } from '@core/code-text/code-text';

@Component({
  selector: 'prb-theme',
  imports: [SubMenu, CodeText],
  templateUrl: './theme.html',
  styleUrl: './theme.scss',
})
export class Theme extends BasePageWithSubtitle {
  override pageSubtitle = 'Theme';
}
