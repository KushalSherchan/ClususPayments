import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPageComponent } from './layout/main-page/main-page.component';
import { LoginComponent } from './layout/login/login.component';

const routes: Routes = [
  { path: '', component: MainPageComponent},
  { path: 'account' , loadChildren: () => import('./account/account.module').then(m => m.AccountModule)},
  { path: 'payment' , loadChildren: () => import('./payment/payment.module').then(m => m.PaymentModule)},
  { path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
