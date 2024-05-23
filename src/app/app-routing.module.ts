import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './shared/pages/error404/error404.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'heros',
    loadChildren: () => import('./heros/heros.module').then(m => m.HerosModule)
  },
  {
    path: '404',
    component: Error404Component
  },
  {
    path: '',
    redirectTo: 'heros',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '404',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
