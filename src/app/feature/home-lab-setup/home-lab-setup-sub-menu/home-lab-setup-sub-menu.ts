import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'prb-home-lab-setup-sub-menu',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './home-lab-setup-sub-menu.html',
  styleUrl: './home-lab-setup-sub-menu.scss',
  host: {
    class: 'prb-left-menu',
  },
})
export class HomeLabSetupSubMenu {}
