import { Injectable } from '@angular/core';
import { Request } from "./request";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

const REQUESTS: Request[] = [
   {id: 1, title: 'valami1', quantity: '2000' , comment: 'valami', status: "ADDED"},
   {id: 2, title: 'valami2',quantity: '4000' ,comment: 'need money' , status: "ADDED"},
   {id: 3, title: 'valami3',quantity: '5000' ,comment: 'for food' , status: "REJECTED"},
   {id: 4, title: 'valami4',quantity: '20000' ,comment: 'for luxourious purpose' , status: "ACCEPTED"},
 ];

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class RequestService {

  constructor(
    private http: HttpClient
  ) { }

  getRequests(): Observable<Request[]> {
    return this.http.get<Request[]>('http://localhost:4200/api/request');
  }

   getRequest(id: number): Observable<Request> {
        return this.http.get<Request>(`http://localhost:4200/api/request/${id}`);
   }

  updateRequest(request: Request): Observable<Request> {
    return this.http.put<Request>(`http://localhost:4200/api/request/${request.id}`, request, httpOptions);
  }

  addRequest(request: Request): Observable<Request> {
    return this.http.post<Request>(`http://localhost:4200/api/request`, request, httpOptions);
  }

}
