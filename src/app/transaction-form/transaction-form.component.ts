import { Component, OnInit, ViewChild, OnChanges, Output, Input, EventEmitter } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Transaction } from "../transaction";

@Component({
  selector: 'app-transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.css']
})
export class TransactionFormComponent implements OnChanges {
    @ViewChild(NgForm) form: NgForm;
  
    @Input() transaction: Transaction = null;
  
    @Output() onSubmit = new EventEmitter<Transaction>();
    @Output() onReset = new EventEmitter();
  
    model: Transaction = null;
  
    constructor() { }
  
    // ngOnInit() {
    //   this.model = Object.assign({}, this.issue);
    // }
  
    ngOnChanges() {
      this.model = Object.assign({}, this.transaction);
    }
  
    submit(form) {
      if (!form.valid) {
        return;
      }
      this.onSubmit.emit(this.model);
    }
  
    reset() {
      this.onReset.emit();
    }
  
  }
