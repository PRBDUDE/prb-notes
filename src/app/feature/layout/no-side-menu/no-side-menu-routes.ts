import { Routes } from '@angular/router';

export const no_side_menu_routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./no-side-menu').then((m) => m.NoSideMenu),
    title: 'No Side Menu',
  }
]
