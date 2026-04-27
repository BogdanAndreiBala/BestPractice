import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../enviroments/enviroment';
import { PracticeCategorySummary, PracticeCategoryDetails } from '../models/dashboard.model';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private http = inject(HttpClient);

  public getCategories(): Observable<PracticeCategorySummary[]> {
    return this.http.get<PracticeCategorySummary[]>(`${environment.apiUrl}/practices/categories`);
  }

  public getCategoryDetails(slug: string): Observable<PracticeCategoryDetails> {
    return this.http.get<PracticeCategoryDetails>(
      `${environment.apiUrl}/practices/categories/${slug}`,
    );
  }
}
