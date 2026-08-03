import { Routes } from '@angular/router';

export const themeRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./theme').then((m) => m.Theme),
    title: 'Theme'
  },
  {
    path: 'color',
    loadComponent: () => import('./color/color').then((m) => m.Color),
    title: 'Color'
  }
]
