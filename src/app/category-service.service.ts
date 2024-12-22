import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CategoryDTO } from './category-dto';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private apiUrl = 'http://localhost:8080/api/categories'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  createCategory(category: CategoryDTO): Observable<CategoryDTO> {
    return this.http.post<CategoryDTO>(this.apiUrl, category);
  }
  getCategories(): Observable<CategoryDTO[]> {
    return this.http.get<CategoryDTO[]>(this.apiUrl);
  }

  updateCategory(category: CategoryDTO): Observable<CategoryDTO> {
    return this.http.put<CategoryDTO>(`${this.apiUrl}/${category.cid}`, category);
  }

  deleteCategory(cid: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${cid}`);
  }
}
