import { Component, OnInit, OnDestroy, ViewChild, AfterViewInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import { Account } from 'src/app/models/account';
import { Subscription } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';

import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { MatSort } from '@angular/material/sort';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-account',
  templateUrl: './list-account.component.html',
  styleUrls: ['./list-account.component.css']
})

export class ListAccountComponent implements OnInit, AfterViewInit, OnDestroy {
  isEmpty = true;
  subscription: Subscription;
  displayedColumns = ['account', 'name', 'number'];
  dataSource = new MatTableDataSource<Account>();


  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private accountService: AccountService,
              private router: Router,
              private toastr: ToastrService) { }

  ngOnInit() {

    this.subscription = this.accountService.getAllAccounts().subscribe(Allaccounts => {
      this.dataSource.data = Allaccounts;
      if (this.dataSource.data.length > 0) {
        this.isEmpty = false;
      }
    }, error => {
      this.toastr.error(error);
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onNavigate(id: Account) {
    this.router.navigate(['/account/listAccount', id.id]);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
