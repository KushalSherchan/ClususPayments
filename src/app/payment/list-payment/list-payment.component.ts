import { Component, OnInit, OnDestroy, ViewChild, AfterViewInit } from '@angular/core';
import { PaymentService } from 'src/app/services/payment.service';
import { Payment } from 'src/app/models/payment';
import { Subscription } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-payment',
  templateUrl: './list-payment.component.html',
  styleUrls: ['./list-payment.component.css']
})
export class ListPaymentComponent implements OnInit, AfterViewInit, OnDestroy {
  subscription: Subscription;

  displayedColumns = ['source', 'destination', 'amount', 'currency'];
  dataSource = new MatTableDataSource<Payment>();

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private paymentService: PaymentService,
              private router: Router,
              private toastr: ToastrService ) { }

  ngOnInit() {
    this.subscription = this.paymentService.getAllPayments().subscribe(
      getPayments => {
        this.dataSource.data = getPayments;
      },
      error => {
        this.toastr.error(error);
      }
    );
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  onNavigate(id: Payment) {
    this.router.navigate(['/payment/listPayment', id.id]);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }


}
