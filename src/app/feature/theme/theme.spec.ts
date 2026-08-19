import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Theme } from './theme';
import { ThemeSubMenu } from './theme-sub-menu/theme-sub-menu';
import { CodeText } from '@core/code-text/code-text';
import { MockThemeSubMenu } from '@mock/mock-theme-sub-menu';
import { MockCodeText } from '@mock/mock-code-text';

describe('Theme Component', () => {
  let component: Theme;
  let fixture: ComponentFixture<Theme>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Theme],
    })
      .overrideComponent(Theme, {
        remove: { imports: [ThemeSubMenu, CodeText] },
        add: { imports: [MockThemeSubMenu, MockCodeText] },
      })
      .compileComponents();

    fixture = TestBed.createComponent(Theme);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component instance', () => {
    expect(component).toBeTruthy();
  });

  it('should set pageSubtitle to "Theme"', () => {
    expect(component.pageSubtitle).toBe('Theme');
  });
});
