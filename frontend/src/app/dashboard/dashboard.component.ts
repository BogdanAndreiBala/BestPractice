import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  private http = inject(HttpClient);
  readonly apiBaseUrl = 'http://localhost:3000/practices';

  categories: any[] = [];
  openedCategorySlugs = new Set<string>();
  categoryDetails: Record<string, any> = {};
  loading = false;
  errorMessage = '';

  ngOnInit(): void {
    this.fetchCategories();
  }

  fetchCategories(): void {
    this.loading = true;
    this.http.get<any[]>(`${this.apiBaseUrl}/categories`).subscribe((categories) => {
      this.categories = categories.sort((a: any, b: any) => a.orderIndex - b.orderIndex);
      this.loading = false;
    });
  }

  toggleCategory(slug: string): void {
    if (this.openedCategorySlugs.has(slug)) {
      this.openedCategorySlugs.delete(slug);
      return;
    }
    this.openedCategorySlugs.add(slug);
    if (this.categoryDetails[slug]) return;

    this.http.get<any>(`${this.apiBaseUrl}/categories/${slug}`).subscribe((details) => {
      this.categoryDetails[slug] = details;
    });
  }

  isOpen(slug: string): boolean {
    return this.openedCategorySlugs.has(slug);
  }

  getDetails(slug: string): any {
    return this.categoryDetails[slug] ?? null;
  }
}
