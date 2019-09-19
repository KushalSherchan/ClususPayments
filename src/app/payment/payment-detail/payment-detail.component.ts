import { Component, OnInit, OnDestroy } from '@angular/core';
import { PaymentService } from 'src/app/services/payment.service';
import { ActivatedRoute } from '@angular/router';
import { Payment } from 'src/app/models/payment';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment-detail',
  templateUrl: './payment-detail.component.html',
  styleUrls: ['./payment-detail.component.css']
})

export class PaymentDetailComponent implements OnInit, OnDestroy {
  paymentId: string;
  payment: Payment;
  subscription: Subscription;

  constructor(private paymentService: PaymentService,
              private router: ActivatedRoute,
              private toastr: ToastrService) { }

  ngOnInit() {
    this.paymentId = this.router.snapshot.params.id;
    this.subscription = this.paymentService.getPaymentById(this.paymentId)
    .subscribe(
      getPayments => {
        this.payment = getPayments;
      },
      error => {
        this.toastr.error(error);
      }
    );
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
