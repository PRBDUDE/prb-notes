import { Component } from '@angular/core';
import { CardContainer } from '@core/card-container';
import { CardHeader } from '@core/card-header';
import { CardBody } from '@core/card-body';
import { CssNoSideMenuLayout } from '@css-class/css-no-side-menu-layout';
import { CssHeader } from '@css-class/css-header';
import { CssMenuBar } from '@css-class/css-menu-bar';
import { CssContent } from '@css-class/css-content';
import { CssFooter } from '@css-class/css-footer';
import { LayoutContentOnly } from '@layout/layout-content-only';

@Component({
  imports: [
    CardContainer,
    CardHeader,
    CardBody,
    CssNoSideMenuLayout,
    CssHeader,
    CssMenuBar,
    CssContent,
    CssFooter,
    LayoutContentOnly,
  ],
  selector: 'prb-grid-layout-content',
  styleUrl: '../no-side-menu.scss',
  templateUrl: './grid-layout-content.html',
})
export class GridLayoutContent {}
