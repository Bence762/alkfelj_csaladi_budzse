import { NgModule } from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';

import { AppComponent } from '../app.component';
import {MainPageComponent } from '../main-page/main-page.component';
import { MyRequestsComponent } from '../my-requests/my-requests.component';
import { NewRequestsComponent } from '../new-requests/new-requests.component';
import { MyTransactionsComponent } from '../my-transactions/my-transactions.component';
import { NewTransactionsComponent } from '../new-transactions/new-transactions.component';
import { LoginComponent } from '../login/login.component';
import { AuthGuard } from '../auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/mainpage',
    pathMatch: 'full'
  },
  {
   path: 'mainpage',
   component: MainPageComponent
  },
  {
    path: 'myrequests',
    component: MyRequestsComponent,
    canActivate: [AuthGuard],
    data: {roles: ['USER', 'ADMIN']}
  },
  {
    path: 'newrequests',
    component: NewRequestsComponent,
    canActivate: [AuthGuard],
    data: {roles: ['USER', 'ADMIN']}
  },
  {
    path: 'mytransactions',
    component:MyTransactionsComponent,
    canActivate: [AuthGuard],
    data: {roles: ['USER', 'ADMIN']}
  },
  {
    path: 'newtransactions',
    component:NewTransactionsComponent,
    canActivate: [AuthGuard],
    data: {roles: ['USER', 'ADMIN']}
  },
  {
    path: 'login',
    component: LoginComponent
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)  ],
  exports: [ RouterModule ],
  declarations: []
})
export class RoutingModule { }