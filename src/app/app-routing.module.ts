import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth', loadChildren: () => import("./_pages/authorization/authorization.module").then(m => m.AuthorizationModule)
  },

  {
    path: 'order', loadChildren: () => import("./_pages/home/home.module").then(m => m.HomeModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
