import { Component, inject } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { HeaderService } from '@core/header-service';
import { ThemeToggle } from '@core/theme-toggle';

@Component({
  selector: 'prb-header',
  imports: [NgOptimizedImage, ThemeToggle],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  headerService = inject(HeaderService);
}
