import { Component } from '@angular/core';
import { LayoutSubMenu } from '../layout-sub-menu/layout-sub-menu';
import { BasePageWithSubtitle } from '@core/base-page-with-subtitle/base-page-with-subtitle';
import { SubMenu } from './sub-menu/sub-menu';
import { NoteSection } from '@core/note-section';
import { LeftSideMenuContent } from './left-side-menu-content/left-side-menu-content';
import { GridLayoutContent } from './grid-layout-content/grid-layout-content';

@Component({
  selector: 'prb-left-side-menu',
  imports: [LayoutSubMenu, SubMenu, NoteSection, LeftSideMenuContent, GridLayoutContent],
  templateUrl: './left-side-menu.html',
  styleUrl: './left-side-menu.scss',
})
export class LeftSideMenu extends BasePageWithSubtitle {
  override pageSubtitle = 'Layout - Left Side Menu';
}
