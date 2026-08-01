import { Routes } from '@angular/router';

export const homeLabSetupRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home-lab-setup').then((m) => m.HomeLabSetup),
    title: 'Home Lab Setup',
  },
  {
    path: 'copy-ssh-file-to-pi',
    loadComponent: () =>
      import('./copy-ssh-file-to-pi/copy-ssh-file-to-pi').then((m) => m.CopySshFileToPi),
    title: 'Copy SSH file to Pi',
  },
  {
    path: 'copy-ssh-file-to-pi-2',
    loadComponent: () =>
      import('./copy-ssh-file-to-pi-2/copy-ssh-file-to-pi-2').then((m) => m.CopySshFileToPi2),
    title: 'Copy SSH file to Pi (2)',
  },
  {
    path: 'copy-ssh-file-to-pi-3',
    loadComponent: () =>
      import('./copy-ssh-file-to-pi-3/copy-ssh-file-to-pi-3').then((m) => m.CopySshFileToPi3),
    title: 'Copy SSH file to Pi (3)',
  },
  {
    path: 'copy-ssh-file-to-pi-4',
    loadComponent: () =>
      import('./copy-ssh-file-to-pi-4/copy-ssh-file-to-pi-4').then((m) => m.CopySshFileToPi4),
    title: 'Copy SSH file to Pi (4)',
  },
  {
    path: 'how-to-setup-home-lab',
    loadComponent: () =>
      import('./how-to-setup-home-lab/how-to-setup-home-lab')
        .then((m) => m.HowToSetupHomeLab),
    title: 'How To Setup Home Lab',
  },
  {
    path: 'setup-ssh',
    loadComponent: () => import('./setup-ssh/setup-ssh').then((m) => m.SetupSsh),
    title: 'Setup SSH',
  },
];
