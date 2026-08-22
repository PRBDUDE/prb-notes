import { Component } from '@angular/core';
import { LayoutSubMenu } from '../../layout-sub-menu/layout-sub-menu';
import { SubMenu } from '../sub-menu/sub-menu';
import { LayoutLeftMenuContent } from '../../layout-left-menu-content/layout-left-menu-content';
import { BasePageWithSubtitle } from '@core/base-page-with-subtitle';
import { CardContainer } from '@core/card-container';
import { CardHeader } from '@core/card-header';
import { CardBody } from '@core/card-body';
import { CssContent } from '@css-class/css-content';
import { CssFooter } from '@css-class/css-footer';
import { CssHeader } from '@css-class/css-header';
import { CssMenuBar } from '@css-class/css-menu-bar';
import { CssLeftSideMenuLayout } from '@css-class/css-left-side-menu-layout';
import { CssLeftMenu } from '@css-class/css-left-menu';

@Component({
  selector: 'prb-grid-layout',
  imports: [
    LayoutSubMenu,
    SubMenu,
    LayoutLeftMenuContent,
    CardBody,
    CardContainer,
    CardHeader,
    CssContent,
    CssFooter,
    CssHeader,
    CssMenuBar,
    CssLeftSideMenuLayout,
    CssLeftMenu,
  ],
  templateUrl: './grid-layout.html',
  styleUrl: '../left-side-menu.scss',
})
export class GridLayout extends BasePageWithSubtitle {
  override pageSubtitle = 'Layout - Left Side Menu - Grid Layout';
}
