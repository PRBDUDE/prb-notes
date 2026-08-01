import { Component, inject } from '@angular/core';
import { HeaderService } from '@core/header-service';
import { NgOptimizedImage } from '@angular/common';
import { ThemeToggle } from '@core/theme-toggle/theme-toggle';

@Component({
  selector: 'prb-header',
  imports: [NgOptimizedImage, ThemeToggle],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  headerService = inject(HeaderService);
}
