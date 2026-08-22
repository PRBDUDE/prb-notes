import { Route } from '@angular/router';

export const right_side_menu_routes: Route[] = [
  {
    path: '',
    loadComponent: () => import('./right-side-menu').then(m => m.RightSideMenu),
    title: 'Right Side Menu Layout',
  },
  {
    path: 'grid-layout',
    loadComponent: () => import('./grid-layout/grid-layout').then(m => m.GridLayout),
    title: 'Grid Layout',
  }
]
