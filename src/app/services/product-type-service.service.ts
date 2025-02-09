import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductType } from '../interfaces/product-type';

@Injectable({
  providedIn: 'root'
})
export class ProductTypeService {
  private apiUrl = 'http://localhost:8080/api/product-types'; // Replace with your backend URL

  constructor(private http: HttpClient) {}

  // Create a new ProductType
  createProductType(productType: ProductType): Observable<ProductType> {
    return this.http.post<ProductType>(this.apiUrl, productType);
  }
  getAllProductTypes(): Observable<ProductType[]> {
    return this.http.get<ProductType[]>(this.apiUrl);
  }

  updateProductType(productType: ProductType): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${productType.pid}`, productType);
  }

  deleteProductType(productId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${productId}`);
  }

}
