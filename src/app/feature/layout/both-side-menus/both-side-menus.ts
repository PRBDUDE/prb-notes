import { Component } from '@angular/core';
import { LayoutSubMenu } from '../layout-sub-menu/layout-sub-menu';
import { BasePageWithSubtitle } from '@core/base-page-with-subtitle';
import { SubMenu } from './sub-menu/sub-menu';
import {
  LayoutLeftAndRightMenuContent
} from '../layout-left-and-right-menu-content/layout-left-and-right-menu-content';

@Component({
  selector: 'prb-both-side-menus',
  imports: [LayoutSubMenu, SubMenu, LayoutLeftAndRightMenuContent],
  templateUrl: './both-side-menus.html',
  styleUrl: './both-side-menus.scss',
})
export class BothSideMenus extends BasePageWithSubtitle {
  override pageSubtitle = 'Layout - Both Side Menus';
}
