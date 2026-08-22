import { Route } from '@angular/router';

export const both_side_menus_routes: Route[] = [
  {
    path: '',
    loadComponent: () => import('./both-side-menus').then(m => m.BothSideMenus),
    title: 'Right Side Menu Layout',
  },
  {
    path: 'grid-layout',
    loadComponent: () => import('./grid-layout/grid-layout').then(m => m.GridLayout),
    title: 'Grid Layout',
  }
]
