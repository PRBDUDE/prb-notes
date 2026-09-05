import { Component } from '@angular/core';
import { LayoutSubMenu } from '../layout-sub-menu/layout-sub-menu';
import { BasePageWithSubtitle } from '@core/base-page-with-subtitle';
import { SubMenu } from './sub-menu/sub-menu';
import { NoteSection } from '@core/note-section';
import { BothSideMenusContent } from './both-side-menus-content/both-side-menus-content';
import { GridLayoutContent } from './grid-layout-content/grid-layout-content';

@Component({
  selector: 'prb-both-side-menus',
  imports: [LayoutSubMenu, SubMenu, NoteSection, BothSideMenusContent, GridLayoutContent],
  templateUrl: './both-side-menus.html',
  styleUrl: './both-side-menus.scss',
})
export class BothSideMenus extends BasePageWithSubtitle {
  override pageSubtitle = 'Layout - Both Side Menus';
}
