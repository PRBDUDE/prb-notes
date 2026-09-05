import { Route } from '@angular/router';

export const both_side_menus_routes: Route[] = [
  {
    path: '',
    loadComponent: () => import('./both-side-menus').then(m => m.BothSideMenus),
    title: 'Right Side Menu Layout',
  }
]
