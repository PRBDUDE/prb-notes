import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'prb-theme-sub-menu',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './theme-sub-menu.html',
  styleUrl: './theme-sub-menu.scss',
  host: {
    class: 'prb-left-menu',
  },
})
export class ThemeSubMenu {}
