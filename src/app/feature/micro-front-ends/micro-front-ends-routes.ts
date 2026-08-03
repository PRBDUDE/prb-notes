import { Routes } from '@angular/router';

export const microFrontEndsRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./micro-front-ends').then((m) => m.MicroFrontEnds),
    title: 'Micro Front Ends',
  },
  {
    path: 'angular-module-federation',
    loadComponent: () =>
      import('./angular-module-federation/angular-module-federation').then(
        (m) => m.AngularModuleFederation,
      ),
    title: 'Angular Module Federation',
  },
  {
    path: 'common-menu',
    loadComponent: () => import('./common-menu/common-menu').then((m) => m.CommonMenu),
    title: 'Common Menu',
  },
];
