import { Component } from '@angular/core';

@Component({
  selector: 'jelly-container',
  imports: [],
  template: `
    <ng-content></ng-content>
  `,
  styleUrl: './jelly-container.scss'
})
export class JellyContainer {}
