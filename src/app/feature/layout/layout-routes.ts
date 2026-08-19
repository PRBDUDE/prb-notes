import { Routes } from '@angular/router';

export const layout_routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./layout')
      .then(m => m.Layout),
    title: 'Layout',
  }
]
