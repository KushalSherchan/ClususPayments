import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Account } from 'src/app/models/account';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-account-form',
  templateUrl: './account-form.component.html',
  styleUrls: ['./account-form.component.css']
})

export class AccountFormComponent implements OnInit {
  account: Account;
  accountNumber = 0;

  constructor(private accountService: AccountService) {}

  ngOnInit() {}

  onFormSubmit(form: NgForm) {
    this.account = {
      accountHolderName : form.value.fullName,
      accountDescription : form.value.description || 'Not Written',
      accountHolderPhoneNumber : form.value.phoneNumber || 'Not Mentioned',
      accountNumber : form.value.accountNumber
    };
    this.accountService.postAccount(this.account);
    form.reset();
  }
}
