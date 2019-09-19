import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';
import { Account } from 'src/app/models/account';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.css']
})
export class AccountDetailComponent implements OnInit, OnDestroy {
  accountId: string;
  accountDetail: Account;
  subscription: Subscription;

  constructor(private route: ActivatedRoute,
              private accountService: AccountService) {}

  ngOnInit() {
    this.accountId = this.route.snapshot.params.id;
    this.subscription = this.accountService.getAccountById(this.accountId).subscribe(
      account => {
        this.accountDetail = account;
      },
      error => {
        console.log(error);
      }
    );
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
