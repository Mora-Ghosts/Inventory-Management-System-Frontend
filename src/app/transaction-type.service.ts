import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Stock} from './stock';
import {Observable} from 'rxjs';
import {TransactionType} from './transaction-type';

@Injectable({
  providedIn: 'root'
})
export class TransactionTypeService {

  private apiUrl = 'http://localhost:8080/api/transaction-types'; // Replace with your backend URL

  constructor(private http: HttpClient) {}

  getAllTransactionTypes(): Observable<TransactionType[]> {
    return this.http.get<TransactionType[]>(this.apiUrl);
  }
}
