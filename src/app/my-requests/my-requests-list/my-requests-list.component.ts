import { Component, OnInit, ViewChild } from '@angular/core';
import { Request } from "../../request";
import { RequestFormComponent} from "../../request-form/request-form.component";
@Component({
  selector: 'app-my-requests-list',
  templateUrl: './my-requests-list.component.html',
  styleUrls: ['./my-requests-list.component.css']
})
export class MyRequestsListComponent implements OnInit {
  @ViewChild(RequestFormComponent) requestForm: RequestFormComponent;
  
    requests = [];
    filteredRequests = [];
  
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
      this.filterRequests();
    }
  
    filterRequests() {
      this.filteredRequests = this.selectedStatus === '' ? this.requests : this.requests.filter(request=> request.status === this.selectedStatus);
    }
  
  }
  
