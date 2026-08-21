import { Component } from '@angular/core';
import { LayoutSubMenu } from '../layout-sub-menu/layout-sub-menu';
import { BasePageWithSubtitle } from '@core/base-page-with-subtitle/base-page-with-subtitle';
import { SubMenu } from './sub-menu/sub-menu';
import { LayoutLeftMenuContent } from '../layout-left-menu-content/layout-left-menu-content';

@Component({
  selector: 'prb-left-side-menu',
  imports: [LayoutSubMenu, SubMenu, LayoutLeftMenuContent],
  templateUrl: './left-side-menu.html',
  styleUrl: './left-side-menu.scss',
})
export class LeftSideMenu extends BasePageWithSubtitle {
  override pageSubtitle = 'Layout - Left Side Menu';
}
