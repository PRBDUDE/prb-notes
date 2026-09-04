import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'note-section',
  styleUrl: './note-section.scss',
  template: `
    <ng-content></ng-content>
  `,
  host: {
    class: 'note-section',
    role: 'container',
    '[id]': 'tagName()'
  },
})
export class NoteSection {
  tagName = input<string>('');
}
