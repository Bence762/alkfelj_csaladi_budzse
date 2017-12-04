import { Injectable } from '@angular/core';
import { Transaction } from "./transaction";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

const TRANSACTIONS: Transaction[] = [
   {id: 1, title: "Lunch", type: 'Food', date: '2017.11.29'  , quantity: '2000' , comment: 'valami' , picture: ''},
   {id: 2, title: 'Cloth', type: 'Clothing', date: '2017.11.30', quantity: '4000' ,comment: 'need money' , picture: ''},
   {id: 3, title: 'Boots', type: 'Clothing', date: '2017.12.01', quantity: '5000' ,comment: 'for food' , picture: ''},
   {id: 4, title: 'Ring', type: 'Jewellry', date: '2017.12.02', quantity: '20000' ,comment: 'for luxourious purpose' , picture: ''},
 ];

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class TransactionService {

  constructor(
    private http: HttpClient
  ) { }

  getTransactions(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>('http://localhost:4200/api/transaction');
  }

   getTransaction(id: number): Observable<Transaction> {
        return this.http.get<Transaction>(`http://localhost:4200/api/transaction/${id}`);
   }

  updateTransaction(transaction: Transaction): Observable<Transaction> {
    return this.http.put<Transaction>(`http://localhost:4200/api/transaction/${transaction.id}`, transaction, httpOptions);
  }

  addTransaction(transaction: Transaction): Observable<Transaction> {
    return this.http.post<Transaction>(`http://localhost:4200/api/transaction`, transaction, httpOptions);
  }

}
