import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaymentService } from 'src/app/services/payment.service';
import { Payment } from 'src/app/models/payment';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css']
})
export class PaymentFormComponent implements OnInit, OnDestroy {
  currency: string[];
  payment: Payment;
  subscription: Subscription;

  constructor(private paymentService: PaymentService,
              private toastr: ToastrService) { }

  ngOnInit() {
    this.subscription = this.paymentService.getCurrency().subscribe(
      currencies => {
        this.currency = currencies;
      }, error => {
        this.toastr.error(error);
      }
    );
  }

  onFormSubmit(form: NgForm) {
    const sourceLength = form.value.sourceA.toString().length;
    const desLength = form.value.dAccount.toString().length;
    if (sourceLength !== 6 || desLength !== 6) {
      this.toastr.error('Either of Source or Destination account is not 6 digit', 'Error');
    } else {
      this.payment = {
        amount: form.value.amount,
        currencyCode: form.value.currency,
        destinationAccountNumber: form.value.dAccount,
        paymentDescription: form.value.description || 'no description provided',
        sourceAccountNumber: form.value.sourceA
      };
      this.paymentService.postPaymentForm(this.payment);
      form.reset();
    }
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
