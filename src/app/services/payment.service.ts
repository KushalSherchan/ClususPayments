import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Payment } from '../models/payment';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  url = 'http://localhost:8080/payments-system/payment';

  constructor(private http: HttpClient,
              private toastr: ToastrService) {}

  getCurrency(): Observable<string[]> {
    return this.http.get<string[]>
    ('http://localhost:8080/payments-system/currency')
    .pipe(catchError(this.errorHandler));
  }

  getPaymentById(id: string): Observable<Payment> {
    return this.http.get<Payment>
    (`${this.url}/${id}`)
    .pipe(catchError(this.errorHandler));
  }

  private errorHandler(error: HttpErrorResponse) {
    return throwError(error.error || 'Server error');
  }

  getAllPayments(): Observable<Payment[]> {
      return this.http.get<Payment[]>
      (this.url).pipe(catchError(this.errorHandler));
  }

  postPaymentForm(payment: Payment) {
    this.http.post<Account>
    (`${this.url}/add`, payment)
    .pipe(catchError(this.errorHandler))
    .subscribe(success => {
      this.toastr.success('Added Successfully');
    }, error => {
      this.toastr.error(error, 'Unsuccessful');
    });
 }
}
