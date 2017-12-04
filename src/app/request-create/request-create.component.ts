import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { Request } from "../request";
import { Observable } from "rxjs";
import { RequestService } from "../request.service";
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent implements OnInit {

  request: Request;

    constructor(
      private route: ActivatedRoute,
      private requestService: RequestService,
      private location: Location
    ) { }

    ngOnInit() {
      this.getRequest();
    }

    getRequest() {
      this.route.paramMap
        .switchMap((params: ParamMap) => {
          const id = params.get('id');
          const request = id !== null ?  this.requestService.getRequest(+id) : Observable.of(new Request());
          return request;
        })
        .subscribe(request => this.request = request);

    }

    onFormSubmit(request: Request) {
      let ob: Observable<Request>;
      if (request.id > 0) {
        ob = this.requestService.updateRequest(request);
      } else {
        ob = this.requestService.addRequest(request);
      }
      ob.subscribe(request => this.location.back());
    }

    onFormReset() {
      this.location.back();
    }

}
