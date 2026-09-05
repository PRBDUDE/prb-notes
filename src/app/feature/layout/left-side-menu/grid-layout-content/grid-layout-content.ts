import { Component } from '@angular/core';
import { CardContainer } from '@core/card-container';
import { CardHeader } from '@core/card-header';
import { CardBody } from '@core/card-body';
import { CssLeftSideMenuLayout } from '@css-class/css-left-side-menu-layout';
import { CssHeader } from '@css-class/css-header';
import { CssMenuBar } from '@css-class/css-menu-bar';
import { CssLeftMenu } from '@css-class/css-left-menu';
import { CssContent } from '@css-class/css-content';
import { CssFooter } from '@css-class/css-footer';
import { LayoutLeftMenuContent } from '@layout/layout-left-menu-content';

@Component({
  imports: [
    CardContainer,
    CardHeader,
    CardBody,
    CssLeftSideMenuLayout,
    CssHeader,
    CssMenuBar,
    CssLeftMenu,
    CssContent,
    CssFooter,
    LayoutLeftMenuContent,
  ],
  selector: 'prb-grid-layout-content',
  styleUrl: '../left-side-menu.scss',
  templateUrl: './grid-layout-content.html',
})
export class GridLayoutContent {}
