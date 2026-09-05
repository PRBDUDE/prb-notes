import { Component } from '@angular/core';
import { BasePageWithSubtitle } from '@core/base-page-with-subtitle/base-page-with-subtitle';
import { LayoutSubMenu } from '../layout-sub-menu/layout-sub-menu';
import { SubMenu } from './sub-menu/sub-menu';
import { NoteSection } from '@core/note-section';
import { GridLayoutContent } from './grid-layout-content/grid-layout-content';
import { NoSideMenuContent } from './no-side-menu-content/no-side-menu-content';

@Component({
  selector: 'prb-no-side-menu',
  imports: [LayoutSubMenu, SubMenu, NoteSection, GridLayoutContent, NoSideMenuContent],
  templateUrl: './no-side-menu.html',
  styleUrl: './no-side-menu.scss',
})
export class NoSideMenu extends BasePageWithSubtitle {
  override pageSubtitle = 'Layout - No Side Menu';
}
