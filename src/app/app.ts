import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '@core/header';
import { Footer } from '@core/footer';
import { Menu } from '@core/menu';

@Component({
  selector: 'prb-root',
  imports: [RouterOutlet, Header, Footer, Menu],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('prb-notes');
}
