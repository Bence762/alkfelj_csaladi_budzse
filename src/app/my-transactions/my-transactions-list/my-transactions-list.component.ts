import { Component, OnInit, ViewChild } from '@angular/core';
import { Transaction } from "../../transaction";
import { TransactionFormComponent} from "../../transaction-form/transaction-form.component";
@Component({
  selector: 'app-my-transactions-list',
  templateUrl: './my-transactions-list.component.html',
  styleUrls: ['./my-transactions-list.component.css']
})
export class MyTransactionsListComponent implements OnInit {
  @ViewChild(TransactionFormComponent) transactionForm: TransactionFormComponent;
  
    issues = [];
    filteredIssues = [];
  
    selectedStatus = '';
  
    constructor(
      // private issueService: IssueService
    ) {}
  
    ngOnInit() {
      // this.issueService.getIssues().subscribe(issues => {
        // this.issues = issues;
        // this.filterIssues();
      // });
    }
  
    onFilterChange(value: string) {
      this.selectedStatus = value;
      this.filterIssues();
    }
  
    filterIssues() {
      this.filteredIssues = this.selectedStatus === '' ? this.issues : this.issues.filter(issue => issue.status === this.selectedStatus);
    }
  
  }
  
