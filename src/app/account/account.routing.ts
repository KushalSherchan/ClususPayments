import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './account.component';
import { AccountFormComponent } from './account-form/account-form.component';
import { ListAccountComponent } from './list-account/list-account.component';
import { AccountDetailComponent } from './account-detail/account-detail.component';

const accountRoutes: Routes = [
  {
    path: '',
    component: AccountComponent,
    children:
    [{ path: 'accountForm', component: AccountFormComponent },
     { path: 'listAccount', component: ListAccountComponent},
     { path: 'listAccount/:id', component: AccountDetailComponent}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(accountRoutes)
  ],
  exports: [RouterModule]
})

export class AccountRoutingModule {}
