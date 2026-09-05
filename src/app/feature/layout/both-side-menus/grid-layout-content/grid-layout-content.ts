import { Component } from '@angular/core';
import { CardHeader } from '@core/card-header';
import { CardContainer } from '@core/card-container';
import { CardBody } from '@core/card-body';
import { CssBothSideMenuLayout } from '@css-class/css-both-side-menu-layout';
import { CssHeader } from '@css-class/css-header';
import { CssMenuBar } from '@css-class/css-menu-bar';
import { CssLeftMenu } from '@css-class/css-left-menu';
import { CssContent } from '@css-class/css-content';
import { CssRightMenu } from '@css-class/css-right-menu';
import { CssFooter } from '@css-class/css-footer';
import { LayoutLeftAndRightMenuContent } from '@layout/layout-left-and-right-menu-content';

@Component({
  imports: [
    CardContainer,
    CardHeader,
    CardBody,
    CssBothSideMenuLayout,
    CssHeader,
    CssMenuBar,
    CssLeftMenu,
    CssContent,
    CssRightMenu,
    CssFooter,
    LayoutLeftAndRightMenuContent,
  ],
  selector: 'prb-grid-layout-content',
  styleUrl: '../both-side-menus.scss',
  templateUrl: './grid-layout-content.html',
})
export class GridLayoutContent {}
