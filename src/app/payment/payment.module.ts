import { NgModule } from '@angular/core';
import { PaymentComponent } from './payment.component';
import { ListPaymentComponent } from './list-payment/list-payment.component';
import { PaymentDetailComponent } from './payment-detail/payment-detail.component';
import { PaymentFormComponent } from './payment-form/payment-form.component';
import { SharedModule } from '../shared/shared.module';
import { PaymentRouting } from './payment.routing';


@NgModule({
  declarations: [
    PaymentComponent,
    ListPaymentComponent,
    PaymentDetailComponent,
    PaymentFormComponent
  ],
  imports: [
    SharedModule,
    PaymentRouting
  ]
})

export class PaymentModule {}
