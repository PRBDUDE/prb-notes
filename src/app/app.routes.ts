import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./feature/home/home').then((m) => m.Home),
    title: 'Home',
  },
  {
    path: 'home-lab-setup',
    loadChildren: () =>
      import('./feature/home-lab-setup/home-lab-setup-routes').then((m) => m.homeLabSetupRoutes),
    title: 'Home Lab Setup',
  },
  {
    path: 'micro-front-ends',
    loadChildren: () =>
      import('./feature/micro-front-ends/micro-front-ends-routes').then(
        (m) => m.microFrontEndsRoutes,
      ),
    title: 'Micro Front Ends',
  },
  {
    path: 'services',
    loadChildren: () => import('./feature/services/services-routes').then((m) => m.servicesRoutes),
    title: 'Services',
  },
  {
    path: 'theme',
    loadChildren: () => import('./feature/theme/theme-routes').then((m) => m.themeRoutes),
    title: 'Theme',
  },
  {
    path: 'layout',
    loadChildren: () => import('./feature/layout/layout-routes').then(m => m.layout_routes),
    title: 'Layout',
  }
];
