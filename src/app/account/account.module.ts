import { NgModule } from '@angular/core';
import { AccountDetailComponent } from './account-detail/account-detail.component';
import { AccountFormComponent } from './account-form/account-form.component';
import { ListAccountComponent } from './list-account/list-account.component';
import { AccountComponent } from './account.component';
import { AccountRoutingModule } from './account.routing';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    AccountComponent,
    AccountDetailComponent,
    AccountFormComponent,
    ListAccountComponent
  ],
  imports: [
    SharedModule,
    AccountRoutingModule
  ]
})
export class AccountModule {}
