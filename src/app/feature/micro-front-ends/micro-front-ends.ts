import { Component } from '@angular/core';
import { BasePageWithSubtitle } from '@core/base-page-with-subtitle/base-page-with-subtitle';
import { MicroFrontEndSubMenu } from './sub-menu/micro-front-end-sub-menu';
import { CodeText } from '@core/code-text/code-text';

@Component({
  selector: 'prb-micro-front-ends',
  imports: [MicroFrontEndSubMenu, CodeText],
  templateUrl: './micro-front-ends.html',
  styleUrl: './micro-front-ends.scss',
})
export class MicroFrontEnds extends BasePageWithSubtitle {
  override pageSubtitle = 'Micro Front Ends';
}
