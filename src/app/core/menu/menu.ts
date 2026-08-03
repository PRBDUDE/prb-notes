import { Component } from '@angular/core';

@Component({
  selector: 'prb-menu',
  imports: [],
  template: `
    <nav>
      <menu>
        <li class="key-item">
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
        <li class="key-item">
          <a href="/theme">Theme</a>
        </li>
      </menu>
    </nav>
  `,
})
export class Menu {}
