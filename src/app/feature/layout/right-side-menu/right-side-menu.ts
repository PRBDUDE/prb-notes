import { Component } from '@angular/core';
import { LayoutSubMenu } from '../layout-sub-menu/layout-sub-menu';
import { BasePageWithSubtitle } from '@core/base-page-with-subtitle';
import { SubMenu } from './sub-menu/sub-menu';
import {
  LayoutLeftAndRightMenuContent
} from '../layout-left-and-right-menu-content/layout-left-and-right-menu-content';

@Component({
  selector: 'prb-right-side-menu',
  imports: [LayoutSubMenu, SubMenu, LayoutLeftAndRightMenuContent],
  templateUrl: './right-side-menu.html',
  styleUrl: './right-side-menu.scss',
})
export class RightSideMenu extends BasePageWithSubtitle {
  override pageSubtitle = 'Layout - Right Side Menu';
}
