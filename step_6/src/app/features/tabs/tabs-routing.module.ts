import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabsPage } from './tabs.page';
import { MessagesPageModule } from '../messages/messages.module';
const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'messages',
        children: [
          {
            path: '',
            loadChildren: '../messages/messages.module#MessagesPageModule'
          }
        ]
      },
      {
        path: 'users',
        children: [
          {
            path: '',
            loadChildren: '../users/users.module#UsersPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/connected/messages',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/connected/tabs/messages',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule { }
