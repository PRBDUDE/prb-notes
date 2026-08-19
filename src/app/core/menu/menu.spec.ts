import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Menu } from './menu';
import { By } from '@angular/platform-browser';
import { describe, beforeEach, it, expect } from 'vitest';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';

describe('Menu', () => {
  let component: Menu;
  let fixture: ComponentFixture<Menu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        Menu
      ],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(Menu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render 5 navigation links with correct hrefs and text', () => {
    const expectedLinks = [
      { text: 'Home', href: '/home' },
      { text: 'Home Lab Setup', href: '/home-lab-setup' },
      { text: 'Micro Front Ends', href: '/micro-front-ends' },
      { text: 'Services', href: '/services' },
      { text: 'Theme', href: '/theme' },
    ];

    const linkElements = fixture.debugElement.queryAll(By.css('nav menu li a'));

    expect(linkElements.length).toBe(5);

    linkElements.forEach((de, index) => {
      const anchor: HTMLAnchorElement = de.nativeElement;
      expect(anchor.textContent?.trim()).toBe(expectedLinks[index].text);
      expect(anchor.getAttribute('href')).toBe(expectedLinks[index].href);
    });
  });
});
