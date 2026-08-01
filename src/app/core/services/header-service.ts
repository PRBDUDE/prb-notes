import { Service, signal } from '@angular/core';

@Service()
export class HeaderService {
  private subtitleSignal = signal<string>('');
  subtitle = this.subtitleSignal.asReadonly();

  setSubtitle(title: string): void {
    this.subtitleSignal.set(title);
  }

  clearSubtitle(): void {
    this.subtitleSignal.set('');
  }
}
