
import { Component } from '@angular/core';
import { CategoryDTO } from '../../interfaces/category-dto';
import { CategoryService } from '../../services/category-service.service';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-add-catagory',
  templateUrl: './add-catagory.component.html',
  imports:[FormsModule, NgIf]
})
export class AddCatagoryComponent {
  category: CategoryDTO = { cid: 0, categoryName: '' };
  message: string | null = null;

  constructor(private categoryService: CategoryService) {}

  onSubmit(): void {
    this.categoryService.createCategory(this.category).subscribe({
      next: (response) => {
        this.message = `Category "${response.categoryName}" added successfully!`;
        this.category = { cid: 0, categoryName: '' }; // Reset form
      },
      error: (error) => {
        console.error('Error adding category:', error);
        this.message = 'Failed to add category. Please try again.';
      },
    });
  }
}
