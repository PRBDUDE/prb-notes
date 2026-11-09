import { Component } from '@angular/core';
import { BasePageWithSubtitle } from '@core/base-page-with-subtitle';
import { StarRating } from '@core/star-rating';
import { PainScaleSelector } from '@core/pain-scale-selector';

@Component({
  selector: 'prb-home',
  imports: [StarRating, PainScaleSelector],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home extends BasePageWithSubtitle {
  override pageSubtitle = 'Home';
  protected selectedRating = 0;
  protected selectedPainLevel = 0;
}
