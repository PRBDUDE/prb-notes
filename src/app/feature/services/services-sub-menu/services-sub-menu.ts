import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'prb-services-sub-menu',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './services-sub-menu.html',
  styleUrl: './services-sub-menu.scss',
  host: {
    class: 'prb-left-menu',
  },
})
export class ServicesSubMenu {}
