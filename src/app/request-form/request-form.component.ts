import { Component, OnInit, ViewChild, OnChanges, Output, Input, EventEmitter } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Request } from "../request";

@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.css']
})
export class RequestFormComponent implements OnChanges {
    @ViewChild(NgForm) form: NgForm;
  
    @Input() request: Request = null;
  
    @Output() onSubmit = new EventEmitter<Request>();
    @Output() onReset = new EventEmitter();
  
    model: Request = null;
  
    constructor() { }
  
    // ngOnInit() {
    //   this.model = Object.assign({}, this.issue);
    // }
  
    ngOnChanges() {
      this.model = Object.assign({}, this.request);
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

