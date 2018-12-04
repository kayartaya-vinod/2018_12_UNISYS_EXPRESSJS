import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class CategoryService {
  public readonly baseUrl = 'http://localhost:3000/api/categories/';

  constructor(private http: HttpClient) { }

  getAllCategories(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  deleteCategory(id: any): Observable<any> {
    return this.http.delete(this.baseUrl + id);
  }

  addNewCategory(category: any): Observable<any> {
    return this.http.post(this.baseUrl, category);
  }
}
