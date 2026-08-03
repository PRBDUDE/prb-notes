import { Component } from '@angular/core';

@Component({
  selector: 'prb-note',
  imports: [],
  template: `
    <ng-content></ng-content>
  `,
  styleUrl: './note.scss',
})
export class Note {}
