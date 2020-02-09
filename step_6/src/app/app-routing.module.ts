import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'connected', pathMatch: 'full' },
  {
    path: 'signin',
    loadChildren: () => import('./features/signin/signin.module').then(m => m.SigninPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./features/register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'connected',
    loadChildren: () => import('./features/tabs/tabs.module').then(m => m.TabsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
