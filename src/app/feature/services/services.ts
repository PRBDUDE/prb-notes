import { Component } from '@angular/core';
import { ServicesSubMenu } from './services-sub-menu/services-sub-menu';
import { BasePageWithSubtitle } from '@core/base-page-with-subtitle/base-page-with-subtitle';

@Component({
  selector: 'prb-services',
  imports: [ServicesSubMenu],
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class Services extends BasePageWithSubtitle {
  override pageSubtitle = 'Services';
}
