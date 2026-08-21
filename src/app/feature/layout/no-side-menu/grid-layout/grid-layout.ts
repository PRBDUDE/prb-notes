import { Component } from '@angular/core';
import { BasePageWithSubtitle } from '@core/base-page-with-subtitle';
import { LayoutContentOnly } from '../../layout-content-only/layout-content-only';
import { LayoutSubMenu } from '../../layout-sub-menu/layout-sub-menu';
import { SubMenu } from '../sub-menu/sub-menu';
import { CardContainer } from '@core/card-container';
import { CardHeader } from '@core/card-header';
import { CardBody } from '@core/card-body';
import { CssFooter } from '@css-class/css-footer';
import { CssContent } from '@css-class/css-content';
import { CssMenuBar } from '@css-class/css-menu-bar';
import { CssHeader } from '@css-class/css-header';
import { CssNoSideMenuLayout } from '@css-class/css-no-side-menu-layout';

@Component({
  selector: 'prb-grid-layout',
  imports: [
    LayoutContentOnly,
    LayoutSubMenu,
    SubMenu,
    CardContainer,
    CardHeader,
    CardBody,
    CssFooter,
    CssContent,
    CssMenuBar,
    CssHeader,
    CssNoSideMenuLayout,
  ],
  templateUrl: './grid-layout.html',
  styleUrl: '../no-side-menu.scss',
})
export class GridLayout extends BasePageWithSubtitle {
  override pageSubtitle = 'Layout - No Side Menu - Grid Layout';
}
