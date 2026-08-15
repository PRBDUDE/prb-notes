import { signal } from '@angular/core';
import { vi } from 'vitest';

export class MockHeaderService {
  private subtitleSignal = signal<string>('');
  subtitle = this.subtitleSignal.asReadonly();

  setSubtitle = vi.fn((title: string) => this.subtitleSignal.set(title));
  clearSubtitle = vi.fn(() => this.subtitleSignal.set(''));
}
