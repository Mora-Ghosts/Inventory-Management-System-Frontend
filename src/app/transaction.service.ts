import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Stock} from './stock';
import {Observable} from 'rxjs';
import {Transaction} from './transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private apiUrl = 'http://localhost:8080/api/transactions'; // Replace with your backend URL

  constructor(private http: HttpClient) {}

  // Create a new stock entry
  createTransaction(transaction: Transaction): Observable<Transaction> {
    return this.http.post<Transaction>(this.apiUrl, transaction);
  }
  getAllTransactions(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(this.apiUrl);
  }
  updateTransaction(transaction: Transaction): Observable<Transaction> {
    return this.http.put<Transaction>(`${this.apiUrl}/${transaction.tid}`, transaction);
  }
  deleteTransaction(transactionId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${transactionId}`);
  }
}
