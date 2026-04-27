import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardService } from '../services/dashboard.service';
import { PracticeCategorySummary, PracticeCategoryDetails } from '../models/dashboard.model';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  private dashboardService = inject(DashboardService);

  public categories: PracticeCategorySummary[] = [];
  public openedCategorySlugs = new Set<string>();
  public categoryDetails: Record<string, PracticeCategoryDetails> = {};
  public loading = false;
  public errorMessage = '';

  ngOnInit(): void {
    this.fetchCategories();
  }

  public fetchCategories(): void {
    this.loading = true;

    this.dashboardService.getCategories().subscribe({
      next: (categories) => {
        this.categories = categories.sort((a, b) => a.orderIndex - b.orderIndex);
        this.loading = false;
      },
      error: (err) => {
        this.errorMessage = 'Failed to load practice categories.';
        this.loading = false;
        console.error(err);
      },
    });
  }

  public toggleCategory(slug: string): void {
    if (this.openedCategorySlugs.has(slug)) {
      this.openedCategorySlugs.delete(slug);
      return;
    }
    this.openedCategorySlugs.add(slug);
    if (this.categoryDetails[slug]) {
      return;
    }
    this.dashboardService.getCategoryDetails(slug).subscribe({
      next: (details) => {
        this.categoryDetails[slug] = details;
      },
      error: (err) => {
        console.error(`Failed to load details for ${slug}`, err);
      },
    });
  }

  public isOpen(slug: string): boolean {
    return this.openedCategorySlugs.has(slug);
  }

  public getDetails(slug: string): PracticeCategoryDetails | null {
    return this.categoryDetails[slug] ?? null;
  }
}
