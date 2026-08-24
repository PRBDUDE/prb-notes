import { Component } from '@angular/core';
import { LayoutSubMenu } from './layout-sub-menu/layout-sub-menu';
import { BasePageWithSubtitle } from '@core/base-page-with-subtitle/base-page-with-subtitle';
import { LayoutViewer } from './layout-viewer/layout-viewer';

@Component({
  selector: 'prb-layout',
  imports: [LayoutSubMenu, LayoutViewer],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout extends BasePageWithSubtitle {
  override pageSubtitle = 'Layout';
}
