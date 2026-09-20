import { Component } from '@angular/core';
import { BasePageWithSubtitle } from '@core/base-page-with-subtitle/base-page-with-subtitle';
import { StarRating } from '@core/star-rating/star-rating';

@Component({
  selector: 'prb-home',
  imports: [
    StarRating
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home extends BasePageWithSubtitle {
  override pageSubtitle = "Home";
  protected selectedRating = 0;
}
