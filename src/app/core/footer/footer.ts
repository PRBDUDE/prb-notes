import { Component } from '@angular/core';
import { Copyright } from './copyright/copyright';

@Component({
  selector: 'prb-footer',
  imports: [Copyright],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {}
