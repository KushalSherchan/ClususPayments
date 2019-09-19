import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AccountService } from './services/account.service';

import { ToastrModule } from 'ngx-toastr';
import { PaymentService } from './services/payment.service';
import { AccountModule } from './account/account.module';
import { PaymentModule } from './payment/payment.module';
import { LayoutModule } from './layout/layout.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    LayoutModule,
    AccountModule,
    PaymentModule,
    ToastrModule.forRoot()
  ],
  providers: [AccountService, PaymentService],
  bootstrap: [AppComponent]
})
export class AppModule {}
