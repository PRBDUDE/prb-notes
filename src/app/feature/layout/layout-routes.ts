import { Routes } from '@angular/router';

export const layout_routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./layout').then((m) => m.Layout),
    title: 'Layout',
  },
  {
    path: 'left-side-menu',
    loadChildren: () =>
      import('./left-side-menu/left-side-menu-routes').then((m) => m.left_side_menu_routes),
    title: 'Left Side Menu',
  },
  {
    path: 'right-side-menu',
    loadChildren: () =>
      import('./right-side-menu/right-side-menu-routes').then((m) => m.right_side_menu_routes),
    title: 'Right Side Menu',
  },
  {
    path: 'no-side-menu',
    loadChildren: () =>
      import('./no-side-menu/no-side-menu-routes').then((m) => m.no_side_menu_routes),
    title: 'No Side Menu',
  },
];
