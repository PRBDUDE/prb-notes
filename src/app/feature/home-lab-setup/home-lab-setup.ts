import { Component } from '@angular/core';
import { BasePageWithSubtitle } from '@core/base-page-with-subtitle/base-page-with-subtitle';
import { HomeLabSetupSubMenu } from './home-lab-setup-sub-menu/home-lab-setup-sub-menu';

@Component({
  selector: 'prb-home-lab-setup',
  imports: [HomeLabSetupSubMenu],
  templateUrl: './home-lab-setup.html',
  styleUrl: './home-lab-setup.scss',
})
export class HomeLabSetup extends BasePageWithSubtitle {
  override pageSubtitle = 'Home Lab Setup';
}
