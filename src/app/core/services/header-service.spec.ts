import { describe, it, expect, beforeEach } from 'vitest';
import { HeaderService } from './header-service';

describe('HeaderService', () => {
  let service: HeaderService;

  beforeEach(() => {
    service = new HeaderService();
  });

  it('should initialize with an empty subtitle', () => {
    expect(service.subtitle()).toBe('');
  });

  it('should update the subtitle when setSubtitle is called', () => {
    const testTitle = 'Dashboard Overview';

    service.setSubtitle(testTitle);

    expect(service.subtitle()).toBe(testTitle);
  });

  it('should clear the subtitle when clearSubtitle is called', () => {
    service.setSubtitle('Temporary Header');
    expect(service.subtitle()).toBe('Temporary Header');

    service.clearSubtitle();

    expect(service.subtitle()).toBe('');
  });
});
