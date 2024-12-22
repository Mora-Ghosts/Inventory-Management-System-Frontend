import { Component, OnInit } from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';
import { ProductTypeService } from '../product-type-service.service';
import { CategoryService } from '../category-service.service';
import {ProductType} from '../product-type';
import {NgFor, NgIf} from '@angular/common';
import {CategoryDTO} from '../category-dto';

@Component({
  selector: 'app-add-product-type',
  templateUrl: './add-product-type.component.html',
  styleUrls: ['./add-product-type.component.css'],
  imports:[FormsModule, NgIf, NgFor]
})
export class AddProductTypeComponent implements OnInit {
  categories: CategoryDTO[] = []; // Store fetched categories
  productType:ProductType  = {
    categoryId: null,
    brand: '',
    model: '',
    color: ''
  };

  constructor(
    private categoryService: CategoryService,
    private productTypeService: ProductTypeService
  ) {}

  ngOnInit(): void {
    this.fetchCategories();
  }

  fetchCategories(): void {
    this.categoryService.getCategories().subscribe({
      next: (data) => (this.categories = data),
      error: (err) => console.error('Error fetching categories', err)
    });
  }

  onSubmit(form: NgForm): void {
    if (form.valid) {
      this.productTypeService.createProductType(this.productType).subscribe({
        next: (response) => {
          console.log('Product Type added successfully', response);
          form.resetForm();
        },
        error: (err) => console.error('Error creating product type', err)
      });
    }
  }
}
