import { Component } from '@angular/core';
import { BasePageWithSubtitle } from '@core/base-page-with-subtitle/base-page-with-subtitle';

@Component({
  selector: 'prb-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home extends BasePageWithSubtitle {
  override pageSubtitle = "Home";
}
