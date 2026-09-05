import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'note-section',
  styleUrl: './note-section.scss',
  template: `
    <div class="note-section-description">
      {{ description() }}
    </div>
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
  description = input<string>('');
}
