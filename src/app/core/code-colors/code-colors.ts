import { Component } from '@angular/core';

@Component({
  imports: [],
  selector:
    'block-quote, class-name, code-text, prb-comment, prb-note, prb-property, prb-string, html-tag, key-word, method-name, numeric-value',
  template: ` <ng-content></ng-content> `,
  styles: `
    :host(block-quote) {
      display: block;
      color: inherit;
      background: inherit;
      border-left: 4px solid var(--color-block-quote-border);
      padding-left: 1em;
      margin-left: 2em;
      font-size: 0.95em;
    }

    :host(class-name) {
      display: inline;
      font-size: inherit;
      color: var(--color-class-name);
      background: transparent;
    }

    :host(code-text) {
      display: inline;
      font-size: inherit;
      font-weight: 500;
      font-family: 'Microsoft Sans Serif', sans-serif;
      color: var(--color-code-text-text);
      background: var(--color-code-text-background);
      padding: 2px 0.4em;
      border-radius: 8px;
      text-wrap: nowrap;
    }

    :host(prb-comment) {
      display: inline;
      font-size: inherit;
      color: var(--color-comment);
      background: transparent;
    }

    :host(prb-note) {
      display: inline;
      font-size: inherit;
      font-weight: bold;
      color: var(--color-note);
      background: transparent;
    }

    :host(prb-property) {
      display: inline;
      font-size: inherit;
      color: var(--color-property);
      background: transparent;
    }

    :host(prb-string) {
      display: inline;
      font-size: inherit;
      color: var(--color-string);
      background: transparent;
    }

    :host(html-tag) {
      display: inline;
      font-size: inherit;
      color: var(--color-html-tag);
      background: transparent;
    }

    :host(key-word) {
      display: inline;
      font-size: inherit;
      color: var(--color-key-word);
      background: transparent;
    }

    :host(method-name) {
      display: inline;
      font-size: inherit;
      color: var(--color-method-name);
      background: transparent;
    }

    :host(numeric-value) {
      display: inline;
      font-size: inherit;
      color: var(--color-number-value);
      background: transparent;
    }
  `,
})
export class CodeColors {}
