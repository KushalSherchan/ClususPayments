import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  isAuth = false;
  loginChanged = new Subject<boolean>();
  constructor(private toastr: ToastrService) {}

  isLoginChanged() {
    if (this.isAuth) {
      this.isAuth = false;
      this.loginChanged.next(this.isAuth);
      this.toastr.success('Logged Out Successfully', 'LOGOUT');
    } else {
      this.isAuth = true;
      this.loginChanged.next(this.isAuth);
      this.toastr.success('Logged In Successfully', 'LOGIN');
    }
  }

}
