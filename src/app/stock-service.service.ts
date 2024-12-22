import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Stock } from './stock';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  private apiUrl = 'http://localhost:8080/api/stocks'; // Replace with your backend URL

  constructor(private http: HttpClient) {}

  // Create a new stock entry
  createStock(stock: Stock): Observable<Stock> {
    return this.http.post<Stock>(this.apiUrl, stock);
  }
  getAllStocks(): Observable<Stock[]> {
    return this.http.get<Stock[]>(this.apiUrl);
  }
  updateStock(stock: Stock): Observable<Stock> {
    return this.http.put<Stock>(`${this.apiUrl}/${stock.stockId}`, stock);
  }
  deleteStock(stockId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${stockId}`);
  }
}
