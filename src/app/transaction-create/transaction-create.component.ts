import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { Transaction } from "../transaction";
import { Observable } from "rxjs";
import { TransactionService } from "../transaction.service";
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-transaction-create',
  templateUrl: './transaction-create.component.html',
  styleUrls: ['./transaction-create.component.css']
})
export class TransactionCreateComponent implements OnInit {

  transaction: Transaction;

    constructor(
      private route: ActivatedRoute,
      private transactionService: TransactionService,
      private location: Location
    ) { }

    ngOnInit() {
      this.getTransaction();
    }

    getTransaction() {
      this.route.paramMap
        .switchMap((params: ParamMap) => {
          const id = params.get('id');
          const transaction = id !== null ?  this.transactionService.getTransaction(+id) : Observable.of(new Transaction());
          return transaction;
        })
        .subscribe(transaction => this.transaction = transaction);

    }

    onFormSubmit(transaction: Transaction) {
      let ob: Observable<Transaction>;
      if (transaction.id > 0) {
        ob = this.transactionService.updateTransaction(transaction);
      } else {
        ob = this.transactionService.addTransaction(transaction);
      }
      ob.subscribe(transaction => this.location.back());
    }

    onFormReset() {
      this.location.back();
    }

}

