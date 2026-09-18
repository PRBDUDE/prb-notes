import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'prb-menu',
  imports: [RouterLink, RouterLinkActive],
  template: `
    <nav>
      <menu>
        <li>
          <a routerLink="/home" [routerLinkActive]="'active'">Home</a>
        </li>
        <li>
          <a routerLink="/home-lab-setup" [routerLinkActive]="'active'">Home Lab Setup</a>
        </li>
        <li>
          <a routerLink="/layout" [routerLinkActive]="'active'">Layout</a>
        </li>
        <li>
          <a routerLink="/micro-front-ends" [routerLinkActive]="'active'">Micro Front Ends</a>
        </li>
        <li>
          <a routerLink="/services" [routerLinkActive]="'active'">Services</a>
        </li>
        <li>
          <a routerLink="/theme" [routerLinkActive]="'active'">Theme</a>
        </li>
      </menu>
    </nav>
  `,
  styleUrl: './menu.scss',
})
export class Menu {}
