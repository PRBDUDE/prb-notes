import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'note-section',
  styles: `
    :host {
      display: block;
      margin: 0 auto;
      min-height: calc(var(--content-height) - 2em);
    }
  `,
  template: `
    <div class="note-section-description">
      {{ description() }}
    </div>
    <ng-content></ng-content>
  `,
  host: {
    class: 'note-section',
    role: 'container',
    '[id]': 'tagName()',
  },
})
export class NoteSection {
  tagName = input<string>('');
  description = input<string>('');
}
