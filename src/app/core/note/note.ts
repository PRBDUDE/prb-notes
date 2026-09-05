import { Component } from '@angular/core';

@Component({
  selector: 'prb-note',
  imports: [],
  template: `
    <ng-content></ng-content>
  `,
  styleUrl: './note.scss',
  host: {
    class: 'prb-note',
    role: 'container',
  }
})
export class Note {}
