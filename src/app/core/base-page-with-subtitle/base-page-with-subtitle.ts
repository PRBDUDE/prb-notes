import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { HeaderService } from '@core/header-service';

@Component({
  template: '',
})
export abstract class BasePageWithSubtitle implements OnInit, OnDestroy {
  protected headerService = inject(HeaderService);
  abstract readonly pageSubtitle: string;

  init() {}

  ngOnInit() {
    if (this.pageSubtitle) {
      this.headerService.setSubtitle(this.pageSubtitle);
    }
    this.init();
  }

  ngOnDestroy(): void {
    this.headerService.clearSubtitle();
  }
}
