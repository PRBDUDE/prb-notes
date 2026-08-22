import { Component } from '@angular/core';
import { CardContainer } from '@core/card-container/card-container';
import { CardBody } from '@core/card-body/card-body';
import { CardHeader } from '@core/card-header/card-header';
import { CssContent } from '@css-class/css-content';
import { CssFooter } from '@css-class/css-footer';
import { CssHeader } from '@css-class/css-header';
import { CssLeftMenu } from '@css-class/css-left-menu';
import { CssMenuBar } from '@css-class/css-menu-bar';
import { CssBothSideMenuLayout } from '@css-class/css-both-side-menu-layout';
import { SubMenu } from '../sub-menu/sub-menu';
import { LayoutSubMenu } from '../../layout-sub-menu/layout-sub-menu';
import { LayoutLeftAndRightMenuContent } from '../../layout-left-and-right-menu-content/layout-left-and-right-menu-content';
import { BasePageWithSubtitle } from '@core/base-page-with-subtitle/base-page-with-subtitle';
import { CssRightMenu } from '@css-class/css-right-menu';

@Component({
  selector: 'prb-grid-layout',
  imports: [
    CardBody,
    CardContainer,
    CardHeader,
    CssContent,
    CssFooter,
    CssHeader,
    CssLeftMenu,
    CssMenuBar,
    LayoutSubMenu,
    SubMenu,
    CssBothSideMenuLayout,
    LayoutLeftAndRightMenuContent,
    CssRightMenu,
  ],
  templateUrl: './grid-layout.html',
  styleUrl: '../right-side-menu.scss',
})
export class GridLayout extends BasePageWithSubtitle {
  override pageSubtitle = 'Layout - Both Side Menus - Grid Layout';
}
