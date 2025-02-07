import {Routes} from '@angular/router';
import {MainNavPage} from './main-nav.page';

export const routes: Routes = [
  {
    path:'',
    component: MainNavPage,
    children: [
      {
        path: 'general',
        children: [
          {
            path: 'dashboard',
            loadComponent: () => import('./general/dashboard/dashboard.page').then(m => m.DashboardPage)
          },
        ]
      },

      //ARTICLES
      {
        path: 'articles',
        children: [
          {
            path: 'events',
            children: [
              {
                path: '',
                loadComponent: () => import('./articles/events/events-list/events-list.page').then(m => m.EventsListPage)
              },
              {
                path: 'add',
                loadComponent: () => import('./articles/events/event-form/event-form.page').then(m => m.EventFormPage),
                data: {addOrUpdate: 'add'},
              },
              {
                path: ':idEvent',
                loadComponent: () => import('./articles/events/event-form/event-form.page').then(m => m.EventFormPage),
                data: {addOrUpdate: 'update'},

              }
            ]
          }
        ]
      },

      //PHOTOS
      {
        path: 'photos',
        children: [
          {
            path: 'albums',
            children: [
              {
                path: '',
                loadComponent: () => import('./photos/albums/albums-list/albums-list.page').then(m => m.AlbumsListPage),
              },
              {
                path: 'add',
                loadComponent: () => import('./photos/albums/album-form/album-form.page').then(m => m.AlbumFormPage),
                data: {addOrUpdate: 'add'},
              },
              {
                path: ':idAlbum',
                loadComponent: () => import('./photos/albums/album-form/album-form.page').then(m => m.AlbumFormPage),
                data: {addOrUpdate: 'update'},

              }
            ]
          }
        ]
      },

      //MEMBRES
      {
        path: 'members',
        children: [
          {
            path: 'teams',
            children: [
              {
                path: '',
                loadComponent: () => import('./members/teams/teams-list/teams-list.page').then(m => m.TeamsListPage),
              },
              {
                path: 'local-team',
                children: [
                  {
                    path: 'add',
                    loadComponent: () => import('./members/teams/team-form/team-form.page').then(m => m.TeamFormPage),
                    data: {addOrUpdate: 'add'},
                  },
                  {
                    path: ':idTeam',
                    loadComponent: () => import('./members/teams/team-form/team-form.page').then(m => m.TeamFormPage),
                    data: {addOrUpdate: 'update'},

                  }
                ]
              },
              {
                path: 'foreign-team',
                children: [
                  {
                    path: 'add',
                    loadComponent: () => import('./members/teams/team-form/team-form.page').then(m => m.TeamFormPage),
                    data: {addOrUpdate: 'add'},
                  },
                  {
                    path: ':idTeam',
                    loadComponent: () => import('./members/teams/team-form/team-form.page').then(m => m.TeamFormPage),
                    data: {addOrUpdate: 'update'},

                  }
                ]
              }
            ]
          },
          {
            path: 'skaters',
            children: [
              {
                path: '',
                loadComponent: () => import('./members/skaters/skaters-list/skaters-list.page').then(m => m.SkatersListPage),
              },
              {
                path: 'add',
                loadComponent: () => import('./members/skaters/skater-form/skater-form.page').then(m => m.SkaterFormPage),
                data: {addOrUpdate: 'add'},
              },
              {
                path: ':idSkater',
                loadComponent: () => import('./members/skaters/skater-form/skater-form.page').then(m => m.SkaterFormPage),
                data: {addOrUpdate: 'update'},
              }
            ]
          },
          {
            path: 'staffs',
            children: [
              {
                path: '',
                loadComponent: () => import('./members/staffs/staffs-list/staffs-list.page').then(m => m.StaffsListPage),
              },
              {
                path: 'add',
                loadComponent: () => import('./members/staffs/staff-form/staff-form.page').then(m => m.StaffFormPage),
                data: {addOrUpdate: 'add'},
              },
              {
                path: ':idStaff',
                loadComponent: () => import('./members/staffs/staff-form/staff-form.page').then(m => m.StaffFormPage),
                data: {addOrUpdate: 'update'},
              }
            ]
          },
        ]
      },
      {
        path: 'account',
        loadComponent: () => import('./parameters/account/account.page').then(m => m.AccountPage)
      },
    ]
  }
];
