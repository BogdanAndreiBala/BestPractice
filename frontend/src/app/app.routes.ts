import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'practices',
    loadComponent: () =>
      import('./features/dashboard/components/dashboard.component').then(
        (m) => m.DashboardComponent,
      ),
  },
  {
    path: 'rxjs',
    loadComponent: () =>
      import('./features/reactive-programming/pages/reactive-programming/reactive-programming').then(
        (m) => m.ReactiveProgrammingComponent,
      ),
  },
  {
    path: 'ngrx',
    loadComponent: () => import('./features/ngrx/pages/ngrx.page').then((m) => m.NgrxPage),
  },
  {
    path: 'signals',
    loadComponent: () => import('./signals/signals.component').then((m) => m.SignalsComponent),
  },
  { path: '', redirectTo: 'practices', pathMatch: 'full' },
  { path: '**', redirectTo: 'practices' },
];
