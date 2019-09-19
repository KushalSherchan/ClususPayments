import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaymentComponent } from './payment.component';
import { PaymentFormComponent } from './payment-form/payment-form.component';
import { ListPaymentComponent } from './list-payment/list-payment.component';
import { PaymentDetailComponent } from './payment-detail/payment-detail.component';

const paymentRoutes: Routes = [
  {
    path: '', component: PaymentComponent,
    children:
  [
    { path: 'paymentForm', component: PaymentFormComponent },
    { path: 'listPayment', component: ListPaymentComponent },
    { path: 'listPayment/:id', component: PaymentDetailComponent}
  ] }
];

@NgModule({
  imports: [
    RouterModule.forChild(paymentRoutes)
  ],
  exports: [RouterModule]
})

export class PaymentRouting {}
