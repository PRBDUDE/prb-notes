import { Component, ElementRef, inject } from '@angular/core';

@Component({
  template: ``,
})
export abstract class GetDemoPageWidth {
  private el = inject(ElementRef);

  getPageWidth(): string {
    const widthFromEl = getComputedStyle(this.el.nativeElement)
      .getPropertyValue('--layout-demo-page-width')
      .trim();

    const widthFromRoot = getComputedStyle(document.documentElement)
      .getPropertyValue('--layout-demo-page-width')
      .trim();

    return widthFromEl || widthFromRoot;
  }
}
