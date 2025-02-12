import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BarcodeService {
  private baseUrl = 'http://localhost:8080/api/stocks' // Adjust the base URL as needed

  constructor(private http: HttpClient) {}

  downloadBarcode(stockId: number, downloadDir?: string, stockCount: number = 1): Observable<Blob> {
    let params = new HttpParams().set('stockCount', stockCount.toString());

    if (downloadDir) {
      params = params.set('downloadDir', downloadDir);
    }

    const url = `${this.baseUrl}/${stockId}/barcode/download`;

    // Return the Observable that will emit the Blob data
    return this.http.get(url, { params, responseType: 'blob' });
  }
  downloadSingleBarcode(stockId: number): Observable<Blob> { 

    const url = `${this.baseUrl}/${stockId}/barcode`;

    // Return the Observable that will emit the Blob data
    return this.http.get(url, { responseType: 'blob' });
  }
}
