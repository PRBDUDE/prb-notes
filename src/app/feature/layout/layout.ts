import { Component } from '@angular/core';
import { LayoutSubMenu } from './layout-sub-menu/layout-sub-menu';
import { BasePageWithSubtitle } from '@core/base-page-with-subtitle/base-page-with-subtitle';
import { LayoutContentOnly } from './layout-content-only/layout-content-only';
import { LayoutLeftMenuContent } from './layout-left-menu-content/layout-left-menu-content';
import { LayoutLeftAndRightMenuContent } from './layout-left-and-right-menu-content/layout-left-and-right-menu-content';

@Component({
  selector: 'prb-layout',
  imports: [LayoutSubMenu, LayoutContentOnly, LayoutLeftMenuContent, LayoutLeftAndRightMenuContent],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout extends BasePageWithSubtitle {
  override pageSubtitle = 'Layout';
}
