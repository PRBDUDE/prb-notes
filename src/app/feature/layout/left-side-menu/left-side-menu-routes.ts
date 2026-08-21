import { Routes } from '@angular/router';

export const left_side_menu_routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./left-side-menu').then(m => m.LeftSideMenu),
    title: 'Left Side Menu',
  },
  {
    path: 'grid-layout',
    loadComponent: () => import('./grid-layout/grid-layout').then(m => m.GridLayout),
    title: 'Grid Layout',
  }
]
