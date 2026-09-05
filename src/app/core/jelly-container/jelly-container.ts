import { Component } from '@angular/core';

@Component({
  selector: 'jelly-container',
  imports: [],
  template: `
    <ng-content></ng-content>
  `,
  styleUrl: './jelly-container.scss',
  host: {
    class: 'jelly-container',
    role: 'container',
  }
})
export class JellyContainer {}
