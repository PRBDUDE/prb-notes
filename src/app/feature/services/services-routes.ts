import { Routes } from '@angular/router';

export const servicesRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./services').then((m) => m.Services),
    title: 'Services',
  },
  {
    path: 'idle-service',
    loadComponent: () => import('./idle-service/idle-service')
      .then((m) => m.IdleService),
    title: 'Idle Service',
  }
];
