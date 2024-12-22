
import { Component, OnInit } from '@angular/core';
import { CategoryDTO } from '../category-dto';
import { CategoryService } from '../category-service.service';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-view-categories',
  templateUrl: './view-type.component.html',
  imports:[NgIf, NgFor, FormsModule]
})
export class ViewTypeComponent implements OnInit {
  categories: CategoryDTO[] = [];
  editMode: number | null = null;

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    this.categoryService.getCategories().subscribe({
      next: (data) => (this.categories = data),
      error: (err) => console.error('Error fetching categories:', err),
    });
  }

  enableEdit(cid: number): void {
    this.editMode = cid;
  }

  updateCategory(category: CategoryDTO): void {
    this.categoryService.updateCategory(category).subscribe({
      next: (updatedCategory) => {
        this.editMode = null;
        this.loadCategories();
      },
      error: (err) => console.error('Error updating category:', err),
    });
  }

  deleteCategory(cid: number): void {
    if (confirm('Are you sure you want to delete this category?')) {
      this.categoryService.deleteCategory(cid).subscribe({
        next: () => this.loadCategories(),
        error: (err) => console.error('Error deleting category:', err),
      });
    }
  }
}
