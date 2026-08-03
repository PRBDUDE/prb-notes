import { Component } from '@angular/core';
import { SubMenu } from './sub-menu/sub-menu';
import { BasePageWithSubtitle } from '@core/base-page-with-subtitle/base-page-with-subtitle';

@Component({
  selector: 'prb-services',
  imports: [SubMenu],
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class Services extends BasePageWithSubtitle {
  override pageSubtitle = 'Services';
}
