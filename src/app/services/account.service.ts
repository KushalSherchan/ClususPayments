import { Injectable } from '@angular/core';
import { Account } from '../models/account';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})

export class AccountService {
  url = 'http://localhost:8080/payments-system/account';

  constructor(private http: HttpClient,
              private toastr: ToastrService) {}

  getAllAccounts(): Observable<Account[]> {
    return this.http.get<Account[]>
    (this.url).pipe(catchError(this.errorHandler));
  }

  getAccountById(id: string): Observable<Account> {
    return  this.http.get<Account>
    (`${this.url}/${id}`)
    .pipe(catchError(this.errorHandler));
  }

  postAccount(account: Account) {
       this.http.post<Account>
       (`${this.url}/add`, account)
       .pipe(catchError(this.errorHandler))
       .subscribe(success => {
         this.toastr.success('Added Account Successfully', 'SUCCESS');
       }, error => {
          this.toastr.error(error, 'ERROR');
       });
  }

  private errorHandler(error: HttpErrorResponse) {
     return throwError(error.error || 'Server error');
  }

}
