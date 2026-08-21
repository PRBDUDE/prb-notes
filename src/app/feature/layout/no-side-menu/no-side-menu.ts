import { Component } from '@angular/core';
import { BasePageWithSubtitle } from '@core/base-page-with-subtitle/base-page-with-subtitle';
import { LayoutSubMenu } from '../layout-sub-menu/layout-sub-menu';
import { SubMenu } from './sub-menu/sub-menu';
import { LayoutContentOnly } from '../layout-content-only/layout-content-only';

@Component({
  selector: 'prb-no-side-menu',
  imports: [LayoutSubMenu, SubMenu, LayoutContentOnly],
  templateUrl: './no-side-menu.html',
  styleUrl: './no-side-menu.scss',
})
export class NoSideMenu extends BasePageWithSubtitle {
  override pageSubtitle = 'Layout - No Side Menu';
}
