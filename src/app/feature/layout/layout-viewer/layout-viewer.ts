import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { LayoutContentOnly } from '@layout/layout-content-only';
import { LayoutLeftMenuContent } from '@layout/layout-left-menu-content';
import { LayoutLeftAndRightMenuContent } from '@layout/layout-left-and-right-menu-content';

@Component({
  imports: [LayoutContentOnly, LayoutLeftMenuContent, LayoutLeftAndRightMenuContent],
  selector: 'prb-layout-viewer',
  styleUrl: './layout-viewer.scss',
  templateUrl: './layout-viewer.html',
})
export class LayoutViewer implements OnInit, OnDestroy {
  currentLayout = signal<number>(0);
  private timerId: any;

  ngOnInit() {
    this.timerId = setInterval(() => {
      this.currentLayout.update((prev) => (prev + 1) % 3);
    }, 4000);
  }

  ngOnDestroy() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }
}
