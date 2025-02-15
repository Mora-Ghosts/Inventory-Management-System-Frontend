import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StockValueDTO } from '../interfaces/stock-value-dto';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {
  private apiUrl = 'http://localhost:8080/api/analytics/stock-value';

  constructor(private http: HttpClient) {}

  getStockValue(): Observable<StockValueDTO[]> {
    return this.http.get<any>(this.apiUrl);
  }
}
