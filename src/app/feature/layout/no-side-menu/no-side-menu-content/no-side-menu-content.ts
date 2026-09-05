import { Component } from '@angular/core';
import { LayoutContentOnly } from '@layout/layout-content-only';

@Component({
  imports: [LayoutContentOnly],
  selector: 'prb-no-side-menu-content',
  styleUrl: '../no-side-menu.scss',
  templateUrl: './no-side-menu-content.html',
})
export class NoSideMenuContent {}
