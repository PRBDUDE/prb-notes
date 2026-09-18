import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'prb-micro-front-end-sub-menu',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './micro-front-end-sub-menu.html',
  styleUrl: './micro-front-end-sub-menu.scss',
  host: {
    class: 'prb-left-menu',
  },
})
export class MicroFrontEndSubMenu {}
