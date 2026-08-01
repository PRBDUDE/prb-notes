import { Component } from '@angular/core';
import { BasePageWithSubtitle } from '@core/base-page-with-subtitle/base-page-with-subtitle';
import { SubMenu } from './sub-menu/sub-menu';

@Component({
  selector: 'prb-home-lab-setup',
  imports: [SubMenu],
  templateUrl: './home-lab-setup.html',
  styleUrl: './home-lab-setup.scss',
})
export class HomeLabSetup extends BasePageWithSubtitle {
  override pageSubtitle = 'Home Lab Setup';
}
