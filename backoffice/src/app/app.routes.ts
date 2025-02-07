import {Route} from '@angular/router';
import {AuthGuard} from './_guards/auth.guard';

export const routes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
  {
    path: '',
    loadChildren: () => import('./_pages/main-nav.routes').then((m) => m.routes),
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    loadComponent: () => import('./_auth/login/login.page').then( m => m.LoginPage)
  },
]
