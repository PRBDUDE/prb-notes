import { Component } from '@angular/core';

@Component({
  selector: 'prb-menu',
  imports: [],
  template: `
    <nav class="page-nav">
      <menu>
        <li>
          <a href="/home">Home</a>
        </li>
        <li>
          <a href="/home-lab-setup">Home Lab Setup</a>
        </li>
        <li>
          <a href="/micro-front-ends">Micro Front Ends</a>
        </li>
        <li>
          <a href="/services">Services</a>
        </li>
        <li>
          <a href="/theme">Theme</a>
        </li>
      </menu>
    </nav>
  `,
  styleUrl: './menu.scss',
})
export class Menu {}
