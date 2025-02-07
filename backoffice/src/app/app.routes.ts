import {Route} from '@angular/router';

export const routes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
  {
    path: '',
    loadChildren: () => import('./_pages/main-nav.routes').then((m) => m.routes),
  },
  {
    path: 'login',
    loadComponent: () => import('./_auth/login/login.page').then( m => m.LoginPage)
  },
]
